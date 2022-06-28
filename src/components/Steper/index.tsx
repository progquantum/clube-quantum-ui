import 'rsuite/dist/rsuite.css'
import { Steps } from 'rsuite'

import { Container } from './styles'
import { SteperProps } from './types'

export function Steper ({ stepsNumber, currentStep }: SteperProps) {
  return (
    <Container>
      <Steps current={currentStep}>
        {Array.from({ length: stepsNumber }, (_, index) => (
          <Steps.Item key={index} />
        ))}
      </Steps>
    </Container>
  )
}
