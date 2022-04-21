import React from 'react';
import LayoutRegister from './LayoutRegister';
import InputTag from 'components/InputTag';

export default function WizardFormFourthPage(props) {
  let { data, onChange } = props;
  function handleChange(e) {
    onChange({
      ...data,
      [e.target.name]: e.target.value})
  }
  return (
    <LayoutRegister data={data} pageNumber={4}>
      <div className="mt-10 flex px-7 ">
        <div className="m-auto mb-5 lg:mb-0 lg:w-8/12">
          <h2 className="my-6 text-2xl font-semibold">
            Add Your {data.type_account === 'personal' ? 'Skill And Passion' : 'Business Detail'}
          </h2>
            <label for="" className="label">
            {data.type_account === 'personal' ? 'About Me:' : 'About the Company:'}
            </label>
            <textarea
              className="h-[150px] w-full bg-[#F5F8FA] p-5 lg:h-[200px]"
              type="text"
              name="about_me"
              onChange={handleChange}
            />
            <label for="" className="label">
            {data.type_account === 'personal' ? 'My Skill:' : 'Business Field:'}

            </label>
            
            <InputTag data={data} onChange={onChange}></InputTag>
            
            <div className="mt-3 flex flex-col justify-between gap-3 lg:flex-row">
            <button type='button' onClick={props.previousPage} className="secondary-btn lg:w-[150px] px-6 w-full">
                PREVIOUS
              </button>
              <button
                type='button'
                onClick={props.onSubmit}
                className="primary-btn lg:w-[150px] px-6 w-full"
              >
                SUBMIT
              </button>
            </div>
        </div>
      </div>
    </LayoutRegister>
  );
}
