import React, { useState } from 'react'
import { useTheme } from '../../../../context/theme-context'
import { Container } from '../../../../layouts/container/Container'
import { Card } from '../../../../components/Card/Card'
import { useForm } from "react-hook-form"
import classes from "./EditPanel.module.scss"
import { convertToBase64 } from '../../../../helpers/imageConverter'
import { SERVER_URL } from '../../../../../config'
import { Input } from '../../../../components/Input/Input'
import Link from 'next/link'
import { MenuItemFE } from './[_id]'
import { SuccessComponent } from '../../../../components/Alert/Alert'




const NewMenu = () => {
    const { theme } = useTheme();
    const { register, handleSubmit } = useForm<MenuItemFE>()
    const [message, setMessage] = useState("");



    const onSubmit = async (data: MenuItemFE) => {

        const image = await convertToBase64(data.image[0]);
        const dataToSend = { ...data, image }

        const method = 'POST'

        const res = await fetch(SERVER_URL + "/menu", {
            method: method,
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(dataToSend),
        });

        const result = await res.json();
        setMessage(result.message);
    }



    return (
        <div className={classes[theme] + " " + classes['background']}>

            <Container>
                <Card className={classes['card']}>
                    <div className={classes['header']}>
                        <h2>Edit Panel</h2>
                        <Link href='/admin/dashboard'>Back to dashboard</Link>
                    </div>

                    {message && <SuccessComponent message={message} />}
                    <form onSubmit={handleSubmit(onSubmit)} className={classes['inputs-grid']}>
                        <Input register={register('name')} placeholder="Write menu name" label="Name" className={classes['name']} />
                        <Input register={register('description')} placeholder="Write menu description" label="Description" className={classes['descrip']} />
                        <Input register={register('price')} placeholder="Set Price" label="Price" />
                        <Input register={register('category')} placeholder="Choose category" label="Category" />
                        <Input register={register('image')} type='file' placeholder="Choose image" label="Image" />
                        <button type='submit'>Publish</button>
                    </form>
                </Card>
            </Container>
        </div>
    )
}



export default NewMenu;








