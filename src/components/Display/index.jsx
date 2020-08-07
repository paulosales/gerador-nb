import React from 'react'
import { NbDisplayContainer, NbDisplayLabel, NbDisplayContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import { formatNb } from '../../service/nb-service'
import { NotificationManager } from 'react-notifications'

const NbDisplay = (props) => {
  const { formated, nb, label } = props

  const nbShowed = formated ? formatNb(nb) : nb

  return (
    <NbDisplayContainer
      onClick={() => {
        copy(nbShowed)
        NotificationManager.info(`NB ${nbShowed} copiado.`, '', 3000)
      }}
    >
      <NbDisplayLabel>{label}</NbDisplayLabel>
      <NbDisplayContent>
        {nbShowed}
        <FontAwesomeIcon icon={faCopy} />
      </NbDisplayContent>
    </NbDisplayContainer>
  )
}

NbDisplay.propTypes = {
  formated: PropTypes.bool,
  nb: PropTypes.string,
  label: PropTypes.string,
}

export default NbDisplay
