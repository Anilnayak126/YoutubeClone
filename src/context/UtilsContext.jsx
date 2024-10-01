import { createContext, useContext, useState } from "react";


const UtilsContext = createContext(null);

export const UtilsContextProvider = ({childern})=>{
    const [isSidebar,setIsSidebar] = useState(false);
    const [mobileShow,setMobileShow] = useState(false);

    return <UtilsContext.Provider value={{isSidebar,setIsSidebar,mobileShow,setMobileShow}}>
        {childern}
    </UtilsContext.Provider>
}

export const useUtils = ()=>{
    const  utilsContext = useContext(UtilsContext);
    if(!utilsContext) return null;

    return utilsContext
}