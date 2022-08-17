import { useTheme } from 'styled-components'

import { useModal } from 'hooks/useModal'
import { Modal } from 'components/Modal'
import { BancoUm } from 'components/Illustrations/BancoUm'

import { BankAccountProps } from './types'
import { ModalBankAccount } from './ModalBankAccount'
import * as S from './styles'
import { Skeleton } from './Skeleton'

export function BankAccount ({ user, loading }: BankAccountProps) {
  const { colors } = useTheme()

  const {
    modalOpen: modalOpenBank,
    open: openBank,
    close: closeBank
  } = useModal()

  const holderName = user?.bank_account.holder_name
  const currentAccount = user?.bank_account.current_account
  const lastDigits = user?.bank_account.current_account_check_number
  const hasBankAccount = user?.bank_account.holder_name

  if (loading) return <Skeleton />

  return (
    <S.Content>
      {hasBankAccount
        ? (
          <>
            <S.YourAccount>
              <BancoUm color={colors.gray[200]} width='22' height='16' />
              <S.ContentTitle>Sua conta Banco Um</S.ContentTitle>
            </S.YourAccount>

            <S.BankingData>
              <S.BankingAccount>
                <S.TitleContent>
                  Cód. Banco
                </S.TitleContent>

                <S.TextContent>
                  396 - Banco Um
                </S.TextContent>
              </S.BankingAccount>

              <S.BankingAccount>
                <S.TitleContent>Agência</S.TitleContent>
                <S.TextContent>0001</S.TextContent>
              </S.BankingAccount>

              <S.BankingAccount>
                <S.TitleContent>Conta</S.TitleContent>
                <S.TextContent>{currentAccount}-{lastDigits}</S.TextContent>
              </S.BankingAccount>

            </S.BankingData>

            <S.BankingOwner>
              <S.TitleContent>Titular</S.TitleContent>
              <S.TextContent>{holderName}</S.TextContent>
            </S.BankingOwner>
          </>
          )
        : (
          <>
            <S.YourAccount>
              <BancoUm color={colors.gray[200]} width='22' height='22' />
              <S.ContentTitle>Sua conta Banco Um</S.ContentTitle>
            </S.YourAccount>
            <S.TextContent>Nenhuma conta Banco Um registrada, gostaria de adicionar uma nova conta?</S.TextContent>
            <S.BankAccountButton onClick={openBank}>Cadastrar conta bancária</S.BankAccountButton>
          </>
          )}

      <Modal width={339} isActive={modalOpenBank} close={closeBank}>
        <ModalBankAccount onClose={closeBank} />
      </Modal>
    </S.Content>
  )
}
