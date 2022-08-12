import SkillFilterTalentPool from 'pages/Business/SkillFilterTalentPool';
import React, { useState } from 'react';
import { makeCapital } from 'utils/utils';

export default function SearchTalent({
  handleFilter,
  handleReset,
  isFilter,
  filter,
  setFilter,
  setIsFilter
}) {
  const setAvail = (name) => {
    setFilter({
      ...filter,
      availability: name,
    });
  };
  const setSkill = (name) => {
    setFilter({
      ...filter,
      skills: name,
    });
  };
  const setLocation = (name) => {
    setFilter({
      ...filter,
      country: name,
    });
  };
  const handleIsFilter = () => {
    setIsFilter(false);
  }
  return (
    <div className="rounded-md bg-white p-3 text-xs shadow-mine sm:flex-row sm:gap-7 sm:p-7 lg:text-sm">
      <input
        className="w-full rounded-md bg-[#F5F8FA] p-3 placeholder:italic sm:px-5"
        type="text"
        placeholder="Search by name"
        name="full_name"
        onChange={(e) => setFilter({ ...filter, full_name: e.target.value })}
      />
      <div className="mt-3 flex justify-between gap-3 sm:gap-7">
        <AvailFilter setIsFilter={handleIsFilter} setAvail={setAvail}></AvailFilter>
        <SkillFilterTalentPool data={filter} onChange={setFilter}/>
        <LocationFilter setIsFilter={handleIsFilter} setLocation={setLocation}></LocationFilter>
      </div>
      <button
        onClick={() => {
          if (isFilter) {
            handleReset();
          }else{
            handleFilter();
          }
        }}
        className="primary-btn mt-5 flex w-fit cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-2"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.43744 13.6788C8.56359 13.6179 8.6699 13.5234 8.74435 13.4061C8.8188 13.2888 8.85841 13.1533 8.85871 13.015V9.02502C8.85871 8.82852 8.93869 8.63952 9.08191 8.50002L13.7448 3.95951C13.886 3.82225 13.9982 3.65877 14.0748 3.47854C14.1514 3.2983 14.191 3.1049 14.1912 2.90951V0.992514C14.1908 0.894486 14.1707 0.797499 14.1322 0.707103C14.0937 0.616707 14.0375 0.534677 13.9667 0.46571C13.8959 0.396742 13.8121 0.342191 13.7199 0.305179C13.6277 0.268167 13.529 0.249421 13.4294 0.250014H1.24091C0.819642 0.250014 0.479126 0.581514 0.479126 0.992514V2.90951C0.479126 3.30326 0.639862 3.68126 0.925529 3.95951L5.58838 8.50002C5.65903 8.56862 5.71514 8.65036 5.75346 8.74048C5.79177 8.8306 5.81153 8.92732 5.81159 9.02502V13.7575C5.81159 14.3088 6.4073 14.6673 6.91388 14.4205L8.43744 13.6788Z"
            fill="white"
          />
        </svg>
        <p>{isFilter ? 'Reset' : 'Filter'}</p>
      </button>
    </div>
  );
}

