import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { httpClient } from 'utils/http-common';
import utils from 'utils/utils';

const people = [
  { id: '11', name: 'ACEH' },
  { id: '12', name: 'SUMATERA UTARA' },
  { id: '13', name: 'SUMATERA BARAT' },
  { id: '14', name: 'RIAU' },
  { id: '15', name: 'JAMBI' },
  { id: '16', name: 'SUMATERA SELATAN' },
  { id: '17', name: 'BENGKULU' },
  { id: '18', name: 'LAMPUNG' },
  { id: '19', name: 'KEPULAUAN BANGKA BELITUNG' },
  { id: '21', name: 'KEPULAUAN RIAU' },
  { id: '31', name: 'DKI JAKARTA' },
  { id: '32', name: 'JAWA BARAT' },
  { id: '33', name: 'JAWA TENGAH' },
  { id: '34', name: 'DAERAH ISTIMEWA' },
  { id: '35', name: 'JAWA TIMUR' },
  { id: '36', name: 'BANTEN' },
  { id: '51', name: 'BALI' },
  { id: '52', name: 'NUSA TENGGARA BARAT' },
  { id: '53', name: 'NUSA TENGGARA TIMUR' },
  { id: '61', name: 'KALIMANTAN BARAT' },
  { id: '62', name: 'KALIMANTAN TENGAH' },
  { id: '63', name: 'KALIMANTAN SELATAN' },
  { id: '64', name: 'KALIMANTAN TIMUR' },
  { id: '65', name: 'KALIMANTAN UTARA' },
  { id: '71', name: 'SULAWESI UTARA' },
  { id: '72', name: 'SULAWESI TENGAH' },
  { id: '73', name: 'SULAWESI SELATAN' },
  { id: '74', name: 'SULAWESI TENGGARA' },
  { id: '75', name: 'GORONTALO' },
  { id: '76', name: 'SULAWESI BARAT' },
  { id: '81', name: 'MALUKU' },
  { id: '82', name: 'MALUKU UTARA' },
  { id: '91', name: 'PAPUA' },
  { id: '92', name: 'PAPUA BARAT' },
];


export default function SearchRegion({ data, onChange, setCity }) {
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
    const province_name = people.find((person) => person.name === e.target.innerText)
    const id = province_name?.id;
    onChange({
      ...data,
      province: id,
    });
    const response = await httpClient.get(`api/location?provinsi=${id}`);
    setCity(utils.getCity(response.data.data));
  }
  async function handleEnter(name) {
    if(name == undefined) {
      return
    }
    const province_name = people.find((person) => person.name === name)
    const id = province_name?.id;
    onChange({
      ...data,
      province: id,
    });
    const response = await httpClient.get(`api/location?provinsi=${id}`);
    setCity(utils.getCity(response.data.data));
  }

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="">
          <label className="label after:ml-1 after:text-pink-500 after:content-['*']">
            Provinsi
          </label>
          <Combobox.Input
            className="input-form peer mb-3"
            displayValue={(person) => {
              handleEnter(person.name);
              return person.name;
            }}
            onChange={handleChange}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 top-4 flex items-center pr-2">
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
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
export function SearchRegionCity({ data, onChange, city }) {
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');
  const people = city;
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
  function handleClick(e) {
    const id = people.find((person) => person.name === e.target.innerText)?.id;
    onChange({
      ...data,
      city: id,
    });
  }
  function handleEnter(name){
    if(name == undefined) {
      return
    }
    const id = people.find((person) => person.name === name)?.id;
    onChange({
      ...data,
      city: id,
    });
  }

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="">
          <label className="label after:ml-1 after:text-pink-500 after:content-['*']">
            City
          </label>
          <Combobox.Input
            className="input-form peer mb-3"
            displayValue={(person) => {
              handleEnter(person.name);
              return person.name;
            }}
            onChange={handleChange}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 top-4 flex items-center pr-2">
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-[100px]  w-full overflow-auto rounded-md bg-white shadow-lg">
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleClick(e);
                    }
                  }}
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
export function SearchRegionProfile({setResetCity, data, onChange, setCity }) {
  const province = {
    name: data.province_name,
  }
  const [selected, setSelected] = useState(province);
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
    const province_name = people.find((person) => person.name === e.target.innerText)
    const id = province_name?.id;
    onChange({
      ...data,
      province: id,
    });
    setResetCity(true)
    const response = await httpClient.get(`api/location?provinsi=${id}`);
    setCity(utils.getCity(response.data.data));
  }
  async function handleEnter(name) {
    if(name == undefined) {
      return
    }
    const province_name = people.find((person) => person.name === name)
    const id = province_name?.id;
    onChange({
      ...data,
      province: id,
    });
    setResetCity(true)
    const response = await httpClient.get(`api/location?provinsi=${id}`);
    setCity(utils.getCity(response.data.data));
  }

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className=" items-center lg:flex">
          <div className="w-5/12">
            <label className="text-xs lg:text-base">Province</label>
          </div>
          <div className="lg:w-7/12">
          <Combobox.Input
            className="input-form peer mb-3"
            displayValue={(person) => {
              handleEnter(person.name);
              return person.name;
            }}
            onChange={handleChange}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 lg:-top-3 top-4 flex items-center pr-2">
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
          <Combobox.Options className="mt-1 h-fit lg:w-7/12 w-full absolute right-0 overflow-auto rounded-md bg-white shadow-lg">
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
export function SearchRegionCityProfile({resetCity, data, onChange, city }) {
  const city_profile = {
    id: data.city,
    name: resetCity ? '' : data.city_name,
  }
  const [selected, setSelected] = useState(city_profile);
  const [query, setQuery] = useState('');
  const people = city;
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
  function handleClick(e) {
    const id = people.find((person) => person.name === e.target.innerText)?.id;
    onChange({
      ...data,
      city: id,
    });
  }
  function handleEnter(name){
    if(name == undefined) {
      return
    }
    const id = people.find((person) => person.name === name)?.id;
    onChange({
      ...data,
      city: id,
    });
  }

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
      <div className=" items-center lg:flex">
          <div className="w-5/12">
            <label className="text-xs lg:text-base">City</label>
          </div>
          <div className="lg:w-7/12">
          <Combobox.Input
            className="input-form peer mb-3"
            displayValue={(person) => {
              handleEnter(person.name);
              return person.name;
            }}
            onChange={handleChange}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 lg:-top-3 top-4 flex items-center pr-2">
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
          <Combobox.Options className="mt-1 h-fit lg:w-7/12 w-full absolute right-0 overflow-auto rounded-md bg-white shadow-lg">
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleClick(e);
                    }
                  }}
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
