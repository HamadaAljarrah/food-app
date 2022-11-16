import React from 'react'
import { Card } from '../../components/Card/Card';
import { CreateIcon, SortIcon } from '../../components/Icons/Icons';
import { ItemRow, MenuItemProps } from '../../components/ItemRow/ItemRow';
import { Searchbar } from '../../components/SearchBar/Searchbar';
import { useTheme } from '../../context/theme-context';
import { Container } from '../../layouts/container/Container';
import classes from "./Dashboard.module.scss"


const Dashboard = () => {
    const { theme } = useTheme();
    return (
        <div className={classes[theme] + " " + classes['container']}>
            <Container>
                <Card className={classes['search-card']}>
                    <Searchbar />
                    <div className={classes['create']}>
                        <CreateIcon />
                    </div>
                </Card>
                <Card className={classes['card']}>
                    <div className={classes['header']}>
                        <h2>All Menus</h2>
                        <SortIcon />
                    </div>
                    <div className={classes['items']}>
                        {DUMMY_DATA.map((menu: MenuItemProps) =>
                            <ItemRow
                                key={menu.description}
                                name={menu.name}
                                price={menu.price}
                                description={menu.description}
                                image={menu.image}
                            />)}
                    </div>
                </Card>
            </Container>
        </div>
    )
}
const DUMMY_DATA = [
    {
        name: 'Humburger',
        price: 4.95,
        description: 'This is the best hamburger you will eat ever!',
        image: 'https://foodi-hamada.netlify.app/img/category_1.jpg',
    },
    {
        name: 'Lax',
        price: 7.95,
        description: 'This is the best Lax you will eat ever!',
        image: 'https://foodi-hamada.netlify.app/img/category_1.jpg',
    },
    {
        name: 'Falafel',
        price: 3.95,
        description: 'This is the best falafel you will eat ever!',
        image: 'https://foodi-hamada.netlify.app/img/category_1.jpg',
    },
]



export default Dashboard;