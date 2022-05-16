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
        data.role === 'personal'
          ? 'Date of Birth'
          : 'Company Founding Date'
      }`,
      type: 'date',
      name: 'date_of_birth',
      required: true
    },
    {
      label: 'Country',
      type: 'text',
      name: 'country',
      required: true
    },
    {
      label: 'Province',
      type: 'text',
      name: 'province',
      required: true
    },
    {
      label: 'City',
      type: 'text',
      name: 'city',
      required: true
    },
  ];
  function generateValidation() {
    let validation = data?.date_of_birth && data?.date_of_birth !== ''
    inputs.forEach((input) => {
      if (input.required) {
        validation = validation && data[input.name] && data[input.name] !== ''
    }})
    return validation ;
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(generateValidation()){
      props.onSubmit()
    }
    
  }
  return (
    <LayoutRegister data={data} pageNumber={3}>
      <div className="mt-10 flex px-7 ">
        <div className="m-auto mb-5 w-full lg:mb-0 lg:w-8/12">
          <h2>Set Up Your Account Setting</h2>
          <form action="">
            {data.role === 'personal' && (
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
                    htmlFor="male"
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
                    htmlFor="female"
                  >
                    Female
                  </label>
                </div>
              </div>
            )}

            {data.role !== 'personal' && (
              <div>
                <label className="label" htmlFor="">
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
                {...input}
                data={data}
                onChange={onChange}
              />
            ))}
            <div className="mt-3 flex flex-col justify-between gap-3 lg:flex-row">
              <button type='button' onClick={props.previousPage} className="secondary-btn lg:w-[150px] px-6 py-3 w-full">
                PREVIOUS
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="primary-btn lg:w-[150px] px-6 py-3 w-full"
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
