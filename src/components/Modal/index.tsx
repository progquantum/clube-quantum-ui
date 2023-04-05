import { AnimatePresence, PanInfo, useAnimation } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import {
  DRAG_CONSTRAINTS_ANIMATION,
  DRAG_ELASTIC_ANIMATION,
  MODAL_ANIMATION,
  DEFAULT_TRANSITION,
} from './animation';

import { ModalProps } from './types';
import * as S from './styles';

export function Modal({
  children,
  onClose,
  noDragBehavior,
}: PropsWithChildren<ModalProps>) {
  const modalRef = useRef<HTMLDivElement>(null);

  const { start } = useAnimation();

  useEffect(() => {
    start({
      y: 0,
      transition: DEFAULT_TRANSITION,
    });
  }, []);

  async function handleDragEnd(_: Event, info: PanInfo) {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const { height } = modalRef.current.getBoundingClientRect();

    if (offset > height / 2 || velocity > 800) {
      await start({ y: '100%', transition: DEFAULT_TRANSITION });

      onClose();
    } else {
      start({ y: 0, transition: DEFAULT_TRANSITION });
    }
  }

  if (noDragBehavior) {
    return (
      <AnimatePresence>
        <S.AnimatedContainer
          variants={MODAL_ANIMATION}
          initial="visible"
          animate="animate"
          exit="hidden"
          transition={DEFAULT_TRANSITION}
          key="modal"
        >
          <>
            <S.CloseButton
              type="button"
              onClick={onClose}
              title="Fechar Modal"
              aria-label="Fechar Modal"
            >
              <RiCloseLine size={24} />
            </S.CloseButton>
            {children}
          </>
        </S.AnimatedContainer>
        <S.AnimatedModalOverlay onClick={onClose} />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <S.AnimatedContainer
        variants={MODAL_ANIMATION}
        initial="visible"
        animate="animate"
        exit="hidden"
        transition={DEFAULT_TRANSITION}
        drag="y"
        dragDirectionLock
        onDragEnd={(e, info) => handleDragEnd(e, info)}
        dragElastic={DRAG_ELASTIC_ANIMATION}
        dragConstraints={DRAG_CONSTRAINTS_ANIMATION}
        ref={modalRef}
        key="modal"
      >
        <>
          <S.CloseButton
            type="button"
            onClick={onClose}
            title="Fechar Modal"
            aria-label="Fechar Modal"
          >
            <RiCloseLine size={24} />
          </S.CloseButton>
          <S.Drag />
          {children}
        </>
      </S.AnimatedContainer>
      <S.AnimatedModalOverlay onClick={onClose} />
    </AnimatePresence>
  );
}
