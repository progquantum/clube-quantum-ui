import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AnimatedContainer = styled(motion.aside)`
  width: 100%;
  height: 4rem;
  align-self: flex-start;
  position: absolute;
  top: 100%;
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
`
