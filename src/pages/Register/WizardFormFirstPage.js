import React, {useState} from 'react';
import LayoutRegister from './LayoutRegister';
export default function WizardFormFirstPage(props) {
    const [typeAccount, setTypeAccount] = useState('personal')
    const {data, onChange} = props
    const active_element = 'bg-[#F1FAFF] border-2 border-[#009EF7] flex justify-center items-center gap-5 px-5 py-6 rounded-md'
    const inactive_element = 'bg-white border-2 border-[#E4E6EF] flex justify-center items-center gap-5 px-5 py-6 rounded-md'
    function handleChange(e) {
        onChange({
            ...data,
            [e.target.name]: e.target.value
        })
        setTypeAccount(e.target.value)
    }
    function handleContinue() {
        props.onSubmit()
    }
    
  return (
    <LayoutRegister data={data} pageNumber={1}>
      <div className="flex justify-center lg:items-center lg:min-h-screen lg:w-[700px] m-auto px-7 lg:mt-0 mt-4">
        <div>
          <h2>Choose Account Type</h2>
          <form action="">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex ">
                <input
                  checked='checked'
                  className="hidden peer"
                  type="radio"
                  name="role"
                  id="personal"
                  value="personal"
                  onChange={handleChange}
                />
                <label
                  className={`${typeAccount === 'personal' ? active_element : inactive_element}`}
                  
                  htmlFor="personal"
                >
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5 22.75H29.25V16.25H32.5C33.475 16.25 34.125 16.9 34.125 17.875V21.125C34.125 22.1 33.475 22.75 32.5 22.75ZM34.125 30.875V27.625C34.125 26.65 33.475 26 32.5 26H29.25V32.5H32.5C33.475 32.5 34.125 31.85 34.125 30.875ZM34.125 11.375V8.125C34.125 7.15 33.475 6.5 32.5 6.5H29.25V13H32.5C33.475 13 34.125 12.35 34.125 11.375Z"
                      fill="black"
                    />
                    <path
                      opacity="0.3"
                      d="M27.625 35.75H4.875C3.9 35.75 3.25 35.1 3.25 34.125V4.875C3.25 3.9 3.9 3.25 4.875 3.25H27.625C28.6 3.25 29.25 3.9 29.25 4.875V34.125C29.25 35.1 28.6 35.75 27.625 35.75ZM16.25 11.375C14.4625 11.375 13 12.8375 13 14.625C13 16.4125 14.4625 17.875 16.25 17.875C18.0375 17.875 19.5 16.4125 19.5 14.625C19.5 12.8375 18.0375 11.375 16.25 11.375ZM21.6125 26C22.75 26 23.5625 24.8625 23.2375 23.8875C22.2625 21.45 19.5 19.5 16.4125 19.5C13.1625 19.5 10.5625 21.2875 9.58748 23.8875C9.09998 24.8625 10.075 26 12.025 26H21.6125Z"
                      fill="black"
                    />
                  </svg>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Personal Account</h3>
                    <p className="text-gray-400">Complete your profile and start develop yourself</p>
                  </div>
                </label>
              </div>
              <div className="flex">
                <input
                  className="hidden"
                  type="radio"
                  name="role"
                  id="business"
                  value="business"
                  onChange={handleChange}

                />
                <label
                  className={`${typeAccount === 'business' ? active_element : inactive_element}`}
                  htmlFor="business"
                >
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M32.5 24.375H6.5C4.7125 24.375 3.25 22.9125 3.25 21.125V11.375C3.25 10.4 3.9 9.75 4.875 9.75H34.125C35.1 9.75 35.75 10.4 35.75 11.375V21.125C35.75 22.9125 34.2875 24.375 32.5 24.375ZM21.125 19.5H17.875C17.0625 19.5 16.25 20.15 16.25 21.125V26C16.25 26.8125 16.9 27.625 17.875 27.625H21.125C22.1 27.625 22.75 26.975 22.75 26V21.125C22.75 20.15 22.1 19.5 21.125 19.5Z"
                      fill="black"
                    />
                    <path
                      d="M22.75 9.75V8.125H16.25V9.75H13V8.125C13 6.3375 14.4625 4.875 16.25 4.875H22.75C24.5375 4.875 26 6.3375 26 8.125V9.75H22.75ZM32.5 24.375H22.75V26C22.75 26.975 21.9375 27.625 21.125 27.625H17.875C17.0625 27.625 16.25 26.975 16.25 26V24.375H6.5C5.85 24.375 5.3625 24.2125 4.875 23.8875V29.25C4.875 31.0375 6.3375 32.5 8.125 32.5H30.875C32.6625 32.5 34.125 31.0375 34.125 29.25V23.8875C33.6375 24.2125 33.15 24.375 32.5 24.375Z"
                      fill="black"
                    />
                  </svg>

                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Business</h3>
                    <p className="text-gray-400">Complete your profile and start develop yourself</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button onClick={handleContinue} type="submit" className="primary-btn my-10 lg:w-[150px] px-6 py-3 w-full">
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutRegister>
  );
}
