import React,{useState} from 'react';

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
      <label className="label">
        {label}
      </label>
      <input
        onChange={handleChange}
        className="input-form peer mb-3"
        {...inputProps}
      />
      <p className={`text-left text-gray-400 text-xs ${props?.optional ? "mb-3" : "mb-0"}`}>{props?.optional}</p>
    </>
  );
}
