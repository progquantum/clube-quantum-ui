import Link from 'next/link';
import { AiFillFile } from 'react-icons/ai';
import { BsFillPersonFill, BsPeopleFill } from 'react-icons/bs';
import { FaUpload } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';

import {
  DASHBOARD_ADM_PAGE,
  PARTNER_REGISTRATION_PAGE,
  MANAGE_BANNER_PAGE,
  CANCELLATION_REQUEST_PAGE,
  SMART_QUANTUM_REQUESTS_PAGE,
  WAITING_QUEUE_REPORT_PAGE,
  AFFILIATE_PAYMENTS_PAGE,
} from 'constants/routesPath';

import { AccordionLinkReports } from 'components/AccordionLinkReports';

import { SidebarAdminProps } from './types';
import * as S from '../styles';
import { AccordionLinkFinance } from '../../AccordionLinkFinance';

export function SidebarAdmin({ isExpanded }: SidebarAdminProps) {
  return (
    <>
      <Link href={DASHBOARD_ADM_PAGE}>
        <S.NavButton isExpanded={isExpanded}>
          <S.IconBox isExpanded={isExpanded}>
            <BsFillPersonFill />
          </S.IconBox>
          <S.TitleBox>Minha Conta</S.TitleBox>
        </S.NavButton>
      </Link>
      <Link href={PARTNER_REGISTRATION_PAGE}>
        <S.NavButton isExpanded={isExpanded}>
          <S.IconBox isExpanded={isExpanded}>
            <BsPeopleFill />
          </S.IconBox>
          <S.TitleBox>Parceiros Quantum</S.TitleBox>
        </S.NavButton>
      </Link>
      <Link href={DASHBOARD_ADM_PAGE}>
        <S.NavButton isExpanded={isExpanded}>
          <S.IconBox isExpanded={isExpanded}>
            <MdPeopleAlt />
          </S.IconBox>
          <S.TitleBox>Usuários Quantum</S.TitleBox>
        </S.NavButton>
      </Link>
      <Link href={MANAGE_BANNER_PAGE}>
        <S.NavButton isExpanded={isExpanded}>
          <S.IconBox isExpanded={isExpanded}>
            <FaUpload />
          </S.IconBox>
          <S.TitleBox>Gerenciar Banner</S.TitleBox>
        </S.NavButton>
      </Link>
      <Link href={CANCELLATION_REQUEST_PAGE}>
        <S.NavButton isExpanded={isExpanded}>
          <S.IconBox isExpanded={isExpanded}>
            <AiFillFile />
          </S.IconBox>
          <S.TitleBox>Solicitações de Cancelamento</S.TitleBox>
        </S.NavButton>
      </Link>
      <Link href={SMART_QUANTUM_REQUESTS_PAGE}>
        <S.NavButton isExpanded={isExpanded}>
          <S.IconBox isExpanded={isExpanded}>
            <AiFillFile />
          </S.IconBox>
          <S.TitleBox>Solicitações Smart</S.TitleBox>
        </S.NavButton>
      </Link>
      <AccordionLinkReports isExpanded={isExpanded} title="Relatórios">
        <Link href={WAITING_QUEUE_REPORT_PAGE}>
          <S.NavButton isExpanded={isExpanded}>
            <S.SublinkTitleBox>
              Lista de Espera Cartão de Crédito
            </S.SublinkTitleBox>
          </S.NavButton>
        </Link>
      </AccordionLinkReports>
      <AccordionLinkFinance isExpanded={isExpanded} title="Financeiro">
        <Link href={AFFILIATE_PAYMENTS_PAGE}>
          <S.NavButton isExpanded={isExpanded}>
            <S.TitleBox>Pagamentos Afiliados</S.TitleBox>
          </S.NavButton>
        </Link>
      </AccordionLinkFinance>
    </>
  );
}
