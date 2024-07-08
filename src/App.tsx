import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Container, Grid } from '@mui/material'
import PersonalInfo from './personal-info/PersonalInfo'
import ContentHolder from './contentHolder/ContentHolder'
import RoutingBar from './rountingBar/RoutingBar'
import Footer from './footer/Footer'
import './App.css'
import Portfolio from './portfolio/Portfolio'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ContentHolder />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  }
])

function App() {

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={12} md={3}>
          <PersonalInfo />
        </Grid>
        <Grid item xs>
          <RoutingBar />
          <RouterProvider router={router}/>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
