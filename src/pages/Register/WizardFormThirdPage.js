import React from 'react';
import LayoutRegister from './LayoutRegister';
import InputField from 'components/InputField';

export default function WizardFormThirdPage(props) {
  let inputs = [
    {
      label: 'Date of birth',
      type: 'date',
    },
    {
      label: 'Country',
      type: 'text',
    },
    {
      label: 'Province',
      type: 'text',
    },
    {
      label: 'City',
      type: 'text',
    },
  ];
  return (
    <LayoutRegister pageNumber={3}>
      <div className="mt-10 flex px-7 ">
        <div className="m-auto mb-5 lg:mb-0 lg:w-8/12">
          <h2>
            Set Up Your Account Setting
          </h2>
          <form action="">
            <p className="label">Gender</p>
            <div className="my-5 flex items-center">
              <input
                className="mr-2"
                type="radio"
                id="male"
                name="gender"
                value="male"
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
                value="female"
              />
              <label
                className="mr-5 text-sm font-semibold text-black"
                for="female"
              >
                Female
              </label>
            </div>
            {inputs.map((input) => (
              <InputField
                key={input.label}
                label={input.label}
                type={input.type}
              />
            ))}
            <div className="flex flex-col justify-between gap-3 lg:flex-row">
              <button onClick={props.previousPage} className="secondary-btn ">
                PREVIOUS
              </button>
              <button
                type="submit"
                onClick={props.onSubmit}
                className="primary-btn"
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
