import styled, { css } from 'styled-components';

import { HeaderAccessMarket } from 'layouts/Dashboard/MainContent/styles';

import { TitlePlan } from 'components/Plans/styles';
import {
  StatusPlan,
  TitleStatusPlan,
} from 'layouts/Subscriptions/SelectPlan/styles';

import { InviteFriendsPropsStyle } from './types';

export const HeaderInviteFriends = styled(HeaderAccessMarket)`
  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const TitleFriends = styled(TitlePlan)`
  font-size: 98%;
  color: ${({ theme }) => theme.colors.white};
`;

export const TitleInviteFriends = styled(TitleStatusPlan)`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const TextInviteFriends = styled(StatusPlan)`
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonInviteFriends = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.midnightBlue};
  width: 100%;
  padding: 1rem;
  border-radius: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.lightsteelblue};
    color: ${({ theme }) => theme.colors.midnightBlue};
  }
`;

export const InviteBox = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.1s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.midnightBlue};
  }

  & span:last-child {
    display: block;
  }
`;

export const SocialIconsBox = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  justify-content: center;
  & > div {
    border-radius: 50%;
    padding: 0.4rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.midnightBlue};
    background-color: ${({ theme }) => theme.colors.white};
  }
  & div {
    cursor: pointer;
  }
`;

export const InvitationsAcceptedBox = styled.div`
  width: 100%;
  & div:first-child {
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
  }
`;

export const ProgressBar = styled.div<{ quantityFilledInPercent: string }>`
  width: 100%;
  height: 15px;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.midnightBlue};
  & div {
    width: ${({ quantityFilledInPercent }) => quantityFilledInPercent};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: inherit;
    height: inherit;
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const DivInviteFriends = styled.div<InviteFriendsPropsStyle>`
  grid-area: DivInviteFriends;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  gap: 2rem;
  height: max-content;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  ${({ variant }) =>
    variant === 'limitReached' &&
    css`
      background-color: ${({ theme }) => theme.colors.gray[50]};

      & ${HeaderInviteFriends} {
        & > svg,
        ${TitleFriends} {
          color: ${({ theme }) => theme.colors.gray[400]};
        }
      }
      & ${TitleInviteFriends}, ${TextInviteFriends}, ${InviteBox} {
        color: ${({ theme }) => theme.colors.gray[400]};
      }
      & ${InviteBox} {
        border-color: ${({ theme }) => theme.colors.gray[400]};
      }

      & ${SocialIconsBox} {
        & div {
          color: ${({ theme }) => theme.colors.gray[400]};
          background-color: ${({ theme }) => theme.colors.gray[100]};
        }
      }

      & ${InvitationsAcceptedBox} {
        & span {
          color: ${({ theme }) => theme.colors.gray[400]};
        }

        & div:last-child {
          background: ${({ theme }) => theme.colors.gray[400]};
          &::before {
            background-color: inherit;
          }
        }
      }
    `};

  @media (max-width: 1024px) {
  }

  @media (max-width: 460px) {
  }

  @media (max-width: 380px) {
  }
`;
