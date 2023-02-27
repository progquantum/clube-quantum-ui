import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IoMdArrowDropdown,
  IoMdArrowDropleft,
  IoMdDocument,
} from 'react-icons/io';

import { colors } from 'styles/theme/colors';

import { ContractComponent } from '../ContractComponent';
import { Props } from './types';

const Accordion = ({ onRequestModalContract }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        style={{
          background: '#ffffff',
          boxShadow: isOpen
            ? '5px 0 4px -4px rgba(0, 0, 0, 0.08), -5px 0 4px -4px rgba(0, 0, 0, 0.08)'
            : 'none',
          borderRadius: '30px 30px 0px 0px ',
        }}
      >
        <motion.div
          onClick={() => setIsOpen(prev => !prev)}
          style={{
            background: '#F5F6FA',
            borderRadius: '100px',
            height: '59px',
            padding: '12px',
            alignItems: 'center',
            display: 'flex',
            marginTop: '24px',
            justifyContent: 'space-between',
          }}
        >
          <motion.div style={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              style={{
                background: '#0C61FF',
                borderRadius: '100px',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                padding: '0',
                justifyContent: 'center',
                marginRight: '12px',
              }}
            >
              <IoMdDocument size={15} color="white" />
            </motion.div>
            Contratos
          </motion.div>
          {isOpen ? (
            <IoMdArrowDropleft size={35} color={colors.gray[700]} />
          ) : (
            <IoMdArrowDropdown size={35} color={colors.gray[700]} />
          )}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '20px',
              gap: '24px',
              borderRadius: '0px 0px 15px 15px',
            }}
            initial={{ opacity: 0, y: '-10%' }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: '-10%',
              transition: {
                duration: 0.5,
              },
            }}
          >
            <ContractComponent
              onRequestModalContract={onRequestModalContract}
            />
            <ContractComponent
              onRequestModalContract={onRequestModalContract}
            />
            <ContractComponent
              onRequestModalContract={onRequestModalContract}
            />
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
