import styled from 'styled-components'

export const Toolbar = styled.div`
  display: flex;
  justify-content: center;
`

export const ToolbarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid var(--primary-border);
  background: var(--primary-border);
`

export const ToolbarLabel = styled.div`
  margin-right: 5px;
`

export const ToolbarInput = styled.input`
  border: none;
  text-align: right;
  width: 70px;
  font-size: 1.2rem;
  padding: 5px;
  outline: unset;
  border-radius: 8px;
  background-color: #f9f9ff;
`

export const MainBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  border-radius: 5px;
  border: 1px solid var(--primary-border);

  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--display-bar-shadow);
`
export const GeneratorBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`
