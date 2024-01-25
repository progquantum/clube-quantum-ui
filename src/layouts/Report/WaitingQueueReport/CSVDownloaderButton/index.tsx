import CsvDownloadButton from 'react-json-to-csv';
import { FiDownload } from 'react-icons/fi';

import { useTheme } from 'styled-components';

import { useGetCreditCardWaitingQueue } from 'hooks/useBancoUmCreditCard/useGetCreditCardWaitingQueue';

import { CSVDownloaderButtonProps } from './types';

export function CSVDownloaderButton({ totalItems }: CSVDownloaderButtonProps) {
  const theme = useTheme();
  const { data } = useGetCreditCardWaitingQueue({
    itemsPerPage: String(totalItems),
  });

  const StatusBancoUmCreditCard: Record<string, string> = {
    AWAITING: 'Em espera',
    APPROVED: 'Aprovado',
    RECEIVED: 'Recebido',
    DENIED: 'Negado',
    CANCELED: 'Cancelado',
  };

  const formattedData = data?.bancoUmCreditCard.map(item => ({
    Nome: item.name,
    'Data do pedido': new Intl.DateTimeFormat('pt-br').format(
      new Date(item.updated_at),
    ),
    Documento: item.doc,
    Status: StatusBancoUmCreditCard[item.status],
  }));

  const filename = `lista_de_espera_${new Intl.DateTimeFormat('pt-br').format(
    new Date(),
  )}`;

  return (
    <CsvDownloadButton
      filename={filename}
      data={formattedData}
      style={{
        display: 'flex',
        width: '100%',
        maxWidth: '189px',
        marginTop: '0.5rem',
        height: '41px',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.7rem',
        borderRadius: '8px',
        background: theme.gradients.midnightBlueToMediumsLateBlue,
        color: theme.colors.white,
      }}
    >
      <span>Download lista</span>
      <FiDownload size={17} style={{ marginLeft: '0.5rem' }} />
    </CsvDownloadButton>
  );
}
