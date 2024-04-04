import { useReducer, useState } from "react";
//the reducer function takes the current state and action passed to the dispatch as parameter and whatever is returned from reducer is the new state
const reducer =(state,action)=>{
    //manipultes the state and returns the current state
    switch(action.type){
        case'increment':{
            return {count: state.count + 1}
        }
        case'decrement':{
            return {count:state.count-1}
        }
        default:
            return state
    }

    // console.log(state,'from reducer function')
    // console.log(action,'from reducer function')
    // return{count:20}
}
const initialState= {
    //we initiliaze the state here
    count:10,
}
const ReducerComponent=()=>{
    const [state,dispatch]= useReducer(reducer,initialState)
    // console.log(state)
    return <div>
        <p>hi reducer here</p> 
        <p> count:{state?.count}</p> 
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
    </div>   
}
export default ReducerComponent