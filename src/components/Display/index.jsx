import React from 'react'
import { DisplayContainer, DisplayLabel, DisplayContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import { formatNb } from '../../service/nb-service'
import { NotificationManager } from 'react-notifications'

const Display = (props) => {
  const { formated, nb, label } = props

  const nbShowed = formated ? formatNb(nb) : nb

  return (
    <DisplayContainer
      onClick={() => {
        copy(nbShowed)
        NotificationManager.info(`NB ${nbShowed} copiado.`, '', 3000)
      }}
    >
      <DisplayLabel>{label}</DisplayLabel>
      <DisplayContent>
        {nbShowed}
        <FontAwesomeIcon icon={faCopy} />
      </DisplayContent>
    </DisplayContainer>
  )
}

Display.propTypes = {
  formated: PropTypes.bool,
  nb: PropTypes.string,
  label: PropTypes.string,
}

export default Display
