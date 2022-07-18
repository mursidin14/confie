import Layout from 'components/Layout/Layout';
import React from 'react';
import Search from './Search';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import BasicCard from 'components/Widgets/BasicCard';
export default function FAQ() {
  const [items, setItems] = React.useState([
    { title: 'Ayam Berenang' },
    { title: 'Bebek Goreng' },
  ]);
  const [search, setsSearch] = React.useState({
    value: '',
    isSearching: false,
  });
  const handleSearchChange = (e) => {
    setsSearch({ ...search, value: e.target.value });
  }
  const handleSearch = () => {
    setsSearch({ ...search, isSearching: true });
    setItems(items.filter((item) => item.title.toLowerCase().includes(search.value.toLowerCase())));
  }
  const handleReset = () => {
    setsSearch({
      value: '',
      isSearching: false,
    });
    setItems([
      { title: 'Ayam Berenang' },
      { title: 'Bebek Goreng' },
    ]);
  }
  return (
    <Layout PageName={'Help'}>
      <Search search={search} handleSearchChange={handleSearchChange} handleSearch={handleSearch} handleReset={handleReset}/>
      <BasicCard>
        <section className="px-8 text-left">
          <h3 className="text-2xl font-semibold underline decoration-orange underline-offset-4">
            FAQ
          </h3>
          {items.map((item) => (
            <DisclosureContainer
              title={item.title}
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est veniam quo omnis officia quibusdam ipsum? Labore quod quibusdam, est alias dolorem rerum obcaecati esse ab harum architecto nesciunt quisquam sunt`}
            />
          ))}
        </section>
      </BasicCard>
    </Layout>
  );
}

function DisclosureContainer({ title, description }) {
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
              {description}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
