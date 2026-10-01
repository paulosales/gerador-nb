import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
import {
  DisplayContainer,
  DisplayLabel,
  DisplayContent,
  DisplayHint,
} from './styles'
import useHotkey, { formatShortcut } from '../../hooks/useHotkey'
import { useToast } from '../Toast'
import { formatNb } from '../../service/nb-service'

const Display = ({ formated, nb, label, shortCut }) => {
  const showToast = useToast()

  const nbShowed = formated ? formatNb(nb) : nb

  const doCopy = useCallback(() => {
    copy(nbShowed)
    showToast(`NB ${nbShowed} copiado.`)
  }, [nbShowed, showToast])

  useHotkey(shortCut, doCopy)

  return (
    <DisplayContainer
      title={shortCut ? `Copie com ${formatShortcut(shortCut)}` : undefined}
      onClick={doCopy}
    >
      <DisplayLabel>{label}</DisplayLabel>
      <DisplayContent>
        <span>{nbShowed}</span>
        <FontAwesomeIcon icon={faCopy} />
      </DisplayContent>
      {shortCut && (
        <DisplayHint>Atalho: {formatShortcut(shortCut)}</DisplayHint>
      )}
    </DisplayContainer>
  )
}

Display.propTypes = {
  formated: PropTypes.bool,
  nb: PropTypes.string.isRequired,
  shortCut: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default Display
