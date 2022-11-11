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
  cursor: pointer;
  font-size: 2.5rem;
  color: #fff;
`;

export const ToolTipCard = styled.div`
  bottom: 1rem;
  right: 1rem;
  position: fixed;
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d3d3d;
  border-radius: 50%;
  z-index: 1;
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
