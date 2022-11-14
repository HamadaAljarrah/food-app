import React, { ReactNode } from 'react'
import { useTheme } from '../../context/theme-context'
import classes from './Background.module.scss'

type Props = {
    children: ReactNode,
    className?: string
}

export const Background = ({ children, className }: Props) => {
    const { theme } = useTheme();
    
    return (
        <div className={classes.background + "  " + classes[theme] + " " + className}>{children}</div>
    )
}