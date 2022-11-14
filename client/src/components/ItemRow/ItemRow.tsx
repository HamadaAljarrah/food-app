import React from 'react'
import classes from "./ItemRow.module.scss"
import { useTheme } from '../../context/theme-context'

export const ItemRow = () => {
    const { theme } = useTheme();

    return (
        <div className={classes[theme] + " " + classes['container']}>
            <img src="https://img.freepik.com/free-photo/top-view-bowl-spirali-pasta-heart-shaped-italian-pasta-dark-table_140725-137594.jpg?w=2000&t=st=1668438691~exp=1668439291~hmac=d85ecfba749b6b413f7dbb3d5e37031a117aa54d21b22b108a1fb89aeda91159" alt="food" />
            <div className={classes['content']}>
                <h2>Pasta</h2>
                <p>This is our best pasta ever!</p>
                <h4>$4.95</h4>
            </div>
            <div>
                <p>Edit</p>
                <p>Delete</p>
            </div>
        </div>
    )
}
