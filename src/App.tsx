import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Notification } from './components/Notification'

function App() {


  return (
    <>
     <Header/>
     <Notification/>
    </>
  )
}

export default App
