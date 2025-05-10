import { RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import { Routes } from './routes'

function App() {
  return (
    <RouterProvider router={Routes}/>
  )
}

export default App
