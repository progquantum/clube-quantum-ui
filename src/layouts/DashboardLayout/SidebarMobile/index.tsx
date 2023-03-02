import { FiLogOut } from 'react-icons/fi';
import {
  BsCreditCard2BackFill,
  BsFillPersonFill,
  BsPeopleFill,
} from 'react-icons/bs';

import { FaDollarSign, FaShoppingBag } from 'react-icons/fa';

import { AiFillFile, AiFillCloseCircle } from 'react-icons/ai';

import * as S from './styles';

export function SideBarMobile({ closeMenu }: { closeMenu: () => void }) {
  return (
    <S.SideBarMobileContainer>
      <S.CloseButton onClick={closeMenu}>
        <AiFillCloseCircle size={40} />
      </S.CloseButton>
      <S.ItemMenu>
        <BsFillPersonFill size={30} />
        <span>Minha Conta</span>
      </S.ItemMenu>
      <S.ItemMenu>
        <FaDollarSign size={30} />
        <span>Extratos</span>
      </S.ItemMenu>
      <S.ItemMenu>
        <BsPeopleFill size={30} />
        <span>Meus Amigos</span>
      </S.ItemMenu>
      <S.ItemMenu>
        <BsCreditCard2BackFill size={30} />
        <span>Dados de Pagamento</span>
      </S.ItemMenu>
      <S.ItemMenu>
        <AiFillFile size={30} />
        <span>Meus Contratos</span>
      </S.ItemMenu>
      <S.ItemMenu>
        <FaShoppingBag size={30} />
        <span>Minhas vendas</span>
      </S.ItemMenu>
      <S.LogOutButton>
        <span>Sair</span>
        <FiLogOut size={30} />
      </S.LogOutButton>
    </S.SideBarMobileContainer>
  );
}
