import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

class PartButton extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {fontStyle, clickBtn, text} = this.props
    return (
      <span
        style={fontStyle}
        onClick={clickBtn}
        className='btn'>{text}
      </span>
    )
  }
}

PartButton.propTypes = {
  text: PropTypes.string,
  fontStyle: PropTypes.object,
  clickBtn: PropTypes.func.isRequired
}
export default PartButton