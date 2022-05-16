import React,{useState} from 'react';

export default function InputField(props) {
  const { label,data, onChange, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  console.log(data)
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
      <label className="label after:content-['*'] after:text-pink-500 after:ml-1">
        {label}
      </label>
      <input
        value={data[inputProps.name]}
        onChange={handleChange}
        className="input-form peer mb-3"
        {...inputProps}
      />
      <p className={`text-left text-gray-400 text-xs ${props?.optional ? "mb-3" : "mb-0"}`}>{props?.optional}</p>
    </>
  );
}
