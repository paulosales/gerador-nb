import styled from 'styled-components'

export const NbDisplayContainer = styled.div`
  margin: 5px;
  width: 340px;
  border-radius: 5px;
`

export const NbDisplayLabel = styled.div`
  font-size: 1rem;
`

export const NbDisplayContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  border-radius: 5px;
  padding: 5px;
  border: solid 1px var(--primary-border);

  &:hover {
    background-color: var(--cpf-display-hover);
  }
`
