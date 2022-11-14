import React from 'react'
import classes from "./ItemRow.module.scss"
import { useTheme } from '../../context/theme-context'
import { DeleteIcon, EditIcon, ViewIcon } from '../Icons/Icons';

export const ItemRow = () => {
    const { theme } = useTheme();

    return (
        <div className={classes[theme] + " " + classes['container']}>
            <div className={classes['content']}>
                <img src="https://img.freepik.com/free-photo/top-view-bowl-spirali-pasta-heart-shaped-italian-pasta-dark-table_140725-137594.jpg?w=2000&t=st=1668438691~exp=1668439291~hmac=d85ecfba749b6b413f7dbb3d5e37031a117aa54d21b22b108a1fb89aeda91159" alt="food" />
                <div>
                    <h2>Hamburger</h2>
                    <h4>$4.95</h4>
                </div>
            </div>
            <div className={classes['description']}>
                <p>This is our best pasta ever! This is our best pasta ever! </p>
            </div>
            <div className={classes['icons']}>
                <ViewIcon className={classes['icon']} />
                <EditIcon className={classes['icon']} />
                <DeleteIcon className={classes['icon']} />
            </div>
        </div>
    )
}
