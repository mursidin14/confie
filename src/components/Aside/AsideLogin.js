import React from 'react';
export default function AsideLogin({}) {

  return (
    <section className="gradient-login text-white lg:w-7/12 hidden lg:flex flex-col justify-center">
      <div className="text-left relative left-10 bottom-12">
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
