import { useInformationUser } from 'hooks/useFindMeProfile'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'
import { ServicesBank } from 'components/ServicesBank'

import * as S from './styles'
import { UploadAvatar } from './UploadAvatar'
import { PersonalInformation } from './PersonalInformation'
import { Address } from './Address'
import { ChangePassword } from './ChangePassword'

export function UpdateRegisterPage () {
  const { data, isLoading } = useInformationUser({
    refetchOnWindowFocus: false
  })

  return (
    <>
      <Header />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <ServicesBank />
          <S.MenuGrid />
          <S.ColumnGrid>
            <S.FLex>
              <UploadAvatar />
              <Address
                user={data}
                loading={isLoading}
              />
            </S.FLex>
            <S.FLex>
              <PersonalInformation
                user={data}
              />
              <ChangePassword />
            </S.FLex>
          </S.ColumnGrid>
        </S.RightWrapper>
      </S.Container>
    </>
  )
}
