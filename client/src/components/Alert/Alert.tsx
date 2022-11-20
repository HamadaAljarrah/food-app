import React from 'react'
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../Icons/Icons"
import classes from "./alert.module.scss"

type AlertType = 'Error' | 'Warning' | 'Info' | 'Success'

type Props = {
    message: string,
    title: string,
    type: AlertType
    icon: JSX.Element
}


const Alert = ({ type, message, title, icon }: Props) => {
    const style = classes.alert + " " + classes[type]
    return (
        <div className={style}>
            <div className={classes.wrapper}>
                <div className={classes.icon}>{icon}</div>
                <div>
                    <p className={classes.title}>{title}</p>
                    <p className={classes.message}>{message}</p>
                </div>
            </div>
        </div>
    )
}

export const ErrorConponent = ({ message }: Pick<Props, 'message'>) => {
    return (
        <Alert
            type='Error'
            message={message}
            title={'Error'}
            icon={<ErrorIcon />} />
    )
}
export const WarningComponent = ({ message }: Pick<Props, 'message'>) => {
    return (
        <Alert
            type='Warning'
            message={message}
            title={'Warning'}
            icon={<WarningIcon />} />
    )
}
export const InfoComponent = ({ message }: Pick<Props, 'message'>) => {
    return (
        <Alert
            type='Info'
            message={message}
            title={'Info'}
            icon={<InfoIcon />} />
    )
}
export const SuccessComponent = ({ message }: Pick<Props, 'message'>) => {
    return (
        <Alert
            type='Success'
            message={message}
            title={'Success'}
            icon={<SuccessIcon />} />
    )
}