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
        const response = await axios({
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-pale-orange">
      <img className="mb-10 w-[240px]" src="/logo.png" alt="" />
      {loading ? null : (
        <>
          {' '}
          <div className="relative bottom-20 z-10 mt-20 rounded-md bg-white px-4 py-8 lg:static">
            <h3 className="mb-10 text-lg font-semibold lg:text-2xl">
              {!error
                ? 'Congratulations! Your email is now verified, you can start using'
                : 'Email verification failed'}
            </h3>
            <a className="primary-btn py-2 px-3 " href="/">
              Back to login
            </a>
          </div>
        </>
      )}
    </main>
  )
}
