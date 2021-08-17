import React from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {
  const { color, onChange } = props;

  const convertColor = () => {
    if (color.length < 7) return '';
    const hex = color.replace('#', '');
    if (hex.length !== 6 || hex.match(/[g-z]/)) return 'Ошибка';
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <form className="form">
      <input type="text" name="hex" id="hex" defaultValue={color} onChange={onChange} />
      <div id="rgb">{convertColor(color)}</div>
    </form>
  )
}

Form.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
}
