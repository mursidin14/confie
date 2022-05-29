import React from 'react';
import ProfileService from 'services/Profile/ProfileService';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
export default function ModalSkill() {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-[#FE9A00] px-5 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Edit
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">My Skill</h3>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="my-5">
        <div className="px-8">
          <InputTag />
        </div>
      </div>

                  <div className="mt-4 flex justify-end gap-4 px-8">
                    <button
                      onClick={closeModal}
                      className="rounded-md bg-[#F5F8FA] px-4 py-2 text-sm"
                    >
                      Cancel
                    </button>
                    <button className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white">
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}




function InputTag() {
    const [tags, setTags] = useState(["Node js"]);
    const removeTags = indexToRemove => {
          setTags([...tags.filter((_, index) => index !== indexToRemove)]);
      };
    const addTags = (event) => {
      if (event.target.value !== '') {
        setTags([...tags, event.target.value]);
        event.target.value = '';
      }
    };
    return (
      <div className="flex h-fit w-full flex-wrap rounded-md border-2 border-transparent bg-soft-gray py-5 px-3 focus-within:border-black">
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
          name="skills"
          placeholder="Add Skill"
          onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
          className="bg-soft-gray px-3 w-[100px] focus:border-0 focus:outline-none text-sm"
          type="text"
        />
      </div>
    );
  }