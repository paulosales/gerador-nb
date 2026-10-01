import React from 'react'
import GeratorBar from './GeratorBar'
import { AppContainer, AppTitle, AppSubtitle, AppFooter } from './styles'

function App() {
  return (
    <AppContainer>
      <AppTitle>Gerador de Número do Benefício (NB)</AppTitle>
      <AppSubtitle>
        Gere números de NB do INSS, formatados ou não, para testes e
        homologação.
      </AppSubtitle>
      <GeratorBar />
      <AppFooter>
        Uso exclusivo para testes. Não representa um benefício real.
      </AppFooter>
    </AppContainer>
  )
}

export default App
