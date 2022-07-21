import React, { useState } from 'react';
import Header from 'components/Layout/Header';
import BasicCard from 'components/Widgets/BasicCard';
import BasicTab from 'components/Widgets/BasicTab';
import GalleryCompany from 'components/ProfileBusiness/GalleryCompany';
export default function CompanyDetail() {
  const Background = 'https://source.unsplash.com/1000x600/?coding';
  const [data, setData] = useState({
    email_verified_at: null,
    full_name: 'Annas Casmawan Ahmad',
    email: 'annas@gmail.com',
    gender: 'L',
  });
  return (
    <main>
      {/* <Header data={data} PageName={'Profile Perusahaan'} /> */}
      <section
        className="relative h-[500px] bg-cover bg-no-repeat text-left text-white"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="bg-banner absolute bottom-0 w-full p-8">
          <p className="my-2 text-3xl font-bold ">
            PT. UPANA PELOPOR APLIKASI ADIKARYA
          </p>
          <p className="text-xl">Makassar</p>
        </div>
      </section>
      <div className="mx-3 py-5 md:my-4 lg:mx-7 ">
        <BasicCard>
          <div className="gap-16 p-5 md:flex md:divide-x-2">
            <div className="flex items-center justify-center md:w-3/12">
              <img className="md:w-52 " src="/upana_logo.png" alt="" />
            </div>
            <div className="gap-10 text-left md:flex md:w-11/12 md:pl-10">
              <section className="mt-4 space-y-4 md:mt-0 md:w-[400px]">
                <div>
                  <p className="text-lg font-semibold">Kota :</p>
                  <p className="text-sm">Makassar</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Alamat :</p>
                  <p className="text-sm">
                    Ruko I Walk J/10 Ciputra Citraland Celebes, Jl. Tun Abdul
                    Razak, Tombolo, Kec. Somba Opu, Kabupaten Gowa, Sulawesi
                    Selatan 92114
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Tahun Berapa :</p>
                  <p className="text-sm">Tahun 2017</p>
                </div>
              </section>
              <section className="mt-4 space-y-4 md:mt-0">
                <div>
                  <p className="text-lg font-semibold">E-mail :</p>
                  <p className="text-sm">upanastudio@gmail.com</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Contact Person :</p>
                  <p className="text-sm">085-145-322-130</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Website :</p>
                  <p className="text-sm">upanastudio.com</p>
                </div>
              </section>
            </div>
          </div>
        </BasicCard>
        <BasicCard>
          <div className="px-5">
            <BasicTab></BasicTab>
          </div>
        </BasicCard>
        <BasicCard>
          <div className="flex items-center justify-between px-8">
            <h3 className="text-base font-semibold">Gallery Company</h3>
          </div>
          <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        </BasicCard>
      </div>
    </main>
  );
}
