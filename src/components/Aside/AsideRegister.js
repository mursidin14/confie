import React from 'react'

export default function AsideRegister({numberPage, type_account}) {
    let stepActive =
      'flex justify-start items-center rounded-md bg-orange px-5 py-2 text-white border-2 border-orange';
    let stepInactive =
      'flex justify-start items-center rounded-md bg-white px-5 py-2 text-orange border-2 border-orange';
    const steps = [
      {
        number: 1,
        title: 'ACCOUNT TYPE',
        description: 'Choose your account type',
      },
      {
        number: 2,
        title: 'ACCOUNT SETTING',
        description: 'Set Up Your Account Setting',
      },
      {
        number: 3,
        title: `${
          type_account === 'personal' ? 'PERSONAL DETAIL' : 'COMPANY DETAIL'
        }`,
        description: 'Add Your Personal Details',
      },
      {
        number: 4,
        title: `${
          type_account === 'personal' ? 'SKILL AND PASSION' : 'BUSINESS DETAIL'
        }`,
        description: 'Add Your Skills and Passion',
      },
      {
        number: 5,
        title: 'COMPLETED',
        description: 'Registration Complete',
      },
    ];
    return (
      <section className="bg-pale-orange lg:w-5/12">
        <img className="m-auto w-44 py-5" src="/logo.png" alt="" />
        <div className="flex flex-col items-center">
          <h3 className="text-">Create an Account</h3>
          <hr className="w-8 border-t-2 border-orange" />
  
          <div className="flex gap-2 lg:block">
            {steps.map((step) => (
              <div key={step.number} className="my-8 flex">
                <div
                  className={`${
                    step.number === numberPage ? stepActive : stepInactive
                  }`}
                >
                  {step.number < numberPage ? '✔' : step.number}
                </div>
                <div className="ml-5 hidden text-left lg:block">
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
