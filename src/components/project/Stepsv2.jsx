import { useState } from "react";

const Messages =[
    'Learn React',
    'Apply for Jobs',
    'Invest your new income',
    'Marry a Tech bro',
    'Attend postmalone concert'
]
//we want to use this step to serve as index to this mesage array and display it to the message p tag,we use -1 so that the index can start from 0
// const step =1;
const ProjectV2 = ()=>{
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
            <div className="rounded-lg bg-gray-200 m-auto w-[500px] ">
                <div className="numbers flex  justify-between px-[7rem] pt-4 ">
                    <div className={`bg-gray-300 rounded-full py-1 px-2 text-sm font-bold ${step >= 1 ? "bg-blue-500" : " "}`}>1</div>
                    <div className={`bg-gray-300 rounded-full py-1 px-2 text-sm font-bold ${step >= 2 ? "bg-blue-500 " : ""}`}>2</div>
                    <div className={ `bg-gray-300 rounded-full py-1 px-2 text-sm font-bold ${step >=3 ? "bg-blue-500" : ""}`}>3</div>
                    <div className={`bg-gray-300 rounded-full py-1 px-2 text-sm font-bold ${step >=4 ? "bg-blue-500" : ""}`}>4</div>
                    <div className={`bg-gray-300 rounded-full py-1 px-2 text-sm font-bold ${step >=5 ? "bg-blue-500" : ""}`}>5</div>
                </div>
                <p className="message pt-[4rem] text-center font-bold text-xl">Step{step}:{Messages[step-1]}</p>
                <div className="flex  px-[5rem]  justify-between pt-[6rem] pb-4">
                    <Button textColor='white' bgColor='bg-blue-500' onClick={ handlePrevious}><span>👈</span>Previous</Button>
                    <Button textColor='white' bgColor='bg-blue-500' onClick={handleNext}>Next <span>👉</span></Button>
                </div>
            </div>
        }
        </div>
    )
}
export default ProjectV2

//creating button component
const Button = ({ textColor, bgColor, onClick,children }) => {
    return (
        <button
            className={`${bgColor} text-${textColor} py-2 px-4 rounded`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
