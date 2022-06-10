import React, { useState } from 'react';
import Header from 'components/Layout/Header';
import BasicCard from 'components/Widgets/BasicCard';
import BasicTab from 'components/Widgets/BasicTab';
import GalleryCompany from 'components/ProfileBusiness/GalleryCompany';
export default function CompanyDetail() {
    const Background = "https://source.unsplash.com/1000x600/?coding"
    const [data, setData] = useState({
      email_verified_at: null,
      full_name: 'Annas Casmawan Ahmad',
      email: 'annas@gmail.com',
      gender: 'L',
    });
  return (
    <main>
      <Header data={data} PageName={'Profile Perusahaan'} />
      <section className="mt-5 text-left text-white h-[500px] relative bg-no-repeat bg-cover" style={{backgroundImage: `url(${Background})`}}>
        <div className='absolute bottom-0 w-full bg-banner p-8'>
            <p className="my-2 text-3xl font-bold ">
              PT. UPANA PELOPOR APLIKASI ADIKARYA
            </p>
            <p className='text-xl'>Makassar</p>
        </div>
      </section>
      <div className="md:my-4 mx-3 py-5 lg:mx-7 ">
        <BasicCard>
          <div className="md:flex p-5 md:divide-x-2 gap-16">
            <div className='flex justify-center items-center md:w-3/12'>
              <img className='md:w-52 ' src="/upana_logo.png" alt="" />
            </div>
            <div className="md:flex gap-10 text-left md:pl-10 md:w-11/12">
              <section className='md:w-[400px] space-y-4 md:mt-0 mt-4'>
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
              <section className='space-y-4 md:mt-0 mt-4'>
                <div>
                  <p className="text-lg font-semibold">E-mail :</p>
                  <p className="text-sm">upanastudio@gmail.com</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Contact Person :</p>
                  <p className="text-sm">
                  085-145-322-130
                  </p>
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
            <div className='px-5'>
                <BasicTab></BasicTab>

            </div>
        </BasicCard>
        <GalleryCompany></GalleryCompany>
      </div>
    </main>
  );
}