function AvailFilter({ setAvail, setIsFilter }) {
  const [open, setOpen] = useState(true);
  const [avail, setAvailState] = useState('Filter by availability');
  const [availName, setAvailName] = useState('Work');
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="flex h-[100%] w-full items-center justify-between rounded-md bg-[#F5F8FA] p-3 text-center text-[#9CA3AF] transition-all placeholder:italic hover:bg-[#edf0f3] sm:px-5"
      >
        <span className="italic">{avail}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`absolute right-8 w-[300px] rounded-md border-[0.5px] border-[#b1b1b1] bg-white py-4 px-6 md:right-auto ${
          open ? 'hidden  translate-y-0' : ' translate-y-1 opacity-100'
        } transition-all`}
      >
        <div className="mx-auto flex w-[100px] flex-col space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="availability"
              id="work"
              value="work"
              defaultChecked
              onChange={() => {
                setAvail('employee');
                setAvailName('Work');
              }}
            />
            <label htmlFor="work" className="text-sm font-semibold text-black">
              Work
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="availability"
              id="not_work"
              value="not work"
              onChange={() => {
                setAvail('unemployee');
                setAvailName('Not Work');
              }}
            />
            <label
              htmlFor="not_work"
              className="text-sm font-semibold text-black"
            >
              Not Work
            </label>
          </div>
        </div>
        <div className="mx-auto mt-3 w-full">
          <button
            className="rounded-md bg-[#FE9A00] px-5  py-2 text-sm text-white"
            onClick={() => {
              setAvailState(availName);
              setAvail(availName === 'Work' ? 'employee' : 'unemployee');
              setIsFilter(false);
              setOpen(true);
            }}
          >
            Tambah Filter
          </button>
        </div>
      </div>
    </div>
  );
}
function SkillFilter() {
  const [open, setOpen] = useState(true);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="flex h-[100%] w-full items-center justify-between rounded-md bg-[#F5F8FA] p-3 text-center text-[#9CA3AF] transition-all placeholder:italic hover:bg-[#edf0f3] sm:px-5"
      >
        <span className="italic">Filter by skills</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`absolute right-8 w-[300px] rounded-md border-[0.5px] border-[#b1b1b1] bg-white py-4 px-6 md:right-auto ${
          open ? 'hidden  translate-y-0' : ' translate-y-1 opacity-100'
        } transition-all`}
      >
        <InputTag></InputTag>
        <div className="mx-auto mt-7 w-full">
          <button className="rounded-md bg-[#FE9A00] px-5  py-2 text-sm text-white">
            Tambah Filter
          </button>
        </div>
      </div>
    </div>
  );
}
function LocationFilter({ setLocation, setIsFilter }) {
  const [open, setOpen] = useState(true);
  const [location, setLocationState] = useState('Filter by country');
  const [locationName, setLocationName] = useState('Indonesia');
  function handleClick() {
    setOpen(!open);
  }
  const countries = [
    { id: 'indonesia', name: 'INDONESIA' },
    { id: 'malaysia', name: 'MALAYSIA' },
    { id: 'taiwan', name: 'TAIWAN' },
    { id: 'singapore', name: 'SINGAPORE' },
    { id: 'filipina', name: 'FILIPINA' },
    { id: 'brunei darussalam', name: 'BRUNEI DARUSSALAM' },
  ];
  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="flex h-[100%] w-full items-center justify-between rounded-md bg-[#F5F8FA] p-3 text-center text-[#9CA3AF] transition-all placeholder:italic hover:bg-[#edf0f3] sm:px-5"
      >
        <span className="italic">{location}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`absolute right-8 w-[300px] rounded-md border-[0.5px] border-[#b1b1b1] bg-white py-4 px-6 md:right-auto ${
          open ? 'hidden  translate-y-0' : ' translate-y-1 opacity-100'
        } transition-all`}
      >
        <div className="space-y-2">
          {countries.map((country, k) => (
            <CountryOption
              key={k}
              name={country.name}
              setLocation={setLocation}
              setLocationName={setLocationName}
            />
          ))}
        </div>
        <div className="mx-auto mt-7 w-full">
          <button
            onClick={() => {
              setLocationState(locationName);
              setLocation(locationName.toLocaleLowerCase());
              setIsFilter(false);
              setOpen(true);
            }}
            className="rounded-md bg-[#FE9A00] px-5  py-2 text-sm text-white"
          >
            Tambah Filter
          </button>
        </div>
      </div>
    </div>
  );
}
function CountryOption({ name, setLocation, setLocationName }) {
  return (
    <div className="flex gap-5">
      <input
        id={name}
        type="radio"
        name="country"
        defaultChecked={name === 'INDONESIA'}
        onChange={() => {
          setLocation(name.toLowerCase());
          setLocationName(makeCapital(name));
        }}
      />
      <label htmlFor={name} className="text-sm font-semibold text-black">
        {makeCapital(name)}
      </label>
    </div>
  );
}
function InputTag() {
  const [tags, setTags] = useState([]);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  return (
    <div className="flex h-fit flex-wrap overflow-hidden  rounded-md border-2 border-transparent bg-soft-gray py-5 px-3 focus-within:border-black">
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
      <input
        name="skill"
        onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
        className="w-fit bg-soft-gray pl-3 focus:border-0 focus:outline-none"
        type="text"
      />
    </div>
  );
}
