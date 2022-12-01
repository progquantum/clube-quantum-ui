import styled, { css } from 'styled-components';

import {
  HeaderAccessMarket,
  TitlePlan,
  TitleStatusPlan,
  StatusPlan,
} from 'layouts/Dashboard/MainContent/styles';

import { InviteFriendsPropsStyle } from './types';

export const DivInviteFriends = styled.div<InviteFriendsPropsStyle>`
  grid-area: DivInviteFriends;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1.5rem;
  width: 21.4688rem;
  height: 15.375rem;
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;

  ${({ variant }) =>
    variant === 'white' &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
    `};

  @media (max-width: 1024px) {
    width: 27.0625rem;
  }

  @media (max-width: 460px) {
    width: 20.625rem;
  }

  @media (max-width: 380px) {
    width: 19rem;
  }
`;

export const HeaderInviteFriends = styled(
  HeaderAccessMarket,
)<InviteFriendsPropsStyle>`
  > svg {
    font-size: 1.0625rem;
    color: ${({ theme }) => theme.colors.white};

    ${({ variant }) =>
      variant === 'white' &&
      css`
        color: ${({ theme }) => theme.colors.gray[200]};
      `};
  }
`;

export const TitleFriends = styled(TitlePlan)<InviteFriendsPropsStyle>`
  color: ${({ theme }) => theme.colors.white};

  ${({ variant }) =>
    variant === 'white' &&
    css`
      color: ${({ theme }) => theme.colors.gray[400]};
    `};
`;

export const TitleInviteFriends = styled(
  TitleStatusPlan,
)<InviteFriendsPropsStyle>`
  color: ${({ theme }) => theme.colors.white};

  ${({ variant }) =>
    variant === 'white' &&
    css`
      color: ${({ theme }) => theme.colors.gray[700]};
    `};
`;

export const TextInviteFriends = styled(StatusPlan)<InviteFriendsPropsStyle>`
  color: ${({ theme }) => theme.colors.white};

  ${({ variant }) =>
    variant === 'white' &&
    css`
      color: ${({ theme }) => theme.colors.gray[400]};
    `};
`;

export const ButtonInviteFriends = styled.button<InviteFriendsPropsStyle>`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.midnightBlue};
  width: 100%;
  padding: 1rem;
  border-radius: 10px;

  ${({ variant }) =>
    variant === 'white' &&
    css`
      background: ${({ theme }) =>
        theme.gradients.mediumsLateBlueToMidnightBlue};
      color: ${({ theme }) => theme.colors.white};
    `};

  &:hover {
    background: ${({ theme }) => theme.colors.lightsteelblue};
    color: ${({ theme }) => theme.colors.midnightBlue};

    ${({ variant }) =>
      variant === 'white' &&
      css`
        background: ${({ theme }) => theme.colors.mediumslateBlue};
        color: ${({ theme }) => theme.colors.white};
      `}
  }
`;
