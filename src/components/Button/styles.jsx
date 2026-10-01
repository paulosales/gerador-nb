import styled from 'styled-components'

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 625px;
  max-width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 14px;
  margin: 6px;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  background-color: var(--primary);
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    transform 0.1s ease;

  &:hover {
    background-color: var(--primary-hover);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

export const ButtonHint = styled.span`
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  opacity: 0.8;
`

export default ButtonContainer
