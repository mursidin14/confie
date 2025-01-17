import { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import AuthService from 'services/Auth/AuthService';

function InputTag({ addTags, people, role }) {
  const [nameSkill, setNameSkill] = useState('');
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');
  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );
  function handleChange(event) {
    setQuery(event.target.value);
    setNameSkill(event.target.value);
  }
  async function handleClick(e) {
    const id = people.find((person) => person.name === e.target.innerText).id;
    addTags(e.target.innerText, id);
  }

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="mt-1 grow">
        <Combobox.Input
          className="w-full bg-soft-gray pl-2 focus:outline-none"
          onChange={handleChange}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              addTags(selected.name, selected.id, nameSkill);
            }
          }}
          placeholder={role === 'personal' ? 'Add Skill' : 'Add Field'}
        />

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 h-[100px] max-h-60 w-fit overflow-auto rounded-md bg-white text-left shadow-lg sm:max-w-[400px]">
            {filteredPeople.length === 0 && query !== '' ? (
              <div className="relative z-10 cursor-default select-none py-2 px-4 text-gray-700">
                Press enter to add arbitrary skill
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

export default function InputSkill({ data, onChange }) {
  const [tags, setTags] = useState([]);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const getSkill = async () => {
      if (data.role === 'personal') {
        const response = await AuthService.getListSkill();
        setPeople(response.data.data);
      } else {
        const response = await AuthService.getListField();
        setPeople(response.data);
      }
    };
    getSkill();
  }, []);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    onChange({
      ...data,
      skills: [...data.skills.filter((_, index) => index !== indexToRemove)],
    });
  };
  const addTags = (value, id, value2) => {
    if (value !== '' && value !== undefined) {
      if (tags.includes(value)) {
        if (value2) {
          setTags([...tags, value2]);
          if(data.role === 'personal'){
            onChange({
              ...data,
              skills: [...data.skills, value2],
            });  
          }else{
            onChange({
              ...data,
              fields: [...data.fields, value2],
            });
          }
          
        }
        return;
      }
      setTags([...tags, value]);
      if(data.role === 'personal'){
        onChange({
          ...data,
          skills: [...data.skills, id],
        });
      }else{
        onChange({
          ...data,
          fields: [...data.fields, id],
        });
      }
      
      return;
    }
    if (value2) {
      setTags([...tags, value2]);
      if (data.role === 'personal') {
        onChange({
          ...data,
          skills: [...data.skills, value2],
        });  
      }else{
        onChange({
          ...data,
          fields: [...data.fields, value2],
        });
      }
    }
  };

  return (
    <div className="flex h-fit flex-wrap items-center gap-2 overflow-hidden  rounded-md border-2 border-transparent bg-soft-gray py-5 px-3 focus-within:border-black">
      <ul className="flex flex-wrap">
        {tags.map((tag, index) => (
          <li
            className="m-2 flex items-center gap-3 rounded-md bg-[#A1A5B7] px-3 py-1 text-white"
            key={index}
          >
            <span>{tag}</span>
            <button className="" onClick={() => removeTags(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
      <InputTag people={people} addTags={addTags} role={data.role}></InputTag>
    </div>
  );
}
export function UpdateInputSkill({ data, onChange, skills }) {
  const [tags, setTags] = useState([]);
  const [idTags, setIdTags] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getSkill = async () => {
      const response = await AuthService.getListSkill();
      setPeople(response.data.data);
      setTags(skills);
      setIdTags(skills.map((skill) => skill.id));
      setLoading(false);
    };
    getSkill();
  }, []);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    setIdTags([
      ...tags
        .filter((_, index) => index !== indexToRemove)
        .map((tag) => tag.id),
    ]);
    onChange({
      ...data,
      skills: [...data.skills.filter((_, index) => index !== indexToRemove)],
    });
  };
  const addTags = (value, id, value2) => {
    console.log(value, value2);
    if (value !== '' && value !== undefined) {
      if (tags.map((tag) => tag.name).includes(value)) {
        if (tags.map((tag) => tag.name).includes(value2)) {
          return;
        }
        setTags([
          ...tags,
          {
            name: value2,
          },
        ]);
        onChange({
          ...data,
          skills: [...data.skills, value2],
        });
        return;
      }
      setTags([
        ...tags,
        {
          name: value,
          id: id,
        },
      ]);
      setIdTags([...idTags, id]);
      onChange({
        ...data,
        skills: [...data.skills, id],
      });
      return;
    }
    if (value2) {
      setTags([
        ...tags,
        {
          name: value2,
        },
      ]);
      onChange({
        ...data,
        skills: [...data.skills, value2],
      });
    }
  };

  return (
    <div className="flex h-fit flex-wrap items-center gap-2 overflow-hidden  rounded-md border-2 border-transparent bg-soft-gray py-5 px-3 focus-within:border-black">
      <ul className="flex flex-wrap">
        {loading
          ? null
          : tags.map((tag, index) => (
              <li
                className="m-2 flex items-center gap-3 rounded-md bg-[#A1A5B7] px-3 py-1 text-white"
                key={index}
              >
                <span>{tag.name}</span>
                <button className="" onClick={() => removeTags(index)}>
                  x
                </button>
              </li>
            ))}
      </ul>
      <InputTag people={people} addTags={addTags}></InputTag>
    </div>
  );
}
