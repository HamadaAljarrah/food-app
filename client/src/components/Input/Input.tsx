import React from 'react'
import { useTheme } from '../../context/theme-context'
import classes from "./Input.module.scss"

interface Props {
    label: string
    className?: string,
    register?: any,
    [x: string]: any
}

export const Input = (props: Props) => {

    const { theme } = useTheme();
    return (
        <div className={classes[theme] + " " + classes.input + " " + props.className}>
            <label>{props.label}</label>
            <input  {...props.register} {...props} />
        </div>
    )
}

