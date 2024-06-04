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
console.log(items);
    //to delete item first we need to state which item to delete therefore we pass in id,second we call the setitems,pass in the items array
    // and then filter out the id that is not equal to the current id

    const handleDelete=(id)=>{
        setItems((items)=> items.filter((item)=> item.id!== id))
    }

    //to toggle item we pass in the id to know the item we want to toggle,then map through it,we now check
    // if the current id matches the id,then we create a new object with  by destructuring item and giving the packed value of the opposite 
    //of its initial state,nb we always call our setitems callback before updating state


    const handleTogglePackedItem = (id)=>{
        setItems((items)=> items.map((item)=> item.id === id? {...item, packed: !item.packed}:item))
    }

    const handleClearList = ()=>{
        const confirmed = window.confirm('Do you want to delete all items?')
        if (confirmed) setItems([]);
        
    }

    return <div className="bg-orange-500">
        <Logo/>
         <Form  onAddItems = {handleAddNewItems}/>  {/*  15. to enable the form update the state, we pass in the handleadditems as props to the form */}
        <PackingList items={items}
         onDeleteItem={handleDelete}
         onToggleItem={handleTogglePackedItem}
         onDelete={ handleClearList}
         />   {/* 12. pass our items array in line 10  as a prop to the packing list*/}
        <Stats items={items}/>
    </div>
}
const Logo =()=>{
    return <h1 className="text-2xl bg-yellow-500 text-center font-bold py-4">🌴Far Away💼</h1>
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
        setDescription('')
        setQuantity(1)
    }
    return <form className="flex w-full pl-[4rem]" onSubmit={handleSubmit}>
        <h3 className="font-bold text-lg pl-[10rem]">what do you need for your 😍 trip?</h3>
        <select  className="bg-orange-100 rounded-[20px] px-2 ml-4" value={quantity} onChange={(e) =>setQuantity(e.target.value)}>
            {Array.from({length:20},(_,i)=> i+1).map((num)=>(
                <option value={num} key={num}>{num}</option>
            ))}
        </select>
        <input className="bg-orange-100 rounded-[20px] pl-4 mx-4" type="text" value={description } onChange={(e) => setDescription(e.target.value)} placeholder="item.."/>
        <button className="bg-emerald-300  px-3 rounded-[20px] border-0">add</button>
    </form>
}
const PackingList =({items,onDeleteItem,onToggleItem,onDelete })=>{ //13. accept the props we passed  here 
   const [sortBy,setSortBy] = useState('input')
   console.log(sortBy);
   //to sort out item we create an empty string
   let sortedItems;

   if(sortBy==='input')sortedItems=items;
   //this is the default so we just assign sorteditems to items array
   
   if (sortBy === 'description') sortedItems = items.slice().
   sort((a,b)=> a.description.localeCompare(b.description))

   //to sort by description we create a copy of the array by slicing,then sort using locale comapre for alphabetical order
   if (sortBy==='packed') sortedItems = items.slice()
    .sort((a,b)=> Number(a.packed)-Number(b.packed));
   
   return<div>
        {/* <ul> 
            {initialItems.map( ( item)=>{
               return <Item  item ={item} /> //create a component and pass item as prop
            //    return <li>{item.description}</li>
            })}         
        </ul> */}
        {/* 14. then render the actual items instead of initialItems by mapping */}
        <ul className="flex  bg-amber-900 h-[8rem] "> 
            {sortedItems.map( ( item)=>{
                //next we use the sorteditems array to map instaed of the initial items
               return <Item  item ={item} onDeleteItem={onDeleteItem} key={item.id} onToggleItem={onToggleItem} /> //create a component and pass item as prop
            //    return <li>{item.description}</li>
            })}
            <div className="actions pl-[4rem] w-full">
                <select className="text-[12px] p-[2px] font-bold border-0 outline-0 bg-gray-200 rounded-lg"
                   value={sortBy} onChange={(e)=>setSortBy (e.target.value) }>
                    <option value='input'>SORT BY INPUT ORDER</option>
                    <option value='description'>SORT BY DESCRIPTION</option>
                    <option value='packed'>SORT BY PACKED</option>
                </select>
                <button onClick={()=> onDelete()} className="font-bold bg-amber-200 rounded-lg px-2 text-[13px] ml-[10px]">clear list</button>
            </div>
           
        </ul>
    </div>
}
const Item =({item, onDeleteItem,onToggleItem } )=>{
    return (
        <li key={item.id} className="  pt-1 flex items-center mx-2 " >
            <input type="checkbox" value={item.packed} onChange={()=>onToggleItem(item.id)}/>
             <span className="text-gray-100" style={item.packed? {textDecoration:'line-through' } : {}}> {item.quantity}{item.description} </span>
             <button className="text-red-500 font-bold ml-3" onClick={()=>onDeleteItem(item.id)}>x</button>
             {/* we added a function so that react only calls the function when the event happens,
             we cant call the onDelete like this onDelete() without passing a function */}
        </li>
    )  
}
const Stats = ({items})=>{
    //lets display a different msg if there is no items on the list
    if (!items.length) return (
        <p  className="bg-emerald-300 py-3 text-amber-800 font-bold text-center"> <em>Start adding items to your packing list 🚀</em></p>
    );
    const numItems = items.length;
    const numItemsPacked = items.filter((item)=>item.packed).length;
    const percentage = Math.round((numItemsPacked/numItems)*100)
    return <footer className="bg-emerald-300 py-3 text-amber-800 font-bold pl-4">
        <em>
            {
                percentage ===100? 
                'You have got everything! Ready to go ✈️'
                :
            `You have ${numItems} items on your list and you already packed ${numItemsPacked} (${percentage}%)`
            }
             </em>
    </footer>
}