import React from 'react';
import AsideRegister from 'components/Aside/AsideRegister';
export default function LayoutRegister({pageNumber, data, children}) {
return (
    <main className="min-h-screen lg:flex">
      <AsideRegister
        numberPage={pageNumber}
        type_account={data.type_account}
      />
      <section className="lg:w-7/12">{children}</section>
    </main>
  );
}


