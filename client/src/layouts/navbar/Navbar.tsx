import React from 'react'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton'
import { useTheme } from '../../context/theme-context'
import classes from "./Navbar.module.scss"

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classes[theme] + " " + classes['navbar']}>
            <ToggleButton onClick={toggleTheme} />
        </div>

    )
}
