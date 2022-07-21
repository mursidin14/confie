import React from 'react';
export default function AsideLogin() {
  return (
    <section className="gradient-login hidden flex-col justify-center text-white lg:flex lg:w-7/12">
      <div className="relative bottom-12 pl-10 text-left">
        <img className="mb-7 w-60" src="/logo-login.png" alt="" />
        <h1 className="block text-sm leading-[3.2rem] tracking-[1.5px] sm:text-[2.5rem]">
          Menemukan Pekerjaan Impian <br /> Jadi Lebih Mudah!
        </h1>
        <p className="text-[1.2rem] leading-[1.8rem] tracking-[0.3px] sm:mt-[1.2rem] sm:text-base lg:w-8/12">
          Kembangkan potensi terbaikmu dan bergabung bersama kami di platform
          pilihan pertama yang akan membantu kamu membangun karir impianmu!
        </p>
      </div>
    </section>
  );
}
