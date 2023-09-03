import './App.css'

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

// 4 - navegango entre Link
import NavBar from './componects/NavBar'

function App() {

  return (
    <>
    <div className='App'>
      <NavBar />
      <h1>React Router</h1>
      <Outlet />
      <h3>Footer</h3>
    </div>
    </>
  )
}

export default App
