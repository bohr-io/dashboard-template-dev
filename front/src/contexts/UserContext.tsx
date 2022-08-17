import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import userResource from '../services/api/userResource';
import { User } from '../types';

type UserContextValue = {
  users: User[]
  fetchUsers: () => void
}

export const UserContext = createContext({} as UserContextValue)

export const UserProvider = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const userData = await userResource.get()
    if (userData) setUsers(userData)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <UserContext.Provider value={{
      users,
      fetchUsers,
    }}>
      <Outlet />
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext)
export default useUser
