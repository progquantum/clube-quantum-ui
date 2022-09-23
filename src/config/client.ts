import axios from 'axios'

import { setupAPIClient } from 'services/httpServices'

export const quantumClientQueue = setupAPIClient()

export const quantumClientBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST
})
