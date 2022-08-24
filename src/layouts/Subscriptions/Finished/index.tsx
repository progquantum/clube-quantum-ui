import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'
import { Error } from 'components/Error'
import { Successful } from 'components/Successful'
import { useModal } from 'hooks/useModal'

import { CardFinished } from './CardFinished'

import * as S from './styles'

export function FinishedPage () {
  const {
    modalOpen: successful,
    open: onSucessful
  } = useModal()

  const {
    modalOpen: error,
    open: onError
  } = useModal()

  return (
    <>
      <Header />
      <S.Main>
        {!error
          ? (
            <>
              {!successful
                ? (
                  <>
                    <SideBar />
                    <CardFinished onSucessful={onSucessful} onError={onError} />
                  </>
                  )
                : (<Successful
                    paragraph='Seu cadastro foi finalizado com sucesso! Aproveite as ofertas e Cashback no Clube Quantum!'
                    textTitle='Seja bem vindo!'
                   />)}
            </>
            )
          : (<Error />)}
      </S.Main>
      <Footer />
    </>
  )
}
