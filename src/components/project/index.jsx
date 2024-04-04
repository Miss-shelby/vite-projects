import { useState } from "react";

const Messages =[
    'Learn React',
    'Apply for Jobs',
    'Invest your new income',
    'Marry a Tech bro',
    'Attend postmalone concert'
]
//we want to use this step to serve as index to this mesage array and display it to the message p tag,we use -1 so that the index can start from 0
const step =1;
const Project = ()=>{
    //conditional rendering
    const [isOpen,setIsOpen]=useState(true)
    //define our step variable
    const [step,setStep] = useState(1)
    const handlePrevious = ()=>{
        //update our state 
        if ( step > 1){
            // setStep(step-1)
            //update our state witha call back
            setStep((curStep)=>curStep -1)
        }
    }
    const handleNext =()=>{
    //    update our state
     //update our state with a call back
        if (step  < Messages.length){
            // setStep(step +1)
            setStep((curStep)=> curStep +1)
        } 

    }
    return(
        <div>
             <button className="close" onClick={()=>{setIsOpen((prev)=>!prev)}}>&times;</button>
            { isOpen && 
            <div className="steps">
                <div className="numbers">
                    <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                    <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                    <div className={`${step >=3 ? "active" : ""}`}>3</div>
                    <div className={`${step >=4 ? "active" : ""}`}>4</div>
                    <div className={`${step >=5 ? "active" : ""}`}>5</div>
                </div>
                <p className="message">Step{step}:{Messages[step-1]}</p>
                <div className="buttons">
                    <button onClick={ handlePrevious} className="btn">previous</button>
                    <button onClick={handleNext} className="btn">next</button>
                </div>
            </div>
        }
        </div>
    )
}
export default Project