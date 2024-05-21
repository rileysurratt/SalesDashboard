import { useEffect } from 'react'
import './App.css'
import SideBar from './components/layout/SideBar'

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./MockData.json');
      const result = await response.json();
      console.log(result)
    }
    fetchData();
  }, [])

  return (
    <>
    <SideBar />
    </>
  )
}

export default App
