import { Dispatch, SetStateAction } from 'react'

export type Plans = {
    plan_id?: string
    plan_duration?: number
    price?: string
    plan_name?: string
}

export type PlansStateContextData = {
  plan: Plans
}

export type PlansDispatchContextData = {
  setPlan: Dispatch<SetStateAction<Plans>>
}
