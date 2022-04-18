import React, {useState} from 'react'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
import WizardFormFourthPage from './WizardFormFourthPage'
import WizardComplete from './WizardComplete'
export default function Register() {
  const [page, setPage] = useState(1)
  const [dataAccount, setDataAccount] = useState({
    type_account: '',
  })
  function nextPage() {
    setPage(page + 1)
  }
  function previousPage() {
    setPage(page - 1)
    
  }
  return (
    
    <>
      {page === 1 && <WizardFormFirstPage onSubmit={nextPage} onChange={setDataAccount} data={dataAccount}/>}
      {page === 2 && <WizardFormSecondPage previousPage={previousPage} onSubmit={nextPage} onChange={setDataAccount} data={dataAccount}/>}
      {page === 3 && <WizardFormThirdPage previousPage={previousPage} onSubmit={nextPage}/>}
      {page === 4 && <WizardFormFourthPage previousPage={previousPage} onSubmit={nextPage}/>}
      {page === 5 && <WizardComplete previousPage={previousPage} onSubmit={nextPage}/>}
    </>
  )
}
