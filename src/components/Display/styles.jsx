import styled from 'styled-components'

export const DisplayContainer = styled.div`
  margin: 6px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
`

export const DisplayLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 4px;
`

export const DisplayContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 10px;
  padding: 14px 18px;
  border: 1px solid var(--border);
  background-color: var(--surface);
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 1.9rem;
  font-weight: 600;
  width: 330px;
  letter-spacing: 0.03em;
  color: var(--primary);
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    transform 0.15s ease;

  svg {
    font-size: 1.2rem;
    color: var(--text-muted);
    transition: color 0.15s ease;
  }

  &:hover {
    border-color: var(--primary);
    background-color: var(--primary-soft);
    transform: translateY(-1px);
  }

  &:hover svg {
    color: var(--primary);
  }

  @media (max-width: 480px) {
    font-size: 1.15rem;
    padding: 10px 14px;
    width: 225px;
  }
`

export const DisplayHint = styled.div`
  margin-top: 6px;
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-muted);
`
