import React from 'react';
export default function AsideLogin() {

  return (
    <section className="gradient-login text-white lg:w-7/12 hidden lg:flex flex-col justify-center">
      <div className="text-left relative pl-10 bottom-12">
      <img className="w-60 mb-7" src="/logo-login.png" alt="" />
        <h1 className="block text-sm sm:text-[2.5rem] leading-[3.2rem] tracking-[1.5px]">
          Menemukan Pekerjaan Impian Jadi Lebih Mudah!
        </h1>
        <p className="sm:mt-[1.2rem] lg:w-8/12 text-[1.2rem] leading-[1.8rem] tracking-[0.3px] sm:text-base">
        Kembangkan potensi terbaikmu dan bergabung bersama kami di platform
pilihan pertama yang akan membantu kamu membangun karir impianmu!
        </p>
      </div>
    </section>
  );
}
