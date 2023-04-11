import { Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import GenerateId from './pages/GenerateId'
import Layout from './components/common/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Layout}>
        <Route path='' Component={Homepage}></Route>
        <Route path='generate-id' Component={GenerateId}></Route>
      </Route>
    </Routes>
  )
}

export default App
