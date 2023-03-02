import { HiMenuAlt1 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { SideBar } from 'components/SideBar';

import { HeaderAuth } from 'components/Header/HeaderAuth';

import { Footer } from 'components/Footer';

import { Props } from './types';
import * as S from './styles';
import { SideBarMobile } from './SidebarMobile';

export function DashboardLayout({ children }: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      {isSideBarOpen && (
        <motion.div
          style={{ zIndex: 1000, position: 'fixed' }}
          initial={{
            opacity: 1,
            transform: 'scaleY(0.9)',
          }}
          animate={{
            transform: isSideBarOpen ? 'scaleY(1)' : 'scaleY(0.9)',
          }}
          transition={{ duration: 0.2 }}
        >
          <SideBarMobile
            closeMenu={() => setIsSideBarOpen(prevState => !prevState)}
          />
        </motion.div>
      )}
      <HeaderAuth />
      <S.SideBarMobileTrigger>
        <HiMenuAlt1
          size={40}
          onClick={() => setIsSideBarOpen(prevState => !prevState)}
        />
      </S.SideBarMobileTrigger>
      <S.Container>
        <SideBar />
        <S.RightWrapper>{children}</S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  );
}
