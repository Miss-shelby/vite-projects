//import the usercontext parent where you want to use it 
import { useContext } from "react"
import UsersContextParent, { UserContext } from "../context/userContext"
//we wrap our usercontext children with the user context parent
const AnotherContext =()=>{
  
    return <UsersContextParent>

        <Name/>
        <Age/>
    </UsersContextParent>
}
export default AnotherContext

export const Name = ()=>{
    const {userData, changeUserName, changeUserAge} = useContext(UserContext)
    console.log('userdata from another context', userData)
    return <div>
        <p>we are learning use context {userData.userName}</p>
        <button onClick={changeUserName}>change name</button>
    </div>
}
export const Age=()=>{
    const {userData, changeUserName, changeUserAge} = useContext(UserContext)
    return <div>
        <p>she is years {userData.age} old and she is a {userData.occupation}</p>
        <button onClick={changeUserAge}>change age</button>
    </div>
}