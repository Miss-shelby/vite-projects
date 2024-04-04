import { useState } from "react"

// import styles from './travel-list-project'
//OUR DEMO ARRAY 
const initialItems =[
    {id:1,description:"passports",quantity:2,packed:false},
    {id:2,description:"socks",quantity:12,packed:true},
]
export const TravelApp = ()=>{
    const [items,setItems]= useState([]) // 11. moving state to parent component 
    const handleAddNewItems = (item)=>{ //moving the setitems function used in updating the state
        setItems(items=> [...items,item]) //we call our current state and then return a new array where we spread our current items and add a new object cox in react we dont mutate arrays 

    }
    return <div>
        <Logo/>
         <Form onAddItems = {handleAddNewItems}/>  {/*  15. to enable the form update the state, we pass in the handleadditems as props to the form */}
        <PackingList items={items}/>   {/* 12. pass our items array as a prop to the packing list*/}
        <Stats/>
    </div>
}
const Logo =()=>{
    return <h1>🌴Far Away💼</h1>
}
const Form = ({onAddItems})=>{ //16. accept the props on form component 
    //1.setting our inputs to state 
    const [description,setDescription]=useState('test')
    const [quantity,setQuantity] = useState(2)
    //6. so we create a new state to handle our newitem data 
    // const [items,setItems]= useState([]) // the default value will be an empty array 13. we move our state to parent component
    //7.then we create a function to  use the setitems to add the newitems data to our items array,it takes an item object(ournewitems) as argument
    //which it eventually adds to the array
    // const handleAddNewItems = (item)=>{
    //     setItems(items=> [...items,item]) //we call our current state and then return a new array where we spread our current items and add a new object cox in react we dont mutate arrays 

    // } // move to the new parent 
    // 9.  how do we display our newstate,how do we get the state from form to packing list that displays our ui,we cant pas it as props because the form is not a parent component of packinglist rather a sibling
    //10. so we need to lift up state, we move our state to the closet parent elemnent they both have 
    //2.WE USE HANDLE SUBMIT TO GET OUR INPUT VALUE WHEN THE FORM IS SUBMITTED
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!description) return; //3.to prevent subitting the form if the description is empty 
        //4. getting the value of our inputs state,we create a new object to store the inputs 
        const newItems = {description,quantity,packed:false,id:Date.now()};
        console.log(newItems)
        //5. so we want to store this newItems somewhere so we can eventually use it in the packing list component,
        //so will this data change as some point? yes,this new data will it rerender the component? yes so therefore we need a new piece of state
        //  handleAddNewItems(newItems) 8. lets call the handleadditems function and pass in our newitem as arguement
        //17. call the onadditems function when form is submitted  instead of handleAddNewItems 
        onAddItems(newItems)
    }
    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do you need for your 😍 trip</h3>
        <select value={quantity} onChange={(e) =>setQuantity(e.target.value)}>
            {Array.from({length:20},(_,i)=> i+1).map((num)=>(
                <option value={num} key={num}>{num}</option>
            ))}
        </select>
        <input type="text" value={description } onChange={(e) => setDescription(e.target.value)} placeholder="item.."/>
        <button>add</button>
    </form>
}
const PackingList =({items })=>{ //13. accept the props we passed  here 
    return<div className="list">
        {/* <ul> 
            {initialItems.map( ( item)=>{
               return <Item  item ={item} /> //create a component and pass item as prop
            //    return <li>{item.description}</li>
            })}         
        </ul> */}
        {/* 14. then render the actual items instead of initialItems */}
        <ul> 
            {items.map( ( item)=>{
               return <Item  item ={item} /> //create a component and pass item as prop
            //    return <li>{item.description}</li>
            })}
           
        </ul>
    </div>
}
const Item =({item})=>{
    return (
        <li key={item.id} >
             <span style={item.packed? {textDecoration:'line-through' } : {}}>{item.description} {item.quantity}</span>
             <button>x</button>
             </li>
    )  
}
const Stats = ()=>{
    return <footer>
        <em>You have x items on your list and you already packed (x%)</em>
    </footer>
}