import React,{useState} from 'react';
import "./InputFields.css";

export default function InputField(props) {
  const { label,data, onChange, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  function handleChange(e) {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <label className="label" for="">
        {label}
      </label>
      <input
        onBlur={handleFocus}
        onChange={handleChange}
        className="input-form peer mb-3"
        {...inputProps}
        focused={focused.toString()}
      />
      <span className='error'>{errorMessage}</span>
      <p className='text-left text-gray-400 text-xs'>{props?.optional}</p>
    </>
  );
}
