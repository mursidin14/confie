import React from 'react';

export default function TestAPI() {
  let dataAccount = {
    role: 'personal',
  };
  async function register() {
    const res = await fetch(
      'https://confie.upanastudio.com/backend/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(dataAccount),
      }
    );
    console.log(res);
    

    

  }

  return (
    <main>
      <p>Test API</p>
      <button
        onClick={register}
        className="primary-btn mx-auto mt-10 w-fit px-5 py-2"
      >
        Login
      </button>
    </main>
  );
}
