import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login'
import Register from './Register'
import Home from './Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App