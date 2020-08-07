import React, { useState } from 'react'
import { MainBar, GeneratorBarContainer } from './styles'
import Display from '../Display'
import Button from '../Button'
import { generateNb } from '../../service/nb-service'

const NbGeneratorBar = () => {
  const [nb, setNb] = useState(generateNb())

  return (
    <GeneratorBarContainer>
      <MainBar>
        <Display formated={true} nb={nb} label="NB formatado" />
        <Display formated={false} nb={nb} label="NB não formatado" />
        <Button
          onClick={() => {
            setNb(generateNb())
          }}
        >
          Regerar
        </Button>
      </MainBar>
    </GeneratorBarContainer>
  )
}

export default NbGeneratorBar
