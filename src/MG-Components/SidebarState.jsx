import { createContext, useState } from "react";


export const SidebarStateContext = createContext(null)

export const SidebarStatePrvoider = (props) => {
    const [SidebarExtended, setSidebarExtended] = useState(false)
    return <SidebarStateContext.Provider value={{ SidebarExtended, setSidebarExtended }}>{props.children}</SidebarStateContext.Provider>
}