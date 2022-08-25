import { useFindMe } from 'hooks/useFindMe'
import { useModal } from 'hooks/useModal'

import { ManagePlans } from 'components/ManagePlans'
import { Error } from 'components/Error'
import { Modal } from 'components/Modal'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'
import { Successful } from 'components/Successful'
import { Plans } from 'components/Plans'

import { SelectPlan } from './SelectPlan'
import { ModalCVC } from './ModalCVC'
import * as S from './styles'

export function SubscriptionsPage () {
  const { data, isLoading } = useFindMe()
  const hasPlan = data?.subscription?.is_active

  const {
    modalOpen: modalOpenCVC,
    open: openCVC,
    close: closeCVC
  } = useModal()

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
      <title>Gerenciamento de plano - Clube Quantum</title>
      <Header />
      <S.Main>
        {!error
          ? (
            <>
              {!successful
                ? (
                  <>
                    <SideBar loading={isLoading} />
                    {hasPlan
                      ? (
                        <Plans titleButton='Continuar' onOpenModalCvcRequest={openCVC}>
                          <SelectPlan data={data} />
                          <Modal width={433} isActive={modalOpenCVC} onClose={closeCVC}>
                            <ModalCVC
                              onCloseCVC={closeCVC}
                              onSucessful={onSucessful}
                              onError={onError}
                            />
                          </Modal>
                        </Plans>
                        )

                      : (
                        <Plans titleButton='Continuar'>
                          <ManagePlans width='370' />
                        </Plans>
                        )}
                  </>
                  )
                : (<Successful
                    paragraph='Seu plano foi alterado com sucesso!
                    Aproveite as ofertas e Cashback no Clube Quantum!'
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
