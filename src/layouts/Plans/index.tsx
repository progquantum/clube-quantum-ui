import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Plans } from 'components/Plans'
import { SideBar } from 'components/SideBar'
import { useFindMe } from 'hooks/useFindMe'

import { ManagePlans } from 'components/ManagePlans'

import { Modal } from 'components/Modal'

import { useModal } from 'hooks/useModal'

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

  return (
    <>
      <Header />
      <S.Main>
        <SideBar />
        <Plans titleButton='Continuar' onUpdateFormStep={openCVC}>
          {data?.subscription ? (<SelectPlan data={data} />) : (<ManagePlans width='370' />)}
        </Plans>
        <Modal width={433} isActive={modalOpenCVC} close={closeCVC}>
          <ModalCVC close={closeCVC} />
        </Modal>
      </S.Main>
      <Footer />

    </>
  )
}
