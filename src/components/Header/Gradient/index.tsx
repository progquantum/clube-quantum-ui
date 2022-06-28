import { AnimatedContainer } from './styles'
import { GRADIENT_ANIMATION } from './animations'

export function Gradient () {
  return (
    <AnimatedContainer
      variants={GRADIENT_ANIMATION}
      initial='unMounted'
      animate='mounted'
    />
  )
}
