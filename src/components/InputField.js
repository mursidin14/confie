import React,{useState} from 'react';

export default function InputField(props) {
  const { label,data, onChange, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  function handleChange(e) {
    if (e.target.name === 'date_of_birth') {
      onChange({
        ...data,
        [e.target.name]: new Date(e.target.value).getTime(),
      });
    } else {
      onChange({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
    console.log(data)
    
  }
  const convertDate = (date) => {
    // yyyy-mm-dd
    if (date) {
      return new Date(date).toISOString().slice(0, 10)
    }
    return
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
        value={inputProps.name !== 'date_of_birth' ? data[inputProps.name] : convertDate(data[inputProps.name])}
        onChange={handleChange}
        className="input-form peer mb-3"
        {...inputProps}
      />
      <p className={`text-left text-gray-400 text-xs ${props?.optional ? "mb-3" : "mb-0"}`}>{props?.optional}</p>
    </>
  );
}
