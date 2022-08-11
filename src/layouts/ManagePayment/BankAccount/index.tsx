import Image from 'next/image'

import { useFindBilling } from 'hooks/useFindBilling'

import { Modal } from 'components/Modal'

import useModal from 'hooks/useModal'

import * as S from './styles'
import { ModalBankAccount } from './ModalBankAccount'

export function BankAccount () {
  const { data } = useFindBilling()

  const {
    modalOpen: modalOpenBank,
    open: openBank,
    close: closeBank
  } = useModal()

  const holderName = data?.bank_account.holder_name
  const currentAccount = data?.bank_account.current_account
  const lastDigits = data?.bank_account.current_account_check_number

  const hasBankAccount = data?.bank_account.holder_name

  return (
    <S.Content>
      {hasBankAccount
        ? (
          <>
            <S.YourAccount>
              <Image src='/images/umbanco.svg' width={10} height={15} />
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
              <Image src='/images/umbanco.svg' width={10} height={15} />
              <S.ContentTitle>Sua conta Banco Um</S.ContentTitle>
            </S.YourAccount>
            <S.TextContent>Nenhuma conta Banco Um registrada, gostaria de adicionar uma nova conta?</S.TextContent>
            <S.BankAccountButton onClick={openBank}>Cadastrar conta bancária</S.BankAccountButton>
          </>
          )}
      <Modal width={339} isActive={modalOpenBank} close={closeBank}>
        <ModalBankAccount close={closeBank} />
      </Modal>
    </S.Content>
  )
}
