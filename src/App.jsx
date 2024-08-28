import React, { useEffect, useState } from 'react'
import Router from './routes/Router';

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
      <Router handleTheme={handleTheme}/>
    </div>
  )
}

export default App