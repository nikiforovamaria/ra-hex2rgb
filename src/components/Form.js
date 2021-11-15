import React from 'react'
import PropTypes from 'prop-types'
import validateHex from './validateHex'
import convertHexToRgb from './convertHexToRgb'

export default function Form(props) {
  const { color, onChange } = props;

  const hex = validateHex(color);

  return (
    <form className="form">
      <input
         type="text"
         name="hex"
         id="hex" 
         defaultValue={color} 
         onChange={onChange} />
      <div id="rgb">{convertHexToRgb(hex)}</div>
    </form>
  )
}

Form.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
}
