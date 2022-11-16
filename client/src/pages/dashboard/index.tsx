import React from 'react'
import { SERVER_URL } from '../../../config';
import { Card } from '../../components/Card/Card';
import { CreateIcon, SortIcon } from '../../components/Icons/Icons';
import { ItemRow, MenuItemProps } from '../../components/ItemRow/ItemRow';
import { Searchbar } from '../../components/SearchBar/Searchbar';
import { useTheme } from '../../context/theme-context';
import { Container } from '../../layouts/container/Container';
import classes from "./Dashboard.module.scss"


const Dashboard = ({ menus }: { menus: MenuItemProps[] }) => {
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
                        {menus.map((menu: MenuItemProps) =>
                            <ItemRow
                                key={menu._id}
                                name={menu.name}
                                price={menu.price}
                                description={menu.description}
                                image={menu.image}
                                category={menu.category}
                                _id={menu._id}
                            />)}
                    </div>
                </Card>
            </Container>
        </div>
    )
}
export async function getServerSideProps() {
    const response = await fetch(SERVER_URL + "/menus");
    const result = await response.json();
    return {
        props: {
            menus: result.data
        }
    }
}

export default Dashboard;