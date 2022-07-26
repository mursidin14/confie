import React, { useState } from 'react';
import Header from 'components/Layout/Header';
import BasicCard from 'components/Widgets/BasicCard';
import BasicTab from 'components/Widgets/BasicTab';
import GalleryCompany from 'components/ProfileBusiness/GalleryCompany';
import { useParams } from 'react-router-dom';
import ProfileService from 'services/Profile/ProfileService';
import { getYear, makeCapital } from 'utils/utils';
export default function CompanyDetail() {
  const { id } = useParams();
  const Background = 'https://source.unsplash.com/1000x600/?coding';
  const [data, setData] = useState({
    email_verified_at: null,
    full_name: 'Annas Casmawan Ahmad',
    email: 'annas@gmail.com',
    gender: 'L',
  });
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    const getDataCompany = async () => {
      const response = await ProfileService.getOnlineProfileData(id);
      setData(response.data.data);
      setLoading(false);
    };
    getDataCompany();
  }, []);
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <main>
          {/* <Header data={data} PageName={'Profile Perusahaan'} /> */}
          <section
            className="relative h-[500px] bg-cover bg-no-repeat text-left text-white"
            style={{
              backgroundImage: data.businessData[0]?.url_photo_banner
                ? `url(${process.env.REACT_APP_API_URL}/${data.businessData[0]?.url_photo_banner})`
                : `url('/banner.png')`,
            }}
          >
            <div className="bg-banner absolute bottom-0 w-full p-8">
              <p className="my-2 text-3xl font-bold ">
                {data.full_name.toUpperCase()}
              </p>
              <p className="text-xl">{makeCapital(data.province_name)}</p>
            </div>
          </section>
          <div className="mx-3 py-5 md:my-4 lg:mx-7 ">
            <BasicCard>
              <div className="gap-16 p-5 md:flex md:divide-x-2">
                <div className="flex items-center justify-center md:w-3/12">
                  <img
                    className="md:w-52 "
                    src={
                      data.url_photo_profile
                        ? `${process.env.REACT_APP_API_URL}/${data.url_photo_profile}`
                        : '/company_default.png'
                    }
                    alt=""
                  />
                </div>
                <div className="gap-10 text-left md:flex md:w-11/12 md:pl-10">
                  <section className="mt-4 space-y-4 md:mt-0 md:w-[400px]">
                    <div>
                      <p className="text-lg font-semibold">Kota :</p>
                      <p className="text-sm">
                        {makeCapital(data.province_name)}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Alamat :</p>
                      <p className="text-sm">
                        {`${data.address} ${makeCapital(
                          data.city_name,
                        )}, ${makeCapital(data.province_name)}`}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Tahun Berdiri :</p>
                      <p className="text-sm">
                        Tahun {getYear(data.date_of_birth)}
                      </p>
                    </div>
                  </section>
                  <section className="mt-4 space-y-4 md:mt-0">
                    <div>
                      <p className="text-lg font-semibold">E-mail :</p>
                      <p className="text-sm">{data.email}</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Contact Person :</p>
                      <p className="text-sm">{data.phone_number}</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Website :</p>
                      <p className="text-sm">
                        {data?.businessData[0]?.link_website === null
                          ? '-'
                          : data?.businessData[0]?.link_website}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </BasicCard>
            <BasicCard>
              <div className="px-5">
                <BasicTab data={data}></BasicTab>
              </div>
            </BasicCard>
            <BasicCard>
              <div className="flex items-center justify-between px-8">
                <h3 className="text-base font-semibold">Gallery Company</h3>
              </div>
              <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
              <div className='grid grid-cols-3 gap-5'>

              {data.galleries.map((item, index) => (
                <>
                  <img
                    className=""
                    src={`${process.env.REACT_APP_API_URL}/${item.url}`}
                    alt=""
                  />
                </>
              ))}
              </div>
            </BasicCard>
          </div>
        </main>
      )}
    </>
  );
}
