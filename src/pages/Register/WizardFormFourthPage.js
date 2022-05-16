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
        <div className="m-auto mb-5 w-full lg:mb-0 lg:w-8/12">
          <h2 className="my-6 text-2xl font-semibold">
            Add Your {data.role === 'personal' ? 'Skill And Passion' : 'Business Detail'}
          </h2>
            <label className="label">
            {data.role === 'personal' ? 'About Me:' : 'About the Company:'}
            </label>
            <textarea
              value={data.about}
              className="h-[150px] w-full bg-[#F5F8FA] p-5 lg:h-[200px] box-border"
              type="text"
              name="about"
              onChange={handleChange}
            />
            <label className="label">
            {data.role === 'personal' ? 'My Skill:' : 'Business Field:'}
            </label>
            
            <InputTag data={data} onChange={onChange}></InputTag>
            
            <div className="mt-3 flex flex-col justify-between gap-3 lg:flex-row">
              <button type='button' onClick={props.previousPage} className="secondary-btn lg:w-[150px] px-6 py-3 w-full">
                PREVIOUS
              </button>
              <button
                type="submit"
                onClick={props.onSubmit}
                className="primary-btn lg:w-[150px] px-6 py-3 w-full"
              >
                CONTINUE
              </button>
            </div>
        </div>
      </div>
    </LayoutRegister>
  );
}
