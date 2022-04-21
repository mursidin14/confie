import React from 'react'
import { useState } from 'react';
export default function InputTag({data, onChange}) {
    const [tags, setTags] = useState([]);
    let propertiesName = data.type_account === 'personal' ? 'skill' : 'field'
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
            onChange({
                ...data,
                 [event.target.name] : tags})
			event.target.value = "";
            
		}

	};
  
  return (
    <div className='flex flex-wrap bg-soft-gray rounded-md w-full h-fit py-5 px-3 border-2 border-transparent focus-within:border-black'>
        <ul className='flex flex-wrap'>
            {tags.map((tag, index) => (
                <li className='flex items-center bg-[#A1A5B7] rounded-md px-3 py-1 m-2 gap-3 text-white' key={index}>
                    <span>{tag}</span>
                    <button className='' onClick={() => removeTags(index)}>x</button>
                </li>
            ))}
        </ul>
        <input 
        name={data.type_account === 'personal' ? 'skill' : 'field'}
        placeholder={data.type_account === 'personal' ? 'Add your skill' : 'Add field'}
        onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
        className='bg-soft-gray focus:border-0 focus:outline-none px-3' type="text"/>
    </div>    
  )
}
