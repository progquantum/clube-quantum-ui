import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'
import { useFindMe } from 'hooks/useFindMe'

import { ManagePlans } from 'components/ManagePlans'
import { Error } from 'components/Error'
import { Modal } from 'components/Modal'

import { useModal } from 'hooks/useModal'
import { Successful } from 'components/Successful'
import { Plans } from 'components/Plans'

import { BANK_ACCOUNT_PAGE } from 'constants/routesPath'

import * as S from './styles'
import { SelectPlan } from './SelectPlan'
import { ModalCVC } from './ModalCVC'

export function SubscriptionsPage () {
  const { data, isLoading } = useFindMe()
  const {
    modalOpen: modalOpenCVC,
    open: openCVC,
    close: closeCVC
  } = useModal()

  const {
    modalOpen: successful,
    open: onOpenSucessful
  } = useModal()

  const {
    modalOpen: error,
    open: onOpenError
  } = useModal()
  return (
    <>
      <title>Gerenciamento de plano - Clube Quantum</title>
      <Header />
      <S.Main>
        {!error
          ? (
            <>
              {!successful
                ? (
                  <>
                    <SideBar />
                    <Plans titleButton='Continuar' onClick={openCVC} redirectTo={BANK_ACCOUNT_PAGE}>
                      {data?.subscription
                        ? (
                          <>
                            <SelectPlan data={data} />
                            <Modal width={433} isActive={modalOpenCVC} onClose={closeCVC}>
                              <ModalCVC
                                onOpenSucessful={onOpenSucessful}
                                onCloseCVC={closeCVC}
                                onOpenError={onOpenError}
                              />
                            </Modal>
                          </>)
                        : (<ManagePlans width='370' />)}
                    </Plans>

                  </>
                  )
                : (<Successful
                    paragraph='Seu plano foi alterado com sucesso! Aproveite as ofertas e Cashback no Clube Quantum!'
                    textTitle='Agradecemos!'
                   />)}
            </>
            )
          : (<Error />)}

      </S.Main>
      <Footer />

    </>
  )
}
