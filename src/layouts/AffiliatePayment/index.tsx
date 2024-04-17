import { IoIosArrowForward } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { FiDownload } from 'react-icons/fi';

import { useState } from 'react';

import * as S from './styles';

import { Modal } from '../../components/Modal';
import { ModalContent } from './ModalContent';

const data = [
  {
    file_name: 'arquivo1.txt',
    file_string_date: '15/04/2024',
    fake_url_download: 'http://exemplo.com/download/arquivo1.txt',
  },
  {
    file_name: 'arquivo2.txt',
    file_string_date: '15/04/2024',
    fake_url_download: 'http://exemplo.com/download/arquivo2.txt',
  },
  {
    file_name: 'arquivo3.txt',
    file_string_date: '15/04/2024',
    fake_url_download: 'http://exemplo.com/download/arquivo3.txt',
  },
  {
    file_name: 'arquivo4.txt',
    file_string_date: '15/04/2024',
    fake_url_download: 'http://exemplo.com/download/arquivo4.txt',
  },
  {
    file_name: 'arquivo5.txt',
    file_string_date: '15/04/2024',
    fake_url_download: 'http://exemplo.com/download/arquivo5.txt',
  },
];

export function AffliatePaymentLayout() {
  const { gradients, colors } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
          {data.map(item => (
            <S.TableRow>
              <S.TableColumn title={item.file_name}>
                {item.file_name}
              </S.TableColumn>
              <S.TableColumnDate>{item.file_string_date}</S.TableColumnDate>
              <S.TableColumnAction
                onClick={() => console.log(item.fake_url_download)}
              >
                Baixar <FiDownload color={colors.royalblue} />
              </S.TableColumnAction>
            </S.TableRow>
          ))}
        </S.Table>
      </S.TableContainer>
      <S.UploadButtonContainer>
        <S.UploadButton
          variant="secondary_outline"
          color={gradients.midnightBlueToMediumsLateBlue}
        >
          Carregar Arquivo
        </S.UploadButton>
      </S.UploadButtonContainer>
    </S.Container>
  );
}
