import React from 'react'
import { useTheme } from '../../context/theme-context'
import { SearchIcon } from '../Icons/Icons'
import classes from "./Searchbar.module.scss"
export const Searchbar = () => {
    const { theme } = useTheme();
    return (
        <div className={classes[theme] + " " + classes['searchbar']}>
            <SearchIcon className={classes['icon']} />
            <input placeholder='Search' />
        </div>

    )
}
