import { Outlet } from 'react-router-dom'
import {Container, Grid } from '@mui/material'
import PersonalInfo from './personal-info/PersonalInfo'
import RoutingBar from './rountingBar/RoutingBar'

function App() {

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={12} md={3}>
          <PersonalInfo />
        </Grid>
        <Grid item xs>
          <RoutingBar />
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
