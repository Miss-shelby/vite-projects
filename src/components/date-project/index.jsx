import { useState } from "react";

const MyDate = () => {
    const [count, setCount] = useState(0);
    const [range,setRange]=useState(0)
    const date = new Date('june 12 2021')
    date.setDate(date.getDate() + count)
    // using our range value to increAse/decrease the count
    const plusDate = () => {
        setCount((prev) => prev + range);
    };
    const minusDate = () => {
        setCount((prev) => prev - range);
        console.log(count,range);
    };
    //reser the count and range to 0
    const resetStep = ()=>{
       setRange(0)
       setCount(0)
    }
    return (
        <div>
            {/* we get the value of our range to use update the state  */}
            <input value={range} type='range' min='0' max='10'  onChange={(e) => setRange(Number(e.target.value))} />
            {/* the input displays our current count that is being increased by the range  and allows us to manually update the count with the ochnage handler  */}
            <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} /> 
            <button onClick={resetStep}>reset</button>
            <button onClick={minusDate}>&#8722;</button> 
            <button onClick={plusDate}>&#43;</button>
            <p>Today is {date.toDateString()}</p>
        </div>
    );
};
export default MyDate;
