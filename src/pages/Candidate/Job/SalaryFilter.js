import { useState } from 'react';

export default function SalaryFilter({handleFilterSalary}) {
  const [open, setOpen] = useState(true);
  const [salaryText, setSalaryText] = useState('Range Gaji...');
  const [salaryName, setSalaryName] = useState('0 - 1 Juta');
  function handleClick() {
    setOpen(!open);
  }
  const salaries = [
    {
      name: '0 - 1 Juta',
      min: 0,
      max: 1000000,
    },
    {
      name: '1 - 3 Juta',
      min: 1000000,
      max: 3000000,
    },
    {
      name: '3 - 5 Juta',
      min: 3000000,
      max: 5000000,
    },
    {
      name: '5 - 10 Juta',
      min: 5000000,
      max: 10000000,
    },
    {
      name: '> 10 Juta',
      min: 10000000,
      max: 100000000,
    },
  ];
  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="flex h-[100%] w-full items-center justify-between rounded-md bg-[#F5F8FA] p-3 text-center text-[#9CA3AF] transition-all placeholder:italic hover:bg-[#edf0f3] sm:px-5"
      >
        <span className="italic">{salaryText}</span>
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
          {salaries.map((salary, k) => (
            <SalaryOption key={k} {...salary} handleSalary={handleFilterSalary} setSalaryName={setSalaryName} />
          ))}
        </div>
        <div className="mx-auto mt-3 w-full">
          <button
            className="rounded-md bg-[#FE9A00] px-5  py-2 text-sm text-white"
            onClick={() => {
              setOpen(true);
              setSalaryText(salaryName);
              if (salaryName === '0 - 1 Juta') {
                handleFilterSalary(0, 1000000);
              }
            }}
          >
            Tambah Filter
          </button>
        </div>
      </div>
    </div>
  );
}

function SalaryOption({ name, min, max, handleSalary, setSalaryName }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name="availability"
        id={`${name}`}
        defaultChecked = {min === 0}
        onChange={() => {
          handleSalary(min, max);
          setSalaryName(name);
        }}
      />
      <label htmlFor={name} className="text-sm font-semibold text-black">
        {name}
      </label>
    </div>
  );
}
