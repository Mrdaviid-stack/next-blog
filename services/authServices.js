import axios from "axios"

export async function signIn(credentials) {
  try {
    const response = await axios.post('/api/auth/signin', credentials)
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function isAuthenticated() {
  try {
    const response = await axios.get('/api/auth/authenticated')
    return response
  } catch (error) {
    console.log(error)
  }
}
