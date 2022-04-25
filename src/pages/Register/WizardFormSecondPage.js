import React from 'react';
import LayoutRegister from './LayoutRegister';
import InputField from 'components/InputField';
export default function WizardFormSecondPage(props) {
  let { data, onChange } = props;
  let inputs = [
    {
      label:  `${
        data.role === 'personal' ? 'Full Name' : 'Company Name'
      }`,
      type: 'text',
      name: `${
        data.role === 'personal' ? 'full_name' : 'company_name'
      }`,
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      name: "phone_number",
      label: "Phone Number",
      type: "number",
      errorMessage: "It should be a valid phone number!",
      required: true,

    },
    {
      label: "Password",
      type: "password",
      name: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
      optional :  "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    },
    {
      name: "password_confirmation",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: data.password,
      required: true,
    },
  ];

  return (
    <LayoutRegister data={data} pageNumber={2}>
      <div className="mt-10 flex px-7 ">
        <div className="m-auto mb-5 lg:mb-0 lg:w-8/12">
          <h2 className="my-6 text-2xl font-semibold">
            Set Up Your Account Setting
          </h2>
          <form action="">
            {inputs.map((input) => (
              <InputField
                key={input.label}
                {...input}
                data={data}
                onChange={onChange}
              />
            ))}
            <div className="mt-3 flex flex-col justify-between gap-3 lg:flex-row">
              <button type='button' onClick={props.previousPage} className="secondary-btn lg:w-[150px] px-6 w-full">
                PREVIOUS
              </button>
              <button
                type="submit"
                onClick={props.onSubmit}
                className="primary-btn lg:w-[150px] px-6 w-full"
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
