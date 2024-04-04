import { useState } from "react"
const ShowCount = ({count})=>{
    return<div>
        <p>{count}</p>
    </div>
}
export default ShowCount
export const ShowCount2=({count})=>{
    return <div>
        <p> my countTwo:{count}</p>
    </div>
}
// const userContextChildren = ()=>{
//     return <usersContextParent>

//     </usersContextParent>

// }
// export default userContextChildren