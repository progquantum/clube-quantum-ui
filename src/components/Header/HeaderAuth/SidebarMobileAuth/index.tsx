import {
  BsCreditCard2BackFill,
  BsFillPersonFill,
  BsPeopleFill,
} from 'react-icons/bs';
import decode from 'jwt-decode';
import { FaDollarSign, FaShoppingBag, FaUpload } from 'react-icons/fa';
import { AiFillFile } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';
import { parseCookies } from 'nookies';

import {
  DASHBOARD_PAGE,
  DASHBOARD_POS_PAGE,
  MANAGE_PAYMENT_PAGE,
  MY_CONTRACTS_PAGE,
  MY_FRIENDS_PAGE,
  MY_STATEMENTS_PAGE,
  CANCELLATION_REQUEST_PAGE,
  DASHBOARD_ADM_PAGE,
  MANAGE_BANNER_PAGE,
  PARTNER_REGISTRATION_PAGE,
  SMART_QUANTUM_REQUESTS_PAGE,
  WAITING_QUEUE_PAGE,
} from 'constants/routesPath';
import { TOKEN_STORAGE_KEY } from 'constants/storage';
import { TokenPayload } from 'shared/types/apiSchema';
import { roles } from 'constants/roles';
import { SideBarMobile } from 'components/Header/SidebarMobile';

const normalUserLinks = [
  {
    title: 'Minha Conta',
    icon: <BsFillPersonFill size={20} />,
    href: DASHBOARD_PAGE,
  },
  {
    title: 'Extratos',
    icon: <FaDollarSign size={20} />,
    href: MY_STATEMENTS_PAGE,
  },
  {
    title: 'Meus Amigos',
    icon: <MdPeopleAlt size={20} />,
    href: MY_FRIENDS_PAGE,
  },
  {
    title: 'Dados de pagamento',
    icon: <BsCreditCard2BackFill size={20} />,
    href: MANAGE_PAYMENT_PAGE,
  },
  {
    title: 'Meus contratos',
    icon: <AiFillFile size={20} />,
    href: MY_CONTRACTS_PAGE,
  },
  {
    title: 'Minhas vendas',
    icon: <FaShoppingBag size={20} />,
    href: DASHBOARD_POS_PAGE,
  },
];

const adminUserLinks = [
  {
    title: 'Minha Conta',
    icon: <BsFillPersonFill size={20} />,
    href: DASHBOARD_ADM_PAGE,
  },
  {
    title: 'Parceiros Quantum',
    icon: <BsPeopleFill size={20} />,
    href: PARTNER_REGISTRATION_PAGE,
  },
  {
    title: 'Usuários Quantum',
    icon: <MdPeopleAlt size={20} />,
    href: DASHBOARD_ADM_PAGE,
  },
  {
    title: 'Gerenciar Banner',
    icon: <FaUpload size={20} />,
    href: MANAGE_BANNER_PAGE,
  },
  {
    title: 'Solicitações de Cancelamento',
    icon: <AiFillFile size={20} />,
    href: CANCELLATION_REQUEST_PAGE,
  },
  {
    title: 'Solicitações Smart',
    icon: <AiFillFile size={20} />,
    href: SMART_QUANTUM_REQUESTS_PAGE,
  },
  {
    title: 'Relatórios',
    icon: <AiFillFile size={20} />,
    href: WAITING_QUEUE_PAGE,
  },
];

export function SideBarMobileAuth() {
  const cookies = parseCookies();

  const token = cookies[TOKEN_STORAGE_KEY];

  const { user_role } = decode<TokenPayload>(token);

  const links = user_role === roles.admin.id ? adminUserLinks : normalUserLinks;

  return <SideBarMobile isAuthed links={links} />;
}
