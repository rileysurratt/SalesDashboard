import { useEffect } from 'react'
import './App.css'
import Grid from '@mui/material/Grid';
import SideBar from './components/layout/SideBar'
import Dashboard from './components/layout/Dashboard'
import SalesObtained from './components/Sales';

function App() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('./MockData.js');
  //     const result = await response.json();
  //     console.log(result)
  //   }
  //   fetchData();
  // }, [])

  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SideBar />
      </Grid>
      <Grid item xs={12}>
        <Dashboard />
      </Grid>
      <Grid item xs={4}>
        <SalesObtained />
      </Grid>
      <Grid item xs={4}>
        {/* Clients */}
      </Grid>
      <Grid item xs={4}>
        {/* Traffic */}
      </Grid>
      <Grid item xs={12}>
        {/* Revenue */}
      </Grid>
      <Grid item xs={12}>
        {/* Transactions */}
      </Grid>
    </Grid>
    </>
  )
}

export default App
