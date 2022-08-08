import { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import AuthService from 'services/Auth/AuthService';

export default function UpdateSkillRequirmentBusiness({ data, onChange, }) {
  const dataSkill = data.requimentskill.map(item => {
    return {
      name: item.name,
      id: item.id,
    }
  });
  const [tags, setTags] = useState([...dataSkill.map(item => item.name)]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getSkill = async () => {
      const response = await AuthService.getListSkill();
      setSkills(response.data.data);
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
        setTags([...tags, value2]);
        onChange({
          ...data,
          skills: [...data.skills, value2],
        });
        return;
      }
      setTags([...tags, value]);
      onChange({
        ...data,
        skills: [...data.skills, id],
      });
      return;
    }
    if (value2) {
      setTags([...tags, value2]);
      onChange({
        ...data,
        skills: [...data.skills, value2],
      });
    }
  };
  return (
    <div className="flex h-fit flex-wrap items-center gap-2 overflow-hidden w-full rounded-md border-[3px] border-transparent bg-soft-gray py-3 focus-within:border-black">
      <ul className="flex flex-wrap px-1">
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
      <InputTag skills={skills} addTags={addTags} role={data.role}></InputTag>
    </div>
  );
}

function InputTag({ addTags, skills, role }) {
  const [nameSkill, setNameSkill] = useState('');
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');
  const filteredSkills =
    query === ''
      ? skills
      : skills.filter((skill) =>
          skill.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );
  function handleChange(event) {
    setQuery(event.target.value);
    setNameSkill(event.target.value);
  }
  async function handleClick(e) {
    const id = skills.find((skill) => skill.name === e.target.innerText).id;
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
        />

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 h-[100px] max-h-60 w-fit overflow-auto rounded-md bg-white text-left shadow-lg sm:max-w-[400px]">
            {filteredSkills.length === 0 && query !== '' ? (
              <div className="relative z-10 cursor-default select-none py-2 px-4 text-gray-700">
                Press enter to add arbitrary skill
              </div>
            ) : (
              filteredSkills.map((person) => (
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
