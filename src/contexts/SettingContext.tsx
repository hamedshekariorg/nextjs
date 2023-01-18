import React, { createContext } from "react";
type SettingType={
    thmemeMode?:string
}
const initailState={
    thmemeMode:"light"
}
const SettingContext=React.createContext<SettingType>(initailState)

const SettingProvider=({children}:any)=>{
    const [setting,setSetting]=React.useState<SettingType>(initailState)
    return(
    <SettingContext.Provider value={setting}>
        {children}
    </SettingContext.Provider>
    )
}
export {SettingContext,SettingProvider}