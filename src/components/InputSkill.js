import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { httpClient } from 'utils/http-common';
import utils from 'utils/utils';

const people =  [
  { id: 1, name: 'accounting', category: 'personal' },
  { id: 2, name: 'web development', category: 'personal' },
  { id: 3, name: 'mobile development', category: 'personal' },
  { id: 4, name: 'javascript', category: 'personal' },
  { id: 5, name: 'golang', category: 'personal' },
  { id: 6, name: 'C', category: 'personal' },
  { id: 7, name: 'C++', category: 'personal' },
  { id: 8, name: 'ruby', category: 'personal' },
  { id: 9, name: 'java', category: 'personal' },
  { id: 10, name: 'python', category: 'personal' },
];

 function InputTag({addTags, data}) {
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');
  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  function handleChange(event) {
    setQuery(event.target.value);
  }
  async function handleClick(e) {
      const id = people.find(person => person.name === e.target.innerText).id
      addTags(e.target.innerText, id)
  }
 

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="mt-1">
          <Combobox.Input
            className="bg-soft-gray w-[100px] focus:outline-none pl-2"
            displayValue={(person) => {
              
            }}
            onChange={handleChange}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                addTags(selected.name, selected.id)
              }}}
            placeholder="Add Skill"
          />
          
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute text-left mt-1 sm:max-w-[400px] max-w-[240px] max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg">
            {filteredPeople.length === 0 && query !== '' ? (
              <div className="relative z-10 cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    `z-10 cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-orange text-white' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                        onClick={handleClick}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}

export default function InputSkill({data, onChange}) {
  console.log(data)
    const [tags, setTags] = useState([]);
    const [idTags, setIdTags] = useState([]);
    const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (value, id) => {
    if (value !== "") {
      setTags([...tags, value]);
      setIdTags([...idTags, id]);
      onChange({
        ...data,
        skills: [...idTags]
      })
    }
    return
  };
  
  return (
    <div className='flex flex-wrap items-center gap-2 bg-soft-gray rounded-md  h-fit py-5 px-3 border-2 border-transparent focus-within:border-black overflow-hidden'>
        <ul className='flex flex-wrap'>
            {tags.map((tag, index) => (
                <li className='flex items-center bg-[#A1A5B7] rounded-md px-3 py-1 m-2 gap-3 text-white' key={index}>
                    <span>{tag}</span>
                    <button className='' onClick={() => removeTags(index)}>x</button>
                </li>
            ))}
        </ul>
        <InputTag addTags={addTags}></InputTag>
    </div>    
  )
  }