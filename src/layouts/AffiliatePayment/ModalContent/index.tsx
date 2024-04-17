import { useState, useEffect } from 'react';

import { useAffiliatePayments } from '../../../hooks/affiliate-payments';
import { Button } from '../styles';
import * as S from './styles';

const downloadCSV = async (
  data: any,
  setLoading: (loading: boolean) => void,
  setQueryEnabled: (enabled: boolean) => void,
) => {
  const url = window.URL.createObjectURL(
    new Blob([data], { type: 'text/csv;charset=utf-8;' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = 'lote-de-pagamentos.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setLoading(false);
  setQueryEnabled(false);
};

export function ModalContent({ onClose }: { onClose: () => void }) {
  const [queryEnabled, setQueryEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { data } = useAffiliatePayments(queryEnabled);

  const handleGenerateFile = () => {
    setQueryEnabled(true);
    setLoading(true);
  };

  useEffect(() => {
    if (data) {
      downloadCSV(data, setLoading, setQueryEnabled);
    }
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loading && progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [loading, progress]);

  return (
    <>
      <S.Container>
        <S.Title>Recarga em Lote</S.Title>
        <S.Subtitle>
          {loading
            ? 'Aguarde um momento, seu arquivo será gerado...'
            : 'O arquivo será gerado em .CSV'}
        </S.Subtitle>
        {loading && <S.ProgressText>{`${progress}%...`}</S.ProgressText>}
      </S.Container>
      <S.Content>
        <Button
          variant="secondary_outline"
          onClick={handleGenerateFile}
          disabled={loading}
        >
          <S.TextValue>Gerar Arquivo</S.TextValue>
        </Button>
        <Button variant="danger_outline" onClick={onClose}>
          <S.TextValue>Cancelar</S.TextValue>
        </Button>
      </S.Content>
    </>
  );
}
