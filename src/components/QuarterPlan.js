import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const people = [
  { id: '11', name: '1' },
  { id: '12', name: '2' },
  { id: '13', name: '3' },
  { id: '14', name: '4' },
  
];



export default function QuarterPlan({ data, onChange}) {
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
    
  }
  async function handleEnter(name) {
    
  }
  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
      <div className=" items-center lg:flex">
      <div className="w-5/12">
          <label className="label after:ml-1 ">
            Quarter
          </label>
      </div>
      <div className="lg:w-7/12">

          <Combobox.Input
            className="input-form peer mb-3"
            displayValue={(person) => {
              handleEnter(person.name);
              return person.name
            }}
            onChange={handleChange}
            
          />
          <Combobox.Button className="absolute inset-y-0 right-2 -top-2 flex items-center pr-2">
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
      </div>
      </div>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 h-[100px] max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg">
            {filteredPeople.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
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

