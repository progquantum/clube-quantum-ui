import { ParsedUrlQuery } from 'querystring'

export type ResetPasswordRequestData = {
  code: ParsedUrlQuery
  password: string
}
