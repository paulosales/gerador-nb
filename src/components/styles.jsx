import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 48px 16px;
  text-align: center;
`

export const AppTitle = styled.h1`
  margin: 0;
  font-size: clamp(1.5rem, 1rem + 2vw, 2.25rem);
  color: var(--text);
`

export const AppSubtitle = styled.p`
  margin: -20px 0 0;
  max-width: 750px;
  color: var(--text-muted);
  font-size: 1rem;
`

export const AppFooter = styled.footer`
  margin-top: 8px;
  font-size: 0.8rem;
  color: var(--text-muted);
`
