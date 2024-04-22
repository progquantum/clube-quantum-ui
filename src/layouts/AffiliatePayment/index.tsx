import { IoIosArrowForward } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { FiDownload } from 'react-icons/fi';
import { useState, useRef } from 'react';

import { useQueryClient } from 'react-query';

import toast from 'react-hot-toast';

import { Modal } from '../../components/Modal';
import { ModalContent } from './ModalContent';
import { useUploadFileCsv } from '../../hooks/affiliate-payments/upload-file-csv';

import { useListPayments } from '../../hooks/affiliate-payments/list-payments';

import * as S from './styles';

export function AffliatePaymentLayout() {
  const queryClient = useQueryClient();
  const { gradients, colors } = useTheme();
  const { mutateAsync } = useUploadFileCsv();
  const [modalOpen, setModalOpen] = useState(false);
  const fileInputRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFileUpload = async () => {
    if (fileInputRef.current.files.length > 0) {
      try {
        const file = fileInputRef.current.files[0];
        await mutateAsync(file);
        toast.success('Arquivo carregado com sucesso');
        queryClient.invalidateQueries('QUERY_KEY_UPLOAD_FILE_CSV');
      } catch (error) {
        toast.error('Erro ao carregar o arquivo');
      }
    }
  };

  const handleButtonClickUpload = () => {
    fileInputRef.current.click();
  };

  const {
    data: paymentsData,
    loading,
    isError,
  } = useListPayments({ page: 1, itemsPerPage: 8 });

  let content;
  if (loading) {
    content = (
      <S.TableRow>
        <S.TableColumn>Loading...</S.TableColumn>
      </S.TableRow>
    );
  } else if (isError) {
    content = (
      <S.TableRow>
        <S.TableColumn>Erro ao carregar os dados</S.TableColumn>
      </S.TableRow>
    );
  } else {
    content = paymentsData.balancesFiles.map(payment => (
      <S.TableRow key={payment.id}>
        <S.TableColumn title={payment.key}>
          {payment.key.substring(payment.key.indexOf('lote'))}
        </S.TableColumn>

        <S.TableColumnDate>
          {new Date(payment.createAt).toLocaleDateString()}
        </S.TableColumnDate>
        <S.TableColumnAction onClick={() => window.open(payment.url, '_blank')}>
          Baixar <FiDownload color={colors.royalblue} />
        </S.TableColumnAction>
      </S.TableRow>
    ));
  }

  return (
    <S.Container>
      <S.Title>Pagamentos Afiliados</S.Title>
      <S.Button onClick={openModal}>
        Recarga em lote
        <S.Span>
          <IoIosArrowForward size={20} />
        </S.Span>
      </S.Button>
      {modalOpen && (
        <Modal onClose={closeModal} noDragBehavior={false} maxWidth={800}>
          <ModalContent onClose={closeModal} />
        </Modal>
      )}

      <S.TableContainer>
        <S.Table>
          <S.TableHeaderContainer>
            <S.TableRow>
              <S.TableHeaderItem width="50%">
                Arquivos carregados
              </S.TableHeaderItem>
              <S.TableHeaderItem>Data</S.TableHeaderItem>
              <S.TableHeaderItem>Ação</S.TableHeaderItem>
            </S.TableRow>
          </S.TableHeaderContainer>
          {content}
        </S.Table>
      </S.TableContainer>
      <S.UploadButtonContainer>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <S.UploadButton
          variant="secondary_outline"
          color={gradients.midnightBlueToMediumsLateBlue}
          onClick={handleButtonClickUpload}
        >
          Carregar Arquivo
        </S.UploadButton>
      </S.UploadButtonContainer>
    </S.Container>
  );
}
