import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { SERVER_URL } from '../../../../config';
import { Card } from '../../../components/Card/Card';
import { CreateIcon, SortIcon } from '../../../components/Icons/Icons';
import { ItemRow, MenuItemProps } from '../../../components/ItemRow/ItemRow';
import { Modal } from '../../../components/Modal/Modal';
import { Searchbar } from '../../../components/SearchBar/Searchbar';
import { ToggleButton } from '../../../components/ToggleButton/ToggleButton';
import { useTheme } from '../../../context/theme-context';
import { Container } from '../../../layouts/container/Container';
import classes from "./Dashboard.module.scss"


const Dashboard = ({ menus }: { menus: MenuItemProps[] }) => {
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes[theme] + " " + classes['background']}>
            {/* <button onClick={() => setOpen(true)}>Open Modal</button>
            <Modal handleClose={() => setOpen(false)} isOpen={open}>
                <h1>Hamada</h1>
                <p>Test</p>
            </Modal> */}
            <Container>
                <div className={classes.toggle}>
                    <ToggleButton onClick={toggleTheme} />
                </div>
                <Card className={classes['search-card']}>
                    <Searchbar />
                    <div className={classes['create']}>
                        <CreateIcon onClick={() => router.push("dashboard/EditPanel")} />
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