import React from 'react'

type InputTextProps = {
  type: string;
  placeholder: string;
  value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

function InputText({type, placeholder, value, onChange, required} : InputTextProps) {
  return (
    <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    className='border border-gray-300 p-2 rounded'
    />
  )
}

export default InputText