import React, { useState } from 'react'
import Form from './Form'

export default function Converter() {
  const [state, setState] = useState('#ffffff');

  const onChange = (event) => {
    event.preventDefault();
    setState(() => event.target.value)
  }

  return (
    <div className="converter" style={{backgroundColor: state}}>
      <Form color={state} onChange={onChange} />
    </div>
  )
}
