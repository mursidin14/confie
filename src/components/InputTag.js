import React from 'react'
import { useState } from 'react';
export default function InputTag({data, onChange}) {
    console.log(data);
    const [tags, setTags] = useState([]);
    const [skill, setSkills] = useState('')
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
        onChange(
            {
                ...data,
                skills: [...tags.filter((_, index) => index !== indexToRemove)]
            }
        )
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
            onChange(
                {
                    ...data,
                    skills: [...tags, event.target.value]
                }
            )
		}
        setSkills('')
	};
  
  return (
    <div className='flex flex-wrap bg-soft-gray rounded-md  h-fit py-5 px-3 border-2 border-transparent focus-within:border-black overflow-hidden'>
        <ul className='flex flex-wrap'>
            {tags.map((tag, index) => (
                <li className='flex items-center bg-[#A1A5B7] rounded-md px-3 py-1 m-2 gap-3 text-white' key={index}>
                    <span>{tag}</span>
                    <button className='' onClick={() => removeTags(index)}>x</button>
                </li>
            ))}
        </ul>
        <input
        value={skill}
        onChange={e => setSkills(e.target.value)} 
        name={'personal' === 'personal' ? 'skills' : 'fields'}
        placeholder={'personal' === 'personal' ? 'Add your skill' : 'Add field'}
        onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
        className='bg-soft-gray focus:border-0 focus:outline-none pl-3 w-fit' type="text"/>
    </div>    
  )
}
