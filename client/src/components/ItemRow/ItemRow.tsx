import React from 'react'
import classes from "./ItemRow.module.scss"
import { useTheme } from '../../context/theme-context'
import { DeleteIcon, EditIcon, ViewIcon } from '../Icons/Icons';
import { useRouter } from 'next/router';

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
                <ViewIcon className={classes['icon']} onClick={() => window.open('/', '_ blank')} />
                <EditIcon className={classes['icon']} onClick={() => router.push("dashboard/EditPanel/" + _id)} />
                <DeleteIcon className={classes['icon']} />
            </div>
        </div>
    )
}

