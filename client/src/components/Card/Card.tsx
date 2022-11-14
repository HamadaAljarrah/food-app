import React, { ReactNode } from 'react'
import { useTheme } from '../../context/theme-context';
import classes from "./Card.module.scss"

type Props = {
    children: ReactNode,
    className?: string,
}

export const Card = ({ children,className }: Props) => {
    const { theme } = useTheme();
    return (
        <div className={classes[theme] + " " + classes['card'] + " " + className}>
            {children}
        </div>
    )
}
