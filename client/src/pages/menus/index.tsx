import React from 'react'
import { SERVER_URL } from '../../../config'
import { MenuItemProps } from '../../components/ItemRow/ItemRow';



export default function Menus({ menus }: { menus: MenuItemProps[] }) {
    return (
        <div>
            {menus.map((menu: MenuItemProps) => <h1>{menu.name}</h1>)}
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