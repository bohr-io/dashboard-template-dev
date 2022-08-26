import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashLayout from './components/DashLayout'
import { UserProvider } from './contexts/UserContext'
import theme from './theme'
import Home from './views/Home'
import Login from './views/Login'
import Users from './views/Users'
import UserDetail from './views/UserDetail'
import Types from './views/Types'
import Records from './views/Records'

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="dash">
            <Route index element={<Login />} />
            <Route element={<DashLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="users" element={<UserProvider />}>
                <Route index element={<Users />} />
                <Route path="new" element={<UserDetail />} />
                <Route path=":userId" element={<UserDetail />} />
              </Route>
              <Route path="types">
                <Route index element={<Types />} />
              </Route>
              <Route path="records">
                <Route index element={<Records />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
