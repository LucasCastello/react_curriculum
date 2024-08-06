import { Outlet } from 'react-router-dom'
import {Container, Grid } from '@mui/material'
import PersonalInfo from './personal-info/PersonalInfo'
import NavBar from './navBar/NavBar'
import Banner from './banner/Banner'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <div className='app'>
        <Banner />
      </div>
    </>
  )
}

export default App
