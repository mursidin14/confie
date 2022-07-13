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
      <img
        className="mx-auto mb-10 w-[200px] sm:w-[240px]"
        src="/logo.png"
        alt=""
      />
      {loading ? null : (
        <>
          {' '}
          <section className="flex w-full flex-col items-center justify-center">
            <div className=" flex w-full max-w-2xl flex-col items-center justify-center rounded-md bg-white px-4 py-8 shadow-lg lg:static">
              {true ? (
                <>
                  <img src="/email_approve.png" alt="" />
                  <h4 className="mt-5 text-lg font-semibold text-orange sm:mb-1 sm:text-3xl">
                    Congratulations!
                  </h4>
                  <p className="text-sm text-gray-400 sm:text-base">
                    Email Verifed!!
                  </p>
                </>
              ) : (
                <>
                  <img src="/email_reject.png" alt="" />
                  <h4 className="mt-5 text-lg font-semibold text-orange sm:mb-1 sm:text-3xl">
                    Sorry, something goes wrong!
                  </h4>
                  <p className="text-sm text-gray-400 sm:text-base">
                    Your Email Verification Failed!!
                  </p>
                </>
              )}
              <a
                className="secondary-btn mt-4 w-fit px-4 py-3 text-sm font-semibold"
                href="/"
              >
                Back to login
              </a>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
