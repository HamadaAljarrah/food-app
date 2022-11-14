import React, { ReactNode } from 'react'
import classes from "./Container.module.scss"

type Props = {
    children: ReactNode,
    className?: string,
}
export const Container = ({ children, className }: Props) => {

    return (
        <div className={classes.container + " " + className}>{children}</div>
    )
}
