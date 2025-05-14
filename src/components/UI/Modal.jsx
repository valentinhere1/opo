import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #252526;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
`;

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    document.body
  );
};