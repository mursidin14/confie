import React, { useState } from 'react';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import WizardFormFourthPage from './WizardFormFourthPage';
import WizardComplete from './WizardComplete';
export default function Register() {
  const [page, setPage] = useState(1);
  const [dataAccount, setDataAccount] = useState({
    "role": "personal",
    "gender": "L",
  });
  // FUNCTION FOR REQUEST REGISTER 
  async function sendRegistration(){
      let transform_date = dataAccount['date_of_birth'].split('-').reverse().join("");
      dataAccount['date_of_birth'] = parseInt(transform_date);
      try{
        const res = await fetch(
          'https://confie.upanastudio.com/backend/api/register',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(dataAccount),
          }
        );
        const data = await res.json();
        console.log(data)
      }catch(err){
        console.log(err)
      }
  }


  function nextPage() {
    if (page === 4){
    }
    setPage(page + 1);
  }
  function previousPage(e) {
    console.log(e);
    setPage(page - 1);
  }
  return (
    <>
      {page === 1 && (
        <WizardFormFirstPage
          onSubmit={nextPage}
          onChange={setDataAccount}
          data={dataAccount}
        />
      )}
      {page === 2 && (
        <WizardFormSecondPage
          previousPage={previousPage}
          onSubmit={nextPage}
          onChange={setDataAccount}
          data={dataAccount}
        />
      )}
      {page === 3 && (
        <WizardFormThirdPage
          previousPage={previousPage}
          onSubmit={nextPage}
          onChange={setDataAccount}
          data={dataAccount}
        />
      )}
      {page === 4 && (
        <WizardFormFourthPage
          previousPage={previousPage}
          onSubmit={nextPage}
          onChange={setDataAccount}
          data={dataAccount}
        />
      )}
      {page === 5 && (
        <WizardComplete
          previousPage={previousPage}
          onSubmit={nextPage}
          data={dataAccount}
        />
      )}
    </>
  );
}
