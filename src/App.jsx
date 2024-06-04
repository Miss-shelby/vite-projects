import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ReducerComponent from './components/hooks'
import ShowCount from './components/state'
import { ShowCount2 } from './components/state'
import AnotherContext from './context/childrenContext'
import MyDate from './components/date-project'
import { TravelApp } from './components/Travel-list-project'
import FlashCards from './components/flashcards'
import Header from "./components/Day4"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Body from './components/Body'
import ProjectV2 from './components/project/Stepsv2'
function App() {
  // const [count,setCount]=useState(10)
  return (
    <>
    {/* <NavBar/> */}
    {/* <Body/> */}
      {/* <Project /> */}
      {/* <MyDate/> */}
      {/* <ReducerComponent />
      <ShowCount count ={count}/>
      <ShowCount2 count={count} />
      <button onClick={()=>setCount((prev) => prev +1)}>plus count</button>
      <AnotherContext/> */}
      {/* <Header/> */}
      {/* <TravelApp/> */}
      {/* <FlashCards/>  */}
      {/* <Footer/> */}
   <ProjectV2/>
    </>
   
    
  )
}

export default App
