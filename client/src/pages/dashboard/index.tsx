import React from 'react'
import classes from "./Dashboard.module.scss"
import { ItemRow } from '../../components/ItemRow/ItemRow';
import { useTheme } from '../../context/theme-context';
import { Container } from '../../layouts/container/Container';
import { Card } from '../../components/Card/Card';
import { CreateIcon, SortIcon } from '../../components/Icons/Icons';
import { Searchbar } from '../../components/SearchBar/Searchbar';


const Dashboard = () => {
    const { theme } = useTheme();
    return (
        <div className={classes[theme] + " " + classes['container']}>
            <Container>
                <Card className={classes['search-card']}>
                    <Searchbar />
                    <div className={classes['create']}>
                        <p>New</p>
                        <CreateIcon />
                    </div>
                </Card>
                <Card className={classes['card']}>
                    <div className={classes['header']}>
                        <h2>All Menus</h2>
                        <SortIcon />
                    </div>
                    <div className={classes['items']}>
                        <ItemRow />
                        <ItemRow />
                        <ItemRow />
                    </div>
                </Card>
            </Container>
        </div>


    )
}

export default Dashboard;