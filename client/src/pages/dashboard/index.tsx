import React from 'react'
import classes from "./Dashboard.module.scss"
import { ItemRow } from '../../components/ItemRow/ItemRow';
import { useTheme } from '../../context/theme-context';
import { Container } from '../../layouts/container/Container';
import { Card } from '../../components/Card/Card';


const Dashboard = () => {
    const { theme } = useTheme();
    return (
        <div className={classes[theme] + " " + classes['container']}>
            <Container>
                <Card className={classes['item-container']}>
                    <ItemRow />
                </Card>
            </Container>
        </div>

    )
}

export default Dashboard;