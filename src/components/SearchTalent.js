import React, { useState } from "react";

export default function SearchTalent() {
  return (
    <div className="rounded-md bg-white p-3 text-xs shadow-mine sm:flex-row sm:gap-7 sm:p-7 lg:text-sm">
        <input
          className="w-full rounded-md bg-[#F5F8FA] p-3 placeholder:italic sm:px-5"
          type="text"
          placeholder="Search by name or skillset..."
        />
        <div className="mt-3 flex justify-between gap-3 sm:gap-7">
          <AvailFilter></AvailFilter>
          <SkillFilter></SkillFilter>
          <LocationFilter></LocationFilter>
        </div>
      </div>
  )
}


function AvailFilter() {
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
          <span className="italic">Filter by availability</span>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          className={`absolute right-8 w-[300px] rounded-md border-[0.5px] border-[#b1b1b1] bg-white py-4 px-6 md:right-auto ${
            open ? 'translate-y-0  opacity-0' : ' translate-y-1 opacity-100'
          } transition-all`}
        >
          <div className="mx-auto flex w-[100px] flex-col space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="availability" id="work" value="work" />
              <label for="work" className="text-sm font-semibold text-black">
                Work
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="availability"
                id="not_work"
                value="not work"
              />
              <label for="not_work" className="text-sm font-semibold text-black">
                Not Work
              </label>
            </div>
          </div>
          <div className="mx-auto mt-3 w-full">
            <button className="rounded-md bg-[#FE9A00] px-5  py-2 text-sm text-white">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          className={`absolute right-8 w-[300px] rounded-md border-[0.5px] border-[#b1b1b1] bg-white py-4 px-6 md:right-auto ${
            open ? 'translate-y-0  opacity-0' : ' translate-y-1 opacity-100'
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
  function LocationFilter() {
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
          <span className="italic">Filter by Location</span>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          className={`absolute right-8 w-[300px] rounded-md border-[0.5px] border-[#b1b1b1] bg-white py-4 px-6 md:right-auto ${
            open ? 'translate-y-0  opacity-0' : ' translate-y-1 opacity-100'
          } transition-all`}
        >
          <div className="space-y-2">
            <div className="flex items-center rounded-md border-2 border-[#F5F8FA] bg-[#F5F8FA] focus-within:border-black">
              <input
                className="ml-2 bg-[#F5F8FA] focus:outline-none p-3"
                type="text"
                placeholder="Location.."
              />
            </div>
          </div>
          <div className="mx-auto mt-7 w-full">
            <button className="rounded-md bg-[#FE9A00] px-5  py-2 text-sm text-white">
              Tambah Filter
            </button>
          </div>
        </div>
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
          name='skill'
          onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
          className="w-fit bg-soft-gray pl-3 focus:border-0 focus:outline-none"
          type="text"
        />
      </div>
    );
  }
  