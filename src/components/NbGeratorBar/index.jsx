import React, { useState } from 'react'
import { NbGeneratorBarContainer } from './styles'
import NbDisplay from '../NbDisplay'
import Button from '../Button'
import { generateNb } from '../../service/nb-service'

const NbGeneratorBar = () => {
  const [nb, setNb] = useState(generateNb())

  return (
    <NbGeneratorBarContainer>
      <NbDisplay formated={true} nb={nb} label="NB formatado" />
      <NbDisplay formated={false} nb={nb} label="NB não formatado" />
      <Button
        onClick={() => {
          setNb(generateNb())
        }}
      >
        Regerar
      </Button>
    </NbGeneratorBarContainer>
  )
}

export default NbGeneratorBar
