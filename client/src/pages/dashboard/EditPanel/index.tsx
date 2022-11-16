import React, { useState } from 'react'
import { useTheme } from '../../../context/theme-context'
import { Container } from '../../../layouts/container/Container'
import { Card } from '../../../components/Card/Card'
import { useForm } from "react-hook-form"
import classes from "./EditPanel.module.scss"
import { convertToBase64 } from '../../../helpers/imageConverter'
import { SERVER_URL } from '../../../../config'
import { MenuItemProps } from '../../../components/ItemRow/ItemRow'


export type MenuItemFE = {
    image: File,
    name: string,
    category: string,
    price: number,
    description: string,
}


const EditPanel = ({ data }: { data: MenuItemProps }) => {
    const { theme } = useTheme();
    const [message, setMessage] = useState("");

    const { register, handleSubmit } = useForm<any>()
    const onSubmit = async (data: any) => {
        const image = await convertToBase64(data.image[0]);
        const dataToSend = { ...data, image };
        const res = await fetch("http://localhost:4000/menu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
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
                    </div>
                    {message && <p>{message}</p>}
                    <form onSubmit={handleSubmit(onSubmit)} className={classes['inputs-grid']}>
                        <div className={classes['name']}>
                            <label htmlFor="">Name</label>
                            <input defaultValue={'test'} {...register('name')} placeholder='Write menu name' />

                        </div>
                        <div className={classes['descrip']}>
                            <label htmlFor="">Title</label>
                            <input {...register('description')} placeholder='Write menu description' />
                        </div>
                        <div>
                            <label htmlFor="">Price</label>
                            <input step="any" {...register('price')} type='number' placeholder='Set price' />
                        </div>
                        <div>
                            <label htmlFor="">Category</label>
                            <input {...register('category')} placeholder='Choose category' />
                        </div>
                        <div>
                            <label htmlFor="">Image</label>
                            <input {...register('image')} type='file' placeholder='Choose image' />
                        </div>
                        <button>Publish</button>
                    </form>
                </Card>
            </Container>
        </div>
    )
}

// export async function getStaticPaths() {
//     const response = await fetch(SERVER_URL + "/menus");
//     const result = await response.json();
//     const paths = result.data.map((data: any) => data._id)
//     return {
//         paths: [...paths],
//         fallback: false, // can also be true or 'blocking'
//     }
// }

export async function getStaticProps() {
    const response = await fetch(SERVER_URL + "/menus");
    const result = await response.json();
    return {
        props: {
            menus: result.data
        }
    }
}


export default EditPanel;