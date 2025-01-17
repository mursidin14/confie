import React from 'react';
import LayoutRegister from './LayoutRegister';
export default function WizardComplete({data}) {
  return (
    <LayoutRegister data={data} pageNumber={5}>
      <div className="mt-10 px-7">
        <div className="m-auto mb-5 lg:mb-0 lg:w-8/12">
          <div className='lg:text-left text-center'>
            <h2>Welcome to Confie.id</h2>
            <p className='lg:w-9/5 lg:m-0 m-auto '>
              Let’s start your journey with us.
              <br/>
              Check your email to directly verify your email or login to your account{' '}
              <a href="/" className="text-[#00A3FF]">
                {' '}
                click here
              </a>
            </p>
          </div>
          <img className='lg:w-[500px] w-full m-auto' src="/illustration.png" alt=""/>
        </div>
      </div>
    </LayoutRegister>
  );
}
