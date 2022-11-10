import styled from 'styled-components';
import { IoLogoWhatsapp } from 'react-icons/io5';

export const ToolTipBox = styled.div`
  width: max-content;
  visibility: hidden;
  position: absolute;
  bottom: calc(100% + 12px);
  right: 20px;
  color: transparent;
  background-color: transparent;
  padding: 10px 10px;
  border-radius: 4px;
  transition: visibility 0.2s, color 0.15s, background-color 0.15s, width 0.15s,
    padding 0.5s ease-in-out;
  &:before {
    content: '';
    width: 0;
    height: 0;
    right: 5px;
    bottom: -7px;
    position: absolute;
    border: 8px solid transparent;
    transform: rotate(-45deg);
    transition: border 0.1s ease-in-out;
  }
`;

export const Icon = styled(IoLogoWhatsapp)`
  width: 64px;
  height: 64px;
  cursor: pointer;
`;

export const ToolTipCard = styled.div`
  bottom: 5rem;
  right: 5rem;
  position: fixed;
  & svg:hover + ${ToolTipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;
