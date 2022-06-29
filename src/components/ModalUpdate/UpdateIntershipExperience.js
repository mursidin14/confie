import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
export default function UpdateIntershipExperience({ item, id }) {
  let [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState([]);
  const [dataInternship, setDataInternship] = useState({
    agency: item.agency,
    description: item.description,
    end_date: utils.getYearMonthDay(item.end_date),
    position: item.position,
    start_date: utils.getYearMonthDay(item.start_date),
  });
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function handleChange(e) {
    let { name, value } = e.target;

    setDataInternship({ ...dataInternship, [name]: value });
    console.log(dataInternship);
  }
  async function handleSubmit() {
    let data = {
      ...dataInternship,
    };
    data['start_date'] = utils.timeEpoch(data['start_date']);
    data['end_date'] = utils.timeEpoch(data['end_date']);
    const response = await ProfileService.updateIntershipExperience(id, data);
    if (response.data.meta.status == 'error') {
      let errors = [];
      let error = response.data.data;
      for (let key in error) {
        errors.push(error[key][0]);
      }
      setError(errors);
      return;
    }
    window.location.reload();
  }
  let inputs = [
    {
      label: 'Posisi',
      type: 'text',
      name: 'position',
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      name: 'agency',
      label: 'Instansi',
      type: 'text',
      errorMessage: 'It should be a valid phone number!',
      required: true,
    },
  ];
  let inputs2 = [
    {
      name: 'start_date',
      type: 'date',
      errorMessage: 'It should be a valid email address!',
      label: 'Tahun Mulai',
      required: true,
    },
    {
      name: 'end_date',
      type: 'date',
      errorMessage: 'It should be a valid email address!',
      label: 'Tahun Selesai',
      required: true,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <button onClick={openModal}>
          <svg
            className="w-11"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.225C0 1.8916 1.8916 0 4.225 0H29.775C32.1084 0 34 1.8916 34 4.225V29.775C34 32.1084 32.1084 34 29.775 34H4.225C1.8916 34 0 32.1084 0 29.775V4.225Z"
              fill="#FFF8DD"
            />
            <path
              opacity="0.3"
              d="M25.05 14.2649L23.4307 15.8833L19.1137 11.5663L20.7322 9.94705C21.0186 9.66076 21.4069 9.5 21.8119 9.5C22.2168 9.5 22.6051 9.66076 22.8915 9.94705L25.05 12.1056C25.3363 12.3919 25.4971 12.7803 25.4971 13.1852C25.4971 13.5901 25.3363 13.9785 25.05 14.2649ZM11.7652 24.4491L16.4152 22.8988L12.0982 18.5818L10.548 23.2318C10.4911 23.4016 10.4828 23.5841 10.5239 23.7584C10.565 23.9328 10.654 24.0922 10.7808 24.2187C10.9077 24.3451 11.0673 24.4337 11.2417 24.4744C11.4162 24.5152 11.5985 24.5064 11.7682 24.4491H11.7652Z"
              fill="#FE9A00"
            />
            <path
              d="M13.1805 23.975L11.769 24.446C11.5995 24.5024 11.4175 24.5106 11.2436 24.4695C11.0697 24.4284 10.9106 24.3398 10.7842 24.2134C10.6578 24.0871 10.5691 23.9281 10.5279 23.7542C10.4867 23.5803 10.4947 23.3984 10.551 23.2288L11.022 21.8165L13.1805 23.975ZM12.1013 18.5787L16.4183 22.8957L23.4338 15.8802L19.1168 11.5632L12.1013 18.5787Z"
              fill="#FE9A00"
            />
          </svg>
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
                    <h3 className="text-base font-semibold ">
                      Edit Pengalaman Magang
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-2 lg:px-8">
                      {inputs.map((input, index) => (
                        <InputFormProfile
                          data={dataInternship}
                          {...input}
                          handleChange={handleChange}
                        />
                      ))}
                      {inputs2.map((input, index) => (
                        <InputFormProfile
                          data={dataInternship}
                          {...input}
                          handleChange={handleChange}
                        />
                      ))}
                      <div className="my-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            File
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <input type="file" name='file' onChange={(e)=>{
                            setDataInternship({...dataInternship, file: e.target.files[0]})
                          }}/>
                        </div>
                      </div>
                      <div className="mt-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" for="">
                            Deskripsi
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <textarea
                            value={dataInternship.description}
                            onChange={handleChange}
                            name="description"
                            id=""
                            className="w-full rounded-md bg-soft-gray p-5"
                            rows="10"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="px-8 text-left text-sm text-red-500">
                    {error.map((err, index) => (
                      <p key={index}>{err}</p>
                    ))}
                  </section>
                  <div className="mt-4 flex justify-end gap-4 px-8">
                    <button
                      onClick={closeModal}
                      className="rounded-md bg-[#F5F8FA] px-4 py-2 text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white"
                    >
                      Edit
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

function InputFormProfile({ data, label, handleChange, ...inputProps }) {
  return (
    <div
      className={`items-center  ${
        data.is_current == true && inputProps.name == 'end_date'
          ? 'hidden'
          : 'lg:flex'
      }`}
    >
      <div className="w-5/12">
        <label className="text-xs lg:text-base" for="">
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <input
          value={data[inputProps.name]}
          {...inputProps}
          className="input-form my-2 lg:my-5 lg:py-3"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
