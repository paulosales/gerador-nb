import React from 'react'
import { DisplayContainer, DisplayLabel, DisplayContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import { formatNb } from '../../service/nb-service'
import { NotificationManager } from 'react-notifications'
import { hotkey_display, hotkeys } from 'react-keyboard-shortcuts'

class Display extends React.PureComponent {
  constructor() {
    super()
    this.doCopy = this.doCopy.bind(this)
  }

  doCopy() {
    const { formated, nb } = this.props
    const nbShowed = formated ? formatNb(nb) : nb
    copy(nbShowed)
    NotificationManager.info(`CPF ${nbShowed} copiado.`, '', 3000)
  }

  componentDidMount() {
    this.hot_keys = {}
    if (this.props.shortCut) {
      this.hot_keys[this.props.shortCut] = {
        priority: 1,
        handler: this.doCopy,
      }
    }
  }

  render() {
    const { formated, nb, label } = this.props

    const nbShowed = formated ? formatNb(nb) : nb

    return (
      <DisplayContainer
        title={`Copie com ${hotkey_display(this.props.shortCut)}`}
        onClick={this.doCopy}
      >
        <DisplayLabel>{label}</DisplayLabel>
        <DisplayContent>
          {nbShowed}
          <FontAwesomeIcon icon={faCopy} />
        </DisplayContent>
      </DisplayContainer>
    )
  }
}

Display.propTypes = {
  formated: PropTypes.bool,
  nb: PropTypes.string.isRequired,
  shortCut: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default hotkeys(Display)