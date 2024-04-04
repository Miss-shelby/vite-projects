import { createContext, useState } from "react";
//create user context here
export const UserContext = createContext({})
//all the children can automatically receive the value from parent
const UsersContextParent=({children})=>{
    //updating data in our context with usesate
    const[userData,setUserData] = useState({
        name:'Marycynthia',
        userName:'BigTee',
        age:24,
        occupation:'tech sis'
    })
    const changeUserAge=()=>{
        setUserData(()=>({
            ...userData,
            age:16,
        }))
    }
    const changeUserName = ()=>{
        setUserData(()=>({
            ...userData,
            userName:'Ammie',
        }))
    }
    return <UserContext.Provider value={{userData,changeUserName,changeUserAge}}>{children}</UserContext.Provider>
}
export default UsersContextParent