import React from 'react'
import { useTheme } from '../../../context/theme-context'
import { Container } from '../../../layouts/container/Container'
import { Card } from '../../../components/Card/Card'
import classes from "./EditPanel.module.scss"


const EditPanel = () => {
    const { theme } = useTheme();
    return (
        <div className={classes[theme] + " " + classes['container']}>
            <Container>
                <Card className={classes['card']}>
                    <div className={classes['header']}>
                        <h2>Edit Panel</h2>
                    </div>
                    <div className={classes['inputs-grid']}>
                        <div className={classes['name']}>
                            <label htmlFor="">Name</label>
                            <input placeholder='Write menu name' />

                        </div>
                        <div className={classes['descrip']}>
                            <label htmlFor="">Title</label>
                            <input placeholder='Write menu description' />
                        </div>
                        <div>
                            <label htmlFor="">Price</label>
                            <input type='number' placeholder='Set price' />
                        </div>
                        <div>
                            <label htmlFor="">Category</label>
                            <input placeholder='Choose category' />
                        </div>
                        <div>
                            <label htmlFor="">Image</label>
                            <input type='file' placeholder='Choose image' />
                        </div>
                        <button>Publish</button>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default EditPanel;