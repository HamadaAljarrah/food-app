import React, { createContext, ReactNode, useContext, useState } from 'react'

interface IMenuContext {
    menuId: string | undefined,
    setMenuId: any
}

const menuContext = createContext({} as IMenuContext);



export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [menuId, setMenuId] = useState<string>();

    return (
        <menuContext.Provider value={{ menuId, setMenuId }}>{children}</menuContext.Provider>
    )
}

export const useMenuId = () => useContext(menuContext);
