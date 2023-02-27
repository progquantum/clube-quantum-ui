import { BiSearchAlt } from 'react-icons/bi';

import { useTheme } from 'styled-components';

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

  const handleRequestModalContract = () => {
    setShowModalContract(prevState => !prevState);
  };

  const handleRequestModalCancel = () => {
    setShowModalCancel(prevState => !prevState);
  };

  return (
    <DashboardLayout withServiceBank={false}>
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
    </DashboardLayout>
  );
}
