import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {
  SearchCountryProfile,
  SearchRegionCityProfile,
  SearchRegionProfile,
} from 'components/SearchRegion';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';

export default function ModalProfile({ data_profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dataProfile, setDataProfile] = useState({
    full_name: data_profile.full_name,
    phone_number: data_profile.phone_number,
    country: data_profile.country,
    province: data_profile.province,
    province_name: data_profile.province_name,
    city: data_profile.city,
    city_name: data_profile.city_name,
    address: data_profile.address,
    zip_code: data_profile.zip_code,
    gender: data_profile.gender,
    date_of_birth: utils.getYearMonthDay(data_profile.date_of_birth),
  });
  const [city, setCity] = useState([]);
  const [error, setError] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const inputs = [
    {
      label: 'Full Name',
      type: 'text',
      name: 'full_name',
      required: true,
    },
    {
      name: 'phone_number',
      label: 'Phone Number',
      type: 'number',
      required: true,
    },
  ];
  const input2 = [
    {
      name: 'date_of_birth',
      type: 'date',
      label: 'Date of Birth',
      required: true,
    },
  ];
  const input3 = [
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      required: true,
    },
    {
      name: 'zip_code',
      type: 'text',
      label: 'ZipCode',
      required: true,
    },
  ];
  function handleOnChange(e) {
    const { name, value } = e.target;
    setDataProfile({ ...dataProfile, [name]: value });
  }
  async function handleClick() {
    if (dataProfile.city === undefined) {
      dataProfile.city = data_profile.city;
    }
    dataProfile['date_of_birth'] = utils.timeEpoch(
      dataProfile['date_of_birth']
    );
    const response = await ProfileService.updateProfileData(dataProfile);
    if (response.data.meta.status === 'error') {
      let errors = [];
      let error = response.data.data;
      for (let key in error) {
        errors.push(error[key][0]);
      }
      setError(errors);
      return;
    }
    const data_user = JSON.parse(localStorage.getItem('user'));
    data_user['full_name'] = dataProfile.full_name;
    localStorage.setItem('user', JSON.stringify(data_user));
    window.location.reload();
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
                    <h3 className="text-base font-semibold ">
                      Personal Infomation
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-2 lg:px-8">
                      {inputs.map((input, index) => (
                        <InputFormProfile
                          handleOnChange={handleOnChange}
                          data={dataProfile}
                          key={index}
                          {...input}
                        />
                      ))}
                      <div className=" my-1 items-center lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base">Gender</label>
                        </div>
                        <div className="flex items-center lg:w-7/12">
                          <input
                            className="mr-2"
                            type="radio"
                            id="male"
                            name="gender"
                            value="L"
                            checked={dataProfile.gender === 'L'}
                            onChange={handleOnChange}
                          />
                          <label className="mr-5 text-sm " htmlFor="male">
                            Laki-Laki
                          </label>
                          <input
                            className="mr-2"
                            type="radio"
                            id="female"
                            name="gender"
                            value="P"
                            checked={dataProfile.gender === 'P'}
                            onChange={handleOnChange}
                          />
                          <label className="mr-5 text-sm " htmlFor="female">
                            Perempuan
                          </label>
                        </div>
                      </div>
                      {input2.map((input, index) => (
                        <InputFormProfile
                          handleOnChange={handleOnChange}
                          data={dataProfile}
                          key={index}
                          {...input}
                        />
                      ))}
                      <div className="relative z-20">
                      <SearchCountryProfile data={dataProfile} onChange={setDataProfile}></SearchCountryProfile>
                      </div>
                      {dataProfile.country === 'indonesia' ? (
                        <>
                          <div className="relative z-10">
                            <SearchRegionProfile
                              data={dataProfile}
                              onChange={setDataProfile}
                              setCity={setCity}
                            ></SearchRegionProfile>
                          </div>
                          <SearchRegionCityProfile
                            data={dataProfile}
                            onChange={setDataProfile}
                            city={city}
                          ></SearchRegionCityProfile>
                        </>
                      ) : <>
                        {input3.map((input, index) => (
                        <InputFormProfile
                          handleOnChange={handleOnChange}
                          data={dataProfile}
                          key={index}
                          {...input}
                        />
                      ))}
                      </>}
                    </div>
                  </div>
                  <section className="px-8 text-left text-sm text-red-500">
                    {error.map((err, index) => (
                      <p key={index}>{err}</p>
                    ))}
                  </section>
                  <div className="mt-20 flex justify-end gap-4 px-8">
                    <button
                      onClick={closeModal}
                      className="rounded-md bg-[#F5F8FA] px-4 py-2 text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleClick}
                      className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white"
                    >
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

function InputFormProfile({ label, handleOnChange, data, ...inputProps }) {
  return (
    <div className=" items-center lg:flex">
      <div className="w-5/12">
        <label className="text-xs lg:text-base">{label}</label>
      </div>
      <div className="lg:w-7/12">
        <input
          value={data[inputProps.name]}
          onChange={handleOnChange}
          {...inputProps}
          className="input-form my-2 lg:my-5 lg:py-3 "
        />
      </div>
    </div>
  );
}
