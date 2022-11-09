import Link from 'next/link';
import Image from 'next/image';

import { DASHBOARD_PAGE } from 'constants/routesPath';

import * as S from './styles';
import { ErrorProps } from './types';

export function Error({ paragraph }: ErrorProps) {
  return (
    <S.Container>
      <S.LeftWrapper>
        <Image
          width={325.02}
          height={360}
          src="/images/error_signup.svg"
          alt=""
        />
      </S.LeftWrapper>
      <S.Content>
        <Image
          width={61}
          height={60}
          src="/images/icon_error.svg"
          alt="Icon Error"
        />
        <S.TextTitle fontWeight={900} margin="1.875rem 0 3rem">
          Oops, algo deu errado!
        </S.TextTitle>
        <S.Paragraph>
          {paragraph ||
            'Seu pagamento não foi confirmado, verifique se seus dados de pagamento estão certos, caso há a necessidade, contate seu banco.'}
        </S.Paragraph>

        <S.Button_ type="button">Revisar meus dados bancários</S.Button_>
        <S.Line />
        <Link href={DASHBOARD_PAGE}>
          <S.Button_ type="button" variant="secondary">
            Retornar à minha conta
          </S.Button_>
        </Link>
      </S.Content>
    </S.Container>
  );
}
