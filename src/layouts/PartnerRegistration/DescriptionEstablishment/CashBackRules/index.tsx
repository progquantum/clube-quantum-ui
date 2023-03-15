/* eslint-disable jsx-a11y/label-has-associated-control */
import { AiOutlineClose } from 'react-icons/ai';
import { useTheme } from 'styled-components';

import { Input } from 'components/Input';
import { usePartnerStore } from 'store/partner-registration';

import { formatNumber } from 'utils/formatters/formatNumber';

import { Props } from './types';
import * as S from './styles';

export function CashBackRules({ id, handleRemoveCashBackRules }: Props) {
  const { colors } = useTheme();
  const cashBackRules = usePartnerStore(state => state.cashBackRules);
  const setCashBackDays = usePartnerStore(state => state.setCashBackDays);
  const setRateCashBack = usePartnerStore(state => state.setRateCashBack);
  const setRateCliente = usePartnerStore(state => state.setRateCliente);
  const setRateAdm = usePartnerStore(state => state.setRateAdm);

  const index = cashBackRules.findIndex(item => item.id === id);

  const AlreadySelect = (day: string) => {
    const AlredySet =
      cashBackRules.some(item => item.selectDays.includes(day)) &&
      !cashBackRules[index]?.selectDays.some(item => item.includes(day));

    return AlredySet;
  };

  const valueRateCashBack = cashBackRules[index]?.rateCashBack;
  const valueRateCliente = cashBackRules[index]?.rateCliente;
  const valueRateAdm = cashBackRules[index]?.rateAdm;
  return (
    <S.ContainerCashBack>
      {Number(id) !== 0 && (
        <AiOutlineClose
          style={{
            position: 'absolute',
            right: '0',
            top: '-28',
            cursor: 'pointer',
          }}
          color={colors.danger}
          size={22}
          onClick={() => handleRemoveCashBackRules(id)}
        />
      )}
      <S.ButtonDays>
        <S.LineButton>
          <S.RowButton>
            <S.StyledButton
              disabled={AlreadySelect('Domingo')}
              onClick={() => setCashBackDays(id, 'Domingo')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  cashBackRules[index]?.selectDays?.includes('Domingo') &&
                  '#0C61FF',
                color:
                  cashBackRules[index]?.selectDays?.includes('Domingo') &&
                  'white',
              }}
              variant="degrade"
            >
              Domingo
            </S.StyledButton>
            <S.StyledButton
              disabled={AlreadySelect('Segunda')}
              onClick={() => setCashBackDays(id, 'Segunda')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  cashBackRules[index]?.selectDays?.includes('Segunda') &&
                  '#0C61FF',
                color:
                  cashBackRules[index]?.selectDays?.includes('Segunda') &&
                  'white',
              }}
              variant="degrade"
            >
              Segunda
            </S.StyledButton>
          </S.RowButton>
          <S.RowButton>
            {' '}
            <S.StyledButton
              disabled={AlreadySelect('Terça')}
              onClick={() => setCashBackDays(id, 'Terça')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  cashBackRules[index]?.selectDays?.includes('Terça') &&
                  '#0C61FF',
                color:
                  cashBackRules[index]?.selectDays?.includes('Terça') &&
                  'white',
              }}
              variant="degrade"
            >
              Terça
            </S.StyledButton>
            <S.StyledButton
              disabled={AlreadySelect('Quarta')}
              onClick={() => setCashBackDays(id, 'Quarta')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  cashBackRules[index]?.selectDays?.includes('Quarta') &&
                  '#0C61FF',
                color:
                  cashBackRules[index]?.selectDays?.includes('Quarta') &&
                  'white',
              }}
              variant="degrade"
            >
              Quarta
            </S.StyledButton>
          </S.RowButton>
        </S.LineButton>
        <S.LineButton>
          <S.RowButton>
            <S.StyledButton
              disabled={AlreadySelect('Quinta')}
              onClick={() => setCashBackDays(id, 'Quinta')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  cashBackRules[index]?.selectDays?.includes('Quinta') &&
                  '#0C61FF',
                color:
                  cashBackRules[index]?.selectDays?.includes('Quinta') &&
                  'white',
              }}
              variant="degrade"
            >
              Quinta
            </S.StyledButton>
            <S.StyledButton
              disabled={AlreadySelect('Sexta')}
              onClick={() => setCashBackDays(id, 'Sexta')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  cashBackRules[index]?.selectDays?.includes('Sexta') &&
                  '#0C61FF',
                color:
                  cashBackRules[index]?.selectDays?.includes('Sexta') &&
                  'white',
              }}
              variant="degrade"
            >
              Sexta
            </S.StyledButton>
          </S.RowButton>
          <S.RowButton>
            <S.StyledButton
              disabled={AlreadySelect('Sábado')}
              onClick={() => setCashBackDays(id, 'Sábado')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  cashBackRules[index]?.selectDays?.includes('Sábado') &&
                  '#0C61FF',
                color:
                  cashBackRules[index]?.selectDays?.includes('Sábado') &&
                  'white',
              }}
              variant="degrade"
            >
              Sábado
            </S.StyledButton>
          </S.RowButton>
        </S.LineButton>
      </S.ButtonDays>
      <S.RowCashBackInf>
        <S.LineCashBack>
          <Input
            type="text"
            name={`cashBack[${index}].rate_cash_back`}
            placeholder="5,00%"
            label="Taxa de cashback total"
            onChange={e =>
              setRateCashBack(id, formatNumber.addDot(e.target.value))
            }
            defaultValue={
              valueRateCashBack ? formatNumber.format(valueRateCashBack) : ''
            }
          />
          <Input
            type="text"
            name={`cashBack[${index}].rate_cash_back_client`}
            placeholder="4,00%"
            label="Cashback para o cliente"
            onChange={e =>
              setRateCliente(id, formatNumber.addDot(e.target.value))
            }
            defaultValue={
              valueRateCliente ? formatNumber.format(valueRateCliente) : ''
            }
          />
        </S.LineCashBack>
        <Input
          type="text"
          name={`cashBack[${index}].rate_adm_quantum`}
          placeholder="1,00%"
          label="Taxa de adm. Quantum"
          onChange={e => setRateAdm(id, formatNumber.addDot(e.target.value))}
          defaultValue={valueRateAdm ? formatNumber.format(valueRateAdm) : ''}
        />
      </S.RowCashBackInf>
    </S.ContainerCashBack>
  );
}
