import PersonalInfo from './personal-info/PersonalInfo'
import ContentHolder from './contentHolder/ContentHolder'
import RoutingBar from './rountingBar/RoutingBar'
import Footer from './footer/Footer'
import './App.css'
import {Container, Grid } from '@mui/material'

function App() {

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={12} md={3}>
          <PersonalInfo />
        </Grid>
        <Grid item xs>
          <RoutingBar />
          <ContentHolder />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
