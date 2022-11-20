import React, { useState } from 'react'
import classes from "./ItemRow.module.scss"
import { useTheme } from '../../context/theme-context'
import { DeleteIcon, EditIcon, ViewIcon } from '../Icons/Icons';
import { useRouter } from 'next/router';
import { SERVER_URL } from '../../../config';


export type MenuItemProps = {
    image: string,
    name: string,
    category: string,
    price: number,
    description: string,
    _id: string,
}


export const ItemRow = ({ image, name, price, description, _id }: MenuItemProps) => {
    const { theme } = useTheme();
    const router = useRouter();
    const [message, setMessage] = useState<string>();
    const [success, setSuccess] = useState<boolean>();


    const handleEdit = ()=>{
        router.push("dashboard/EditPanel/" + _id)
    }

    const handleView = ()=>{
        window.open('/', '_ blank')
    }

    const handleDelete = async ()=>{
        const response = await fetch(SERVER_URL + "/menu/"+ _id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json();
        router.reload()
    }

    return (
        <div className={classes[theme] + " " + classes['container']}>
            <div className={classes['content']}>
                <img src={image} alt="food" />
                <div>
                    <h2>{name}</h2>
                    <h4>${price}</h4>
                </div>
            </div>
            <div className={classes['description']}>
                <p>{description}</p>
            </div>
            <div className={classes['icons']}>
                <ViewIcon className={classes['icon']} onClick={handleView} />
                <EditIcon className={classes['icon']} onClick={handleEdit} />
                <DeleteIcon className={classes['icon']}  onClick={handleDelete}/>
            </div>
        </div>
    )
}

