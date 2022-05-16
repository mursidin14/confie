import React, { useEffect } from 'react';
import AsideRegister from 'components/Aside/AsideRegister';
export default function LayoutRegister({pageNumber, data, children}) {
  useEffect(() => {
    document.title = "Register";
  }, [])
return (
    <main className="min-h-screen lg:flex">
      <AsideRegister
        numberPage={pageNumber}
        type_account={data.role}
      />
      <section className="lg:w-7/12">{children}</section>
    </main>
  );
}


