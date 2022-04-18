import React from 'react'

export default function LayoutRegister(props) {
    let numberPage = props.pageNumber;
    let stepActive = 'flex justify-start items-center rounded-md bg-orange px-5 py-2 text-white border-2 border-orange'
    let stepInactive = 'flex justify-start items-center rounded-md bg-white px-5 py-2 text-orange border-2 border-orange'
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
      title: 'PERSONAL DETAIL',
      description: 'Add Your Personal Details',
    },
    {
      number: 4,
      title: 'SKILL AND PASSION',
      description: 'Add Your Skills and Passion',
    },
    {
      number: 5,
      title: 'COMPLETED',
      description: 'Registration Complete',
    },
  ];
  return (
    <main className="lg:flex min-h-screen">
      <section className="bg-pale-orange lg:w-5/12 w-full">
        <img className="w-44 m-auto py-5" src="/logo.png" alt="" />
        <div className="flex flex-col items-center">
          <h3 className='text-'>Create an Account</h3>
          <hr className="border-t-2 border-orange w-8" />

          <div className='flex gap-4 lg:block'>
            {steps.map((step) => (
              <div key={step.number} className="flex my-8">
                <div className={`${step.number === numberPage ? stepActive : stepInactive}`}>
                  {step.number < numberPage ? '✔' : step.number}
                </div>
                <div className="text-left ml-5 hidden lg:block">
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="lg:w-7/12">
          {props.children}
      </section>
    </main>
  );
}
