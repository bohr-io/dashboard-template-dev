type RequestConfig = Omit<RequestInit, 'method' | 'body'>

class ApiClient {
  async get(path: string, config: RequestConfig = {}) {
    try {
      const response = await fetch('/api' + path, {
        method: 'GET',
        ...config
      })

      return response.json()
    } catch (error) {
      console.error(error)
    }
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

  async delete(path: string, bodyData: object, config: RequestConfig = {}) {
    try {
      const response = await fetch('/api' + path, {
        method: 'DELETE',
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
