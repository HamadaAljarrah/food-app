import React, { useState } from 'react'
import { useTheme } from '../../../context/theme-context'
import { Container } from '../../../layouts/container/Container'
import { Card } from '../../../components/Card/Card'
import { useForm } from "react-hook-form"
import classes from "./EditPanel.module.scss"
import { convertToBase64 } from '../../../helpers/imageConverter'
import { SERVER_URL } from '../../../../config'
import { Input } from '../../../components/Input/Input'
import Link from 'next/link'


export type MenuItemFE = {
    image: File[],
    name: string,
    category: string,
    price: number,
    description: string,
}

const EditPanel = ({ menu }: { menu: any }) => {
    const { theme } = useTheme();
    const { register, handleSubmit } = useForm<MenuItemFE>()
    const [message, setMessage] = useState("");



    const onSubmit = async (data: MenuItemFE) => {
        let image
        if (data.image[0] !== undefined) {
            image = await convertToBase64(data.image[0]);
        } else {
            image = menu.image
        }

        const dataToSend = { ...data, image }

        const url = "http://localhost:4000/menu/" + menu._id
        const method = 'PUT'

        const res = await fetch(url, {
            method: method,
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(dataToSend),
        });

        const result = await res.json();
        setMessage(result.message);
    }


    return (
        <div className={classes[theme] + " " + classes['container']}>
            <Container>
                <Card className={classes['card']}>
                    <div className={classes['header']}>
                        <h2>Edit Panel</h2>
                        <Link href='/dashboard'>Cancel</Link>
                    </div>
                    {message && <p>{message}</p>}
                    <form onSubmit={handleSubmit(onSubmit)} className={classes['inputs-grid']}>
                        <Input defaultValue={menu.name} register={register('name')} placeholder="Write menu name" label="Name" className={classes['name']} />
                        <Input defaultValue={menu.description} register={register('description')} placeholder="Write menu description" label="Description" className={classes['descrip']} />
                        <Input defaultValue={menu.price} register={register('price')} placeholder="Set Price" label="Price" />
                        <Input defaultValue={menu.category} register={register('category')} placeholder="Choose category" label="Category" />
                        <Input register={register('image')} type='file' placeholder="Choose image" label="Image" />
                        <button type='submit'>Publish</button>
                    </form>
                </Card>
            </Container>
        </div>
    )
}

export async function getStaticPaths() {
    const response = await fetch(SERVER_URL + "/menus");
    const result = await response.json();

    let paths = result.data.map((m: any) => {
        return { params: { _id: m._id } }
    });
    paths.push({ params: { _id: "new" } })
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context: any) {
    const { params } = context;

    const response = await fetch(SERVER_URL + "/menu/" + params._id);
    const result = await response.json();

    return {
        props: {
            menu: result.data,
        }
    }
}

export default EditPanel;








    // useEffect(() => {
    //     if (menuId !== undefined) {
    //         (async () => {
    //             fetch(SERVER_URL + "/menus")
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     const theMenu = data.data.filter((m: any) => m._id === menuId);
    //                     setMenu(theMenu[0]);

    //                 })
    //         })();
    //         return () => {
    //             setMenuId(undefined)
    //         }
    //     }
    // }, [menuId])