import React from 'react';
export default function AsideLogin({}) {

  return (
    <section className="gradient-login text-white px-10 py-10 sm:px-14 sm:py-10 lg:w-7/12 hidden lg:block">
      <div className="mt-10 text-left sm:mt-28 sm:ml-9">
      <img className="w-60 mb-7" src="/logo-login.png" alt="" />
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
