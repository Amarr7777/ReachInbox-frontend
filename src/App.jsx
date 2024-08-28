import React, { useEffect, useState } from 'react'
import Routes from './routes/routes'

function App() {
  const [isDarkMode,setIsDarkMode]=useState(true);
  useEffect(()=>{
    document.body.classList.toggle('dark', isDarkMode);
  },[isDarkMode])

  const handleTheme = ()=>{
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div>
      <Routes handleTheme={handleTheme}/>
    </div>
  )
}

export default App