import { User } from '../../types'
import apiClient from './apiClient'

interface UserBody extends Omit<User, 'id'> {
  id: string | null
}

class UserResource {
  async get() {
    const { items } = await apiClient.get('/user')
    return items
  }

  async post(userBody: UserBody) {
    const { success } = await apiClient.post('/user', userBody)
    return success
  }

  async delete(userId: string) {
    const { success } = await apiClient.delete('/user', {
      id: userId
    })
    return success
  }
}

export default new UserResource()
