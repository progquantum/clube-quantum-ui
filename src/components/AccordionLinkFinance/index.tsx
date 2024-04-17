import { AnimatePresence } from 'framer-motion';
import { PropsWithChildren, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaDollarSign } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';

import { WAITING_QUEUE_REPORT_PAGE } from 'constants/routesPath';

import { NavButton, IconBox, TitleBox } from '../SideBar/styles';
import * as S from './styles';

export function AccordionLinkFinance({
  children,
  isExpanded,
  isMobile,
  title,
}: PropsWithChildren<{
  isExpanded?: boolean;
  isMobile?: boolean;
  title: string;
}>) {
  const { colors } = useTheme();
  const router = useRouter();

  const [accordionStatus, setAccordionStatus] = useState(false);

  const handleAccordionStatus = () =>
    setAccordionStatus(prevState => !prevState);

  if (isMobile) {
    return (
      <AnimatePresence>
        <S.MobileNavButton
          isExpanded
          onClick={handleAccordionStatus}
          key="waiting-queue-link"
        >
          <IconBox isExpanded>
            <FaDollarSign
              size={20}
              color={colors.midnightBlue}
              style={{ flexShrink: 0, marginLeft: '0.4rem' }}
            />
          </IconBox>
          <S.MobileTitleBox>{title}</S.MobileTitleBox>
          {isExpanded && (
            <IconBox isExpanded={isExpanded}>
              {accordionStatus ? (
                <IoIosArrowUp size={36} />
              ) : (
                <IoIosArrowDown size={36} />
              )}
            </IconBox>
          )}
        </S.MobileNavButton>
        {accordionStatus && (
          <S.AnimatedAccordion
            initial={{ opacity: 0.5, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: -10 }}
          >
            {children}
          </S.AnimatedAccordion>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <NavButton
        isExpanded={isExpanded}
        onClick={
          isExpanded
            ? handleAccordionStatus
            : () => router.push(WAITING_QUEUE_REPORT_PAGE)
        }
        key="waiting-queue-link"
      >
        <IconBox isExpanded={isExpanded}>
          <FaDollarSign
            size={isExpanded ? 25 : 28}
            color={colors.midnightBlue}
            style={{ flexShrink: 0, marginLeft: isExpanded ? '0.4rem' : 0 }}
          />
        </IconBox>
        <TitleBox>{title}</TitleBox>
        {isExpanded && (
          <IconBox isExpanded={isExpanded}>
            {accordionStatus ? (
              <IoIosArrowUp size={36} />
            ) : (
              <IoIosArrowDown size={36} />
            )}
          </IconBox>
        )}
      </NavButton>
      {accordionStatus && (
        <S.AnimatedAccordion
          initial={{ opacity: 0.5, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.5, y: -10 }}
        >
          {children}
        </S.AnimatedAccordion>
      )}
    </AnimatePresence>
  );
}
