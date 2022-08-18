import { CreditCardIconProps } from './types'

function CreditCardIcon ({ color, width, height }: CreditCardIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 22 17'
    >
      <path
        fill={color}
        d='M20 .13H2a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2v-12a2 2 0 00-2-2z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M22 7.13H0v-2h22v2z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default CreditCardIcon
