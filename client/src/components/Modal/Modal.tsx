import React, { ReactNode } from 'react'
import { Portal } from '../../layouts/Protal/Portal'
import classes from "./Modal.module.scss"


type Props = {
    isOpen: boolean,
    handleClose: ()=> void,
    children: ReactNode

}

export const Modal = ({ isOpen, handleClose, children }: Props) => {


    return (
        <Portal id='modal'>
            {isOpen &&
                <>
                    <div onClick={handleClose} className={classes.overlay} />
                    <div className={classes.modal}>
                        <button className={classes.close} onClick={handleClose}>x</button>
                        {children}
                    </div>
                </>
            }
        </Portal>
    )
}