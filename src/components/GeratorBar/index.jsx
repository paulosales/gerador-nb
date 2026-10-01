import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { MainBar, GeneratorBarContainer } from './styles'
import Display from '../Display'
import Button from '../Button'
import { generateNb } from '../../service/nb-service'

const GeneratorBar = () => {
  const [nb, setNb] = useState(generateNb())

  return (
    <GeneratorBarContainer>
      <MainBar>
        <Display formated nb={nb} label="NB formatado" shortCut="alt+c" />
        <Display
          formated={false}
          nb={nb}
          label="NB não formatado"
          shortCut="ctrl+c"
        />
        <Button
          shortCut="g"
          onClick={() => {
            setNb(generateNb())
          }}
        >
          <FontAwesomeIcon icon={faArrowsRotate} /> Gerar
        </Button>
      </MainBar>
    </GeneratorBarContainer>
  )
}

export default GeneratorBar
