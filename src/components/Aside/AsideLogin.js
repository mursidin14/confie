import React from 'react';

export default function AsideLogin({}) {
  return (
    <section className="bg-pale-orange px-10 py-10 sm:px-14 sm:py-10 lg:w-7/12">
      <img className="m-auto w-60 lg:m-0" src="/logo.png" alt="" />
      <div className="mt-10 text-left sm:mt-28 sm:ml-9">
        <h1 className="block lg:w-[500px] text-sm sm:text-4xl">
          Menemukan Pekerjaan Impian Jadi Lebih Mudah!
        </h1>
        <p className="sm:mt-3 lg:w-10/12 text-sm sm:text-base">
        Kembangkan potensi terbaikmu dan bergabung bersama kami di platform
pilihan pertama yang akan membantu kamu membangun karir impianmu!
        </p>
      </div>
    </section>
  );
}
