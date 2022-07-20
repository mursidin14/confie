import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutBusiness from 'components/Layout/LayoutBusiness';
import BasicCard from 'components/Widgets/BasicCard';
import TabJob from 'components/Widgets/TabJob';
import Pagination from 'components/Widgets/Pagination';
import AlertEmailNotVerifiedBusiness from 'components/Modal/AlertEmailNotVerifiedBusiness';
import { BusinessProvider } from 'context/business-context';
import UnderConstruction from 'pages/UnderConstruction';
export default function JobVacancy() {
  const { id } = useParams();
  return (
    // <BusinessProvider>
    //   <LayoutBusiness userId={id} PageName="Lowongan Kerja">
    //     <BasicCard>
    //       <section>
    //         <div className="flex items-center justify-between px-8">
    //           <h3 className="text-base font-semibold ">List Lowongan Kerja</h3>
    //           <div className="flex items-center justify-center">
    //             <a
    //               href={`/business/job/create`}
    //               className="rounded-md bg-[#FE9A00] px-5 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    //             >
    //               Buka Lowongan
    //             </a>
    //           </div>
    //         </div>
    //         <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
    //       </section>
    //       <section className="p-5">
    //         <TabJob></TabJob>
    //         <div className="mt-5 flex w-full justify-end pr-8">
    //           {/* <Pagination></Pagination> */}
    //         </div>
    //       </section>
    //       <AlertEmailNotVerifiedBusiness />
    //     </BasicCard>
    //   </LayoutBusiness>
    // </BusinessProvider>
    <UnderConstruction />
  );
}
