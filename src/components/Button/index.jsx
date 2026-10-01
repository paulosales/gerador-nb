import React from 'react'
import PropTypes from 'prop-types'
import ButtonContainer, { ButtonHint } from './styles'
import useHotkey, { formatShortcut } from '../../hooks/useHotkey'

const Button = ({ onClick, shortCut, children }) => {
  useHotkey(shortCut, onClick)

  return (
    <ButtonContainer
      onClick={onClick}
      title={
        shortCut ? `Tecla de atalho: ${formatShortcut(shortCut)}` : undefined
      }
    >
      {children}
      {shortCut && <ButtonHint>{formatShortcut(shortCut)}</ButtonHint>}
    </ButtonContainer>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  shortCut: PropTypes.string,
  children: PropTypes.node,
}

export default Button
