type RequestConfig = Omit<RequestInit, 'method' | 'body'>

class ApiClient {
  get authToken() {
    const cookies = document.cookie.split('; ')
    const authToken = cookies.find((cookie) => cookie.startsWith('TOKEN='))?.split('=')[1]

    return authToken
  }
  
  async get(path: string) {
  }

  async post(path: string, bodyData: object, config: RequestConfig = {}) {
    try {
      const response = await fetch('/api' + path, {
        method: 'POST',
        body: JSON.stringify(bodyData),
        ...config
      })
  
      return response.json()
    } catch (error) {
      console.error(error)
    }
  }
}

export default new ApiClient
