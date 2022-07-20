import React from 'react';
import BasicCard from 'components/Widgets/BasicCard';
import ModalTeamMember from 'components/Modal/ModalTeamMember';
import Pagination from 'components/Widgets/Pagination';
import { useBusinessContext } from 'context/business-context';
import { getDate } from 'utils/utils';
import { deleteTeamMember } from 'services/Business/TeamMember/TeamMember';
import SweetAlert from 'components/Widgets/SweetAlert';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import UpdateTeamMember from 'components/ModalUpdate/UpdateTeamMember';
export default function TeamMemberCard() {
  const { teamMember } = useBusinessContext();
  const [team, setTeam] = React.useState([]);
  const [isOpenAccept, setIsOpenAccept] = React.useState(false);
  React.useEffect(() => {
    if (teamMember?.length === 0) {
      return;
    }
    setTeam(teamMember);
  }, [teamMember]);
  const handleDelete = async (id) => {
    const response = await deleteTeamMember(id);
    if (response.status === 204) {
      setIsOpenAccept(true);
    }
  };
  return (
    <BasicCard>
      <section>
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">List Team Member</h3>
          <ModalTeamMember></ModalTeamMember>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      </section>
      {team.length === 0 && (
        <>
          <p className="text-xs italic text-gray-500">No data</p>
        </>
      )}
      {team.length > 0 && (
        <section className="my-2 overflow-y-auto">
          <Table items={team} handleDelete={handleDelete}></Table>
          <div className="mt-5 flex w-full justify-end pr-8">
            <Pagination></Pagination>
          </div>
        </section>
      )}
      <Transition appear show={isOpenAccept} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={() => {
            window.location.reload();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-center p-8">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M50 93.75C38.3968 93.75 27.2688 89.1406 19.0641 80.9359C10.8594 72.7312 6.25 61.6032 6.25 50C6.25 38.3968 10.8594 27.2688 19.0641 19.0641C27.2688 10.8594 38.3968 6.25 50 6.25C61.6032 6.25 72.7312 10.8594 80.9359 19.0641C89.1406 27.2688 93.75 38.3968 93.75 50C93.75 61.6032 89.1406 72.7312 80.9359 80.9359C72.7312 89.1406 61.6032 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100Z"
                          fill="#50CD89"
                        />
                        <path
                          d="M68.5624 31.0625C68.5179 31.1057 68.4761 31.1516 68.4374 31.2L46.7312 58.8563L33.6499 45.7688C32.7613 44.9408 31.586 44.49 30.3717 44.5115C29.1573 44.5329 27.9986 45.0248 27.1398 45.8837C26.281 46.7425 25.789 47.9011 25.7676 49.1155C25.7461 50.3299 26.1969 51.5052 27.0249 52.3938L43.5624 68.9375C44.0079 69.3822 44.5384 69.7327 45.1223 69.9679C45.7062 70.2031 46.3315 70.3183 46.9608 70.3067C47.5902 70.295 48.2108 70.1567 48.7855 69.9C49.3603 69.6433 49.8774 69.2735 50.3062 68.8125L75.2562 37.625C76.1057 36.7334 76.5702 35.5431 76.5492 34.3117C76.5283 33.0803 76.0235 31.9066 75.144 31.0444C74.2645 30.1822 73.0811 29.7007 71.8495 29.7041C70.6179 29.7075 69.4371 30.1955 68.5624 31.0625Z"
                          fill="#50CD89"
                        />
                      </svg>
                    </div>
                    <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                      Data berhasil dihapus!
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </BasicCard>
  );
}
function Table({ items, handleDelete, handleEdit }) {
  return (
    <table className="w-full min-w-[800px] table-fixed text-center text-xs sm:text-base">
      <thead className="bg-[#F5F8FA] ">
        <tr className="h-[60px] text-sm text-[#181C32]">
          <th className="w-[5%] pl-10 text-left">No.</th>
          <th className="w-[5%] text-left">Nama</th>
          <th className="w-[20%] text-left lg:w-[15%]">Email</th>
          <th className="w-[6%]">Jabatan</th>
          <th className="w-[10%]">Tanggal Assign</th>
          <th className="w-[10%]">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            className="mt-3 h-20 border-b-2 border-gray-300/50 text-sm text-[#7E8299] last:border-b-0"
            key={index}
          >
            <td className="w-[5%] pl-10 text-left">{index + 1}</td>
            <td className="w-[10%] text-left">{item.full_name}</td>
            <td className="text-left lg:w-[15%]">{item.email}</td>
            <td className="w-[6%] ">{item.current_job.position}</td>
            <td className="w-[16%] py-4 text-center lg:py-1">
              {getDate(item.current_job.assigned_at)}
            </td>
            <td className="w-[15%]">
              <div className="flex items-center justify-center">
                <SweetAlert item={item} handleDelete={handleDelete} />
                <a className='mr-1' href={`/${item.slug}`}>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4.225C0 1.8916 1.8916 0 4.225 0H29.775C32.1084 0 34 1.8916 34 4.225V29.775C34 32.1084 32.1084 34 29.775 34H4.225C1.8916 34 0 32.1084 0 29.775V4.225Z"
                      fill="#DDF9FF"
                    />
                    <path
                      d="M19.5 17C19.5 17.663 19.2366 18.2989 18.7678 18.7678C18.2989 19.2366 17.663 19.5 17 19.5C16.337 19.5 15.7011 19.2366 15.2322 18.7678C14.7634 18.2989 14.5 17.663 14.5 17C14.5 16.337 14.7634 15.7011 15.2322 15.2322C15.7011 14.7634 16.337 14.5 17 14.5C17.663 14.5 18.2989 14.7634 18.7678 15.2322C19.2366 15.7011 19.5 16.337 19.5 17V17Z"
                      fill="#00C1FE"
                    />
                    <path
                      d="M9 17C9 17 12 11.5 17 11.5C22 11.5 25 17 25 17C25 17 22 22.5 17 22.5C12 22.5 9 17 9 17ZM17 20.5C17.9283 20.5 18.8185 20.1313 19.4749 19.4749C20.1313 18.8185 20.5 17.9283 20.5 17C20.5 16.0717 20.1313 15.1815 19.4749 14.5251C18.8185 13.8687 17.9283 13.5 17 13.5C16.0717 13.5 15.1815 13.8687 14.5251 14.5251C13.8687 15.1815 13.5 16.0717 13.5 17C13.5 17.9283 13.8687 18.8185 14.5251 19.4749C15.1815 20.1313 16.0717 20.5 17 20.5V20.5Z"
                      fill="#00C1FE"
                    />
                  </svg>
                </a>
                <UpdateTeamMember dataItem={item} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
