import React from 'react'
import { useTheme } from '../../context/theme-context'
import classes from "./Sidebar.module.scss"


export const Sidebar = () => {
    const { theme } = useTheme();

    return (
        <div className={classes['wrapper'] + " " + classes[theme]}>
            <h1>Dashboard</h1>
            <div className={classes['links-container']}>
                <div className={classes['link-container']}>
                    <p>icon</p>
                    <p>Menus</p>
                </div>
                <div className={classes['link-container']}>
                    <p>icon</p>
                    <p>Orders</p>
                </div>
                <div className={classes['link-container']}>
                    <p>icon</p>
                    <p>Blogs</p>
                </div>
            </div>
        </div>
    )
}
