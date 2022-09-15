import { UserProps } from './types'

export function User ({ width, height, color }: UserProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 19 21'
    >
      <path
        fill={color}
        d='M16.398 2.684h-4.153a2.968 2.968 0 00-5.606 0H2.487A1.993 1.993 0 00.5 4.67v13.91a1.993 1.993 0 001.987 1.988h13.91a1.993 1.993 0 001.988-1.988V4.671a1.993 1.993 0 00-1.987-1.987zm-6.953 0A.994.994 0 119.44 4.67a.994.994 0 01.005-1.987zm0 3.974a2.98 2.98 0 110 5.962 2.98 2.98 0 010-5.962zm5.962 11.923H3.481v-1.39c0-1.988 3.974-3.081 5.962-3.081 1.987 0 5.961 1.093 5.961 3.08l.003 1.391z'
      />
    </svg>
  )
}
