import styled from 'styled-components'

export const MainBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--border);
  background-color: var(--surface);

  box-shadow: 0 24px 48px rgba(37, 99, 235, 0.1);
`

export const GeneratorBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 750px;
`
