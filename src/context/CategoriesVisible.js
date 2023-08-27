import { createContext, useContext, useState } from "react";

const CategoriesVisibleContext = createContext()

export const CategoriesProvider = ({children}) => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <CategoriesVisibleContext.Provider value={{isVisible, setIsVisible}}>
            {children}
        </CategoriesVisibleContext.Provider>
    )
}

export const useCategoriesVisibleContext = () => {
    return useContext(CategoriesVisibleContext)
}