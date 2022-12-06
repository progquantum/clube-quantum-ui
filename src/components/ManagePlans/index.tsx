import { RiStackLine } from 'react-icons/ri';

import Link from 'next/link';

import { Button } from 'components/Button';

import { ManagePlansProps } from './types';
import * as S from './styles';

export function ManagePlans({ width }: ManagePlansProps) {
  return (
    <S.Container width={width}>
      <S.Content>
        <RiStackLine />
        <S.TitleContent>Seu plano</S.TitleContent>
      </S.Content>
      <S.Title>Você não está inserido em nenhum plano.</S.Title>
      <S.Text>
        Para tirar o máximo de proveito dos benefícios do clube quantum, você
        precisa aderir a um plano.
      </S.Text>
      <Link href="/subscriptions">
        <Button>Gerenciar planos</Button>
      </Link>
    </S.Container>
  );
}
