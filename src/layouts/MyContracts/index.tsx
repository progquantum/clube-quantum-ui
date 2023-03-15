import { BiSearchAlt } from 'react-icons/bi';
import { BsPersonBadge } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

import { DashboardLayout } from 'layouts/DashboardLayout';

import Accordion from './Accordion';
import { ModalContract } from './ModalContract';
import * as S from './styles';
import { ModalCancel } from './ModalCancel';

export function MyContracts() {
  const { colors } = useTheme();
  const [showModalContract, setShowModalContract] = useState(false);
  const [showModalCancel, setShowModalCancel] = useState(false);
  const hasContracts = false;

  const handleRequestModalContract = () => {
    setShowModalContract(prevState => !prevState);
  };

  const handleRequestModalCancel = () => {
    setShowModalCancel(prevState => !prevState);
  };

  return (
    <DashboardLayout withServiceBank={false}>
      {hasContracts ? (
        <S.MyContractsContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <S.ContainerInput>
              <S.InputSearch placeholder="Pesquisar por contrato" />
              <S.ContainerIcon>
                <BiSearchAlt size={25} color={colors.background} />
              </S.ContainerIcon>
            </S.ContainerInput>
          </div>
          <div>
            <Accordion onRequestModalContract={handleRequestModalContract} />
            {showModalContract && (
              <ModalContract
                onRequestClose={handleRequestModalContract}
                onRequestModalCancel={handleRequestModalCancel}
              />
            )}

            {showModalCancel && (
              <ModalCancel onRequestClose={handleRequestModalCancel} />
            )}
          </div>
        </S.MyContractsContainer>
      ) : (
        <S.FallbackComponent>
          <div>
            <BsPersonBadge size={24} />
            <span>Amigos</span>
          </div>
          <Image
            src="/images/my-contracts.svg"
            alt="Nenhum contrato registrado"
            width={180}
            height={240}
          />
          <p>Você ainda não possui contratos ativos no Quantum Clube.</p>
        </S.FallbackComponent>
      )}
    </DashboardLayout>
  );
}
