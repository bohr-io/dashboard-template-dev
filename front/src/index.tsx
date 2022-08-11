import { FormEvent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashLayout from './components/DashLayout'
import Home from './views/Home'
import Login from './views/Login'
import User from './views/User'
import UserDetail from './views/UserDetail'
import UserNew from './views/UserNew'

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dash">
          <Route index element={<Login />} />
          <Route element={<DashLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="user">
              <Route index element={<User />} />
              <Route path="new" element={<UserNew />} />
              <Route path=":userId" element={<UserDetail />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
