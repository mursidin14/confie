import React from 'react';

export default function AsideLogin({}) {
  return (
    <section className="bg-pale-orange px-10 py-10 sm:px-14 sm:py-10 lg:w-7/12">
      <img className="m-auto w-60 lg:m-0" src="/logo.png" alt="" />
      <div className="mt-10 text-left sm:mt-28 sm:ml-9">
        <h1 className="hidden lg:block">
          Menemukan Pekerjaan Impian Jadi Lebih Mudah!
        </h1>
        <p className="mt-3 hidden lg:block lg:w-10/12">
        Kembangkan potensi terbaikmu dan bergabung bersama kami di platform
pilihan pertama yang akan membantu kamu membangun karir impianmu!
        </p>
      </div>
    </section>
  );
}
