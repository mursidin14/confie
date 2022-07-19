import Layout from 'components/Layout/Layout';
import React from 'react';
import Search from './Search';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import BasicCard from 'components/Widgets/BasicCard';
import CandidateProvider from 'context/candidate-context';
export default function FAQ() {
  const [items, setItems] = React.useState([
    { title: 'Badge Leveling', content: <LevelBadge /> },
    { title: 'Ayam Berenang', content: <p>Quek quek</p> },
    { title: 'Hello There', content: <p>General Kenobi</p> },
  ]);
  const [search, setsSearch] = React.useState({
    value: '',
    isSearching: false,
  });
  const handleSearchChange = (e) => {
    setsSearch({ ...search, value: e.target.value });
  };
  const handleSearch = () => {
    setsSearch({ ...search, isSearching: true });
    setItems(
      items.filter((item) =>
        item.title.toLowerCase().includes(search.value.toLowerCase()),
      ),
    );
  };
  const handleReset = () => {
    setsSearch({
      value: '',
      isSearching: false,
    });
    setItems([
      { title: 'Badge Leveling', content: <LevelBadge /> },
      { title: 'Ayam Berenang', content: <p>Quek quek</p> },
      { title: 'Hello There', content: <p>General Kenobi</p> },
    ]);
  };
  return (
    <CandidateProvider PageName={'Help'}>
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <BasicCard>
        <section className="px-8 text-left">
          <h3 className="text-2xl font-semibold underline decoration-orange underline-offset-4">
            FAQ
          </h3>
          {items.map((item) => (
            <DisclosureContainer title={item.title} content={item.content} />
          ))}
        </section>
      </BasicCard>
    </CandidateProvider>
  );
}

function DisclosureContainer({ title, content }) {
  return (
    <div className="my-5 w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange/10 px-4 py-6 text-left text-sm font-medium text-yellow-900 transition-all hover:bg-orange/20">
              <span>{title}</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-yellow-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

function LevelBadge() {
  const items = [
    { title: 'Basic', description: '😪', color: '#E2E1DF' },
    { title: 'Intermediate', description: '😐', color: '#7ED957' },
    { title: 'Advanced', description: '😀', color: '#2283E8' },
    {title: 'Expert', description: '😍', color: '#FFCA0E'},
  ];
  return (
    <article>
      {items.map((item) => (
        <BadgeItem item={item} />
      ))}
    </article>
  );
}

function BadgeItem({ item: { title, description, color } }) {
  return (
    <>
      <div className="my-2 flex items-center gap-5">
        <svg
          className="h-7 w-7 sm:h-7 sm:w-7"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6016 4.65525C13.6061 2.70547 16.3939 2.70547 17.3984 4.65525C18.002 5.82684 19.3636 6.39087 20.6189 5.98924C22.7079 5.32085 24.6791 7.29206 24.0108 9.38106C23.6091 10.6363 24.1731 11.998 25.3448 12.6016C27.2945 13.6061 27.2945 16.3939 25.3448 17.3984C24.1731 18.002 23.6091 19.3637 24.0108 20.6189C24.6791 22.7079 22.7079 24.6791 20.6189 24.0107C19.3638 23.6091 18.002 24.1731 17.3984 25.3447C16.3939 27.2945 13.6061 27.2945 12.6016 25.3447C11.998 24.1731 10.6363 23.6091 9.38108 24.0107C7.29208 24.6791 5.32086 22.7079 5.98925 20.6189C6.39089 19.3637 5.82685 18.002 4.65526 17.3984C2.70549 16.3939 2.70549 13.6061 4.65526 12.6016C5.82685 11.998 6.39089 10.6363 5.98925 9.38106C5.32086 7.29206 7.29208 5.32085 9.38108 5.98924C10.6363 6.39087 11.998 5.82684 12.6016 4.65525Z"
            fill={color}
          />
          <path
            d="M18.5704 11.4879C18.8258 11.1873 19.2214 11.1731 19.5219 11.4286C19.8225 11.6841 19.7786 12.0804 19.5231 12.381L14.8288 18.3198C14.5693 18.6251 14.1095 18.6573 13.81 18.391L10.5957 15.5339C10.3009 15.2718 10.2743 14.8204 10.5364 14.5255C10.7985 14.2306 11.25 14.2041 11.5448 14.4661L14.2133 16.8381L18.5704 11.4879Z"
            fill="white"
          />
        </svg>
        <p>{title}</p>
      </div>
      <div>
        <p className="text-sm ">{description}</p>
      </div>
    </>
  );
}
