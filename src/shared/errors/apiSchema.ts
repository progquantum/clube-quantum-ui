import { AxiosError } from 'axios'

export type ErrorResponse = {
 error: string,
 message: string,
 statusCode: number
}

export type ErrorHandler = AxiosError<ErrorHandler>
