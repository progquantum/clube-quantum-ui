import { AnimatePresence, motion, PanInfo, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import {
  DRAG_CONSTRAINTS_ANIMATION,
  DRAG_ELASTIC_ANIMATION,
  MODAL_ANIMATION,
  TRANSITION_PROPS,
} from './animation';

import { ModalProps } from './types';

export function Modal({ children, onClose }: ModalProps) {
  const modalRef = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      transition: TRANSITION_PROPS,
    });
  }, []);

  async function handleDragEnd(_, info: PanInfo) {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const { height } = modalRef.current.getBoundingClientRect();
    if (offset > height / 2 || velocity > 800) {
      await controls.start({ y: '100%', transition: TRANSITION_PROPS });
      onClose();
    } else {
      controls.start({ y: 0, transition: TRANSITION_PROPS });
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="modal-container"
        variants={MODAL_ANIMATION}
        initial="visible"
        animate="animate"
        exit="hidden"
        transition={TRANSITION_PROPS}
        drag="y"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        dragElastic={DRAG_ELASTIC_ANIMATION}
        dragConstraints={DRAG_CONSTRAINTS_ANIMATION}
        ref={modalRef}
        key="modal"
      >
        <button
          type="button"
          onClick={onClose}
          title="Fechar Modal"
          aria-label="Fechar Modal"
          className="modal-close"
        >
          <RiCloseLine size={24} />
        </button>
        <div title="Arraste para fechar" className="drag" />
        {children}
      </motion.div>
      <motion.div className="modal-overlay" onClick={onClose} />
    </AnimatePresence>
  );
}
