import axios from 'axios'
import React from 'react'
export default function VerifyEmail() {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  React.useEffect(() => {
    const queryString = window.location.search
    const url = queryString.slice(5)
    async function VerifyEmail() {
      try {
        await axios({
          method: 'GET',
          url: `${url}`,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    VerifyEmail()
  }, [])

  return (
    <main className="min-h-screen bg-pale-orange p-10">
      <img className="mx-auto mb-10 sm:w-[240px] w-[200px]" src="/logo.png" alt="" />
      {loading ? null : (
        <>
          {' '}
          <section className="flex flex-col items-center justify-center w-full">
            <div className=" w-full shadow-lg max-w-2xl flex flex-col items-center justify-center rounded-md bg-white px-4 py-8 lg:static">
              {!error ? <>
                <img src="/email_approve.png" alt=""/>
                <h4 className='mt-5 sm:mb-1 font-semibold sm:text-3xl text-lg text-orange'>Congratulations!</h4>
                <p className='text-sm sm:text-base text-gray-400'>Email Verifed!!</p>
                <a className='secondary-btn text-sm font-semibold mt-4 w-fit px-4 py-3' href="/">Back to login</a>
              </> : <>
              <img src="/email_reject.png" alt=""/>
                <h4 className='mt-5 sm:mb-1 font-semibold sm:text-3xl text-lg text-orange'>Sorry, something goes wrong!</h4>
                <p className='text-sm sm:text-base text-gray-400'>Your Email Verification Failed!!</p></>}
                <a className='secondary-btn text-sm font-semibold mt-4 w-fit px-4 py-3' href="/">Back to login</a>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
