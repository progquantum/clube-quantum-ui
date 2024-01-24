import { motion } from 'framer-motion';
import styled from 'styled-components';

import { NavButton, TitleBox } from 'components/SideBar/styles';

export const AnimatedAccordion = styled(motion.div)``;

export const MobileNavButton = styled(NavButton)`
  max-width: 100%;
`;

export const MobileTitleBox = styled(TitleBox)`
  font-weight: 600;
  font-size: 12px;
`;
