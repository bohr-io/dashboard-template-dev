import apiClient from './apiClient'

type LoginBodyData = {
  username: string
  password: string
  recaptchaToken: string
}

class LoginResource {
  async login(loginBody: LoginBodyData) {
    const { success } = await apiClient.post('/login', loginBody)
    return success
  }
}

export default new LoginResource()
