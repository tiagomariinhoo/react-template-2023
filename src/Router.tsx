import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DeafaultLayout'
import Home from './pages/Home'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router