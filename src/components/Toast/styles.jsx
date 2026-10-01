import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ToastViewport = styled.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1000;
  pointer-events: none;
`

export const ToastItem = styled.div`
  animation: ${slideIn} 0.2s ease-out;
  background-color: var(--toast-background);
  color: var(--toast-text);
  padding: 10px 18px;
  border-radius: 10px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.25);
  font-size: 0.9rem;
  white-space: nowrap;
`
