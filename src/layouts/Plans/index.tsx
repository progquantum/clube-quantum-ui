import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Plans } from 'components/Plans'
import { SideBar } from 'components/SideBar'
import { useFindMe } from 'hooks/useFindMe'

import { ManagePlans } from 'components/ManagePlans'

import { Modal } from 'components/Modal'

import { useModal } from 'hooks/useModal'

import { Successful } from 'components/Successful'

import * as S from './styles'
import { SelectPlan } from './SelectPlan'
import { ModalCVC } from './ModalCVC'

export function PlansPage () {
  const { data } = useFindMe()
  const {
    modalOpen: modalOpenCVC,
    open: openCVC,
    close: closeCVC
  } = useModal()

  const {
    modalOpen: successful,
    open: onOpenSucessful,
    close: onCloseSucessful
  } = useModal()
  return (
    <>
      <Header />
      <S.Main>
        {!successful
          ? (
            <>
              <SideBar />
              <Plans titleButton='Continuar' onUpdateFormStep={openCVC}>
                {data?.subscription ? (<SelectPlan data={data} />) : (<ManagePlans width='370' />)}
              </Plans>
              <Modal width={433} isActive={modalOpenCVC} onClose={closeCVC}>
                <ModalCVC onOpenSucessful={onOpenSucessful} onCloseCVC={closeCVC} />
              </Modal>
            </>
            )
          : (<Successful
              paragraph='Seu plano foi alterado com sucesso! Aproveite as ofertas e Cashback no Clube Quantum!'
              textTitle='Agradecemos!'
             />)}

      </S.Main>
      <Footer />

    </>
  )
}
