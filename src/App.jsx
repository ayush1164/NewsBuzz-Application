import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

function App() {

  const [category, setCategory] = useState("general");

  return (
    <>
      
      <NavBar setCategory = { setCategory }/>

      <br />

      <NewsBoard category = { category }/>

    </>
  )
}

export default App
