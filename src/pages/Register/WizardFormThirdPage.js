import React from 'react';
import LayoutRegister from './LayoutRegister';
import InputField from 'components/InputField';

export default function WizardFormThirdPage(props) {
  let { data, onChange } = props;
  function handleChange(e) {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  let inputs = [
    {
      label: `${
        data.type_account === 'personal'
          ? 'Date of Birth'
          : 'Company Founding Date'
      }`,
      type: 'date',
      name: 'date',
    },
    {
      label: 'Country',
      type: 'text',
      name: 'country',
    },
    {
      label: 'Province',
      type: 'text',
      name: 'province',
    },
    {
      label: 'City',
      type: 'text',
      name: 'city',
    },
  ];
  return (
    <LayoutRegister data={data} pageNumber={3}>
      <div className="mt-10 flex px-7 ">
        <div className="m-auto mb-5 w-full lg:mb-0 lg:w-8/12">
          <h2>Set Up Your Account Setting</h2>
          <form action="">
            {data.type_account === 'personal' && (
              <div>
                <p className="label">Gender</p>

                <div className="my-5 flex items-center">
                  <input
                    className="mr-2"
                    type="radio"
                    id="male"
                    name="gender"
                    value="L"
                    checked
                    onChange={handleChange}
                  />
                  <label
                    className="mr-5 text-sm font-semibold text-black"
                    for="male"
                  >
                    Male
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    id="female"
                    name="gender"
                    value="P"
                    onChange={handleChange}
                  />
                  <label
                    className="mr-5 text-sm font-semibold text-black"
                    for="female"
                  >
                    Female
                  </label>
                </div>
              </div>
            )}

            {data.type_account !== 'personal' && (
              <div>
                <label className="label" for="">
                  Company Address
                </label>
                <input
                  onChange={handleChange}
                  className="input-form peer mb-3"
                  name="company_address"
                />
              </div>
            )}
            {inputs.map((input) => (
              <InputField
                key={input.label}
                label={input.label}
                type={input.type}
                name={input.name}
                data={data}
                onChange={onChange}
              />
            ))}
            <div className="mt-3 flex flex-col justify-between gap-3 lg:flex-row">
              <button
                type="button"
                onClick={props.previousPage}
                className="secondary-btn w-full px-6 lg:w-[150px]"
              >
                PREVIOUS
              </button>
              <button
                type="button"
                onClick={props.onSubmit}
                className="primary-btn w-full px-6 lg:w-[150px]"
              >
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutRegister>
  );
}
