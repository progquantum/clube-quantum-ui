import { AxiosError } from 'axios'

export type ErrorHandler = {
 error: string,
 message: string,
 statusCode: number
}

export type ErrorResponse = AxiosError<ErrorHandler>
