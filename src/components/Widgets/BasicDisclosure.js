import { Disclosure } from '@headlessui/react';

export default function BasicDisclosure({title}) {
  let requirments = [
    'Ngoding',
    'Makan',
    'Tidur',
    
  ]
  return (
    <div className="w-full">
      <div className="w-full max-w-md rounded-2xl bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full gap-2 rounded-lg py-2 text-left text-sm font-medium text-blac">
                <div className={`rounded-md bg-[#C9CDDA] px-4 py-2`}>
                  {!open ? (
                    <p className='text-xl'>+</p>
                  ) : (
                    <p className='text-xl'>-</p>

                  )}
                </div>
                <span className='font-semibold'>{title}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="pl-10 pt-4 pb-2 text-sm text-gray-500">
                <ul className='requirments'>
                  {requirments.map((item, index) => (
                    <li className='my-2'><span className='relative left-5 text-[#7E8299]'>{item}</span></li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
