import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://homolog-api.quantum.com.vc/'
})
