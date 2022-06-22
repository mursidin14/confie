import { useState } from 'react';
import { Tab } from '@headlessui/react';
import BasicCard from 'components/Widgets/BasicCard';
import { useParams } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabJob() {
  const { id } = useParams();
  let items = [1,2,3]
  let [categories] = useState({
    ['Aktif']: {
      content: <FeedJob id={id} items={items} />,
    },
    ['Arsip']: {
      content: <FeedJob id={id} items={items} archive={true} />,
    },
  });
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex max-w-xs space-x-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 font-semibold leading-5',
                  selected
                    ? 'border-b-4 border-[#FE9A00]'
                    : 'border-b-4 border-white text-[#7E8299]'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames()}>
              <div>{posts.content}</div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

function FeedJob({archive, id, items}) {
  return (
    <>
      {items.map((item) => (
        <CardJobVacany key={item} detailjob={item} id={id} archive={archive} />
      ))}
    </>
  );
}

function CardJobVacany({archive, id, detailjob}) {
  return (
    <BasicCard>
      <div className="flex items-center justify-between px-6">
        <section className="md:flex items-center gap-4 space-y-2">
          <div className="rounded-md bg-[#F5F8FA] px-5 py-10 flex justify-center items-center">
            <img src="/upana_logo.png" alt="" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <a href={`/business/${id}/job/detail/${detailjob}`} className="md:text-xl text-base font-semibold hover:underline">Junior React Developer</a>
              <div
                className={`${
                  !archive ? 'bg-[#E8FFF3]' : 'bg-[#F5F8FA]'
                } rounded-md px-3 py-1 text-xs`}
              >
                <p className={`${!archive ? 'text-[#50CD89]' : 'text-[#7E8299]'}`}>
                  {!archive ? 'Aktif' : 'Arsip'}
                </p>
              </div>
            </div>
            <div className="mt-1 space-y-2 ">
              <div className="flex items-center gap-3">
                <svg
                  className="h-4 w-4"
                  width="9"
                  height="12"
                  viewBox="0 0 9 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.4997 5.64328C5.36878 5.64328 6.07331 5.00368 6.07331 4.2147C6.07331 3.42573 5.36878 2.78613 4.4997 2.78613C3.63062 2.78613 2.92609 3.42573 2.92609 4.2147C2.92609 5.00368 3.63062 5.64328 4.4997 5.64328Z"
                    stroke="#4B5783"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.64722 5.64286C6.46702 8.14286 4.5 11 4.5 11C4.5 11 2.53298 8.14286 1.35278 5.64286C0.172567 3.14286 2.13958 1 4.5 1C6.86042 1 8.82743 3.14286 7.64722 5.64286Z"
                    stroke="#4B5783"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Makassar</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="h-4 w-4"
                  width="5"
                  height="10"
                  viewBox="0 0 5 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.92975 6.08805C4.88337 5.92451 4.8271 5.78218 4.76101 5.66131C4.69496 5.54032 4.60037 5.4223 4.47703 5.30686C4.35385 5.19148 4.24304 5.09856 4.14478 5.02792C4.04658 4.95722 3.91168 4.87818 3.74017 4.79069C3.56881 4.70323 3.43303 4.63814 3.33308 4.59533C3.23301 4.55259 3.08824 4.49399 2.89888 4.41958C2.73098 4.35265 2.60598 4.30148 2.52373 4.26616C2.44158 4.2308 2.33355 4.18061 2.19957 4.11546C2.06565 4.05041 1.96561 3.99271 1.89951 3.94252C1.83342 3.89233 1.76289 3.83095 1.68785 3.75842C1.61281 3.68588 1.56012 3.60868 1.52973 3.52684C1.49942 3.44498 1.48422 3.35567 1.48422 3.25894C1.48422 3.00602 1.59135 2.79948 1.8057 2.63955C2.02006 2.47963 2.29696 2.39963 2.63637 2.39963C2.78634 2.39963 2.93923 2.42099 3.09453 2.46382C3.24982 2.50664 3.38292 2.55488 3.49367 2.60887C3.60452 2.66285 3.70898 2.72239 3.80725 2.78746C3.90551 2.85258 3.97514 2.90184 4.01627 2.93532C4.05735 2.96882 4.08338 2.99112 4.09399 3.0023C4.1405 3.0395 4.18861 3.0525 4.23863 3.04138C4.29219 3.03766 4.33332 3.00786 4.36196 2.95211L4.79609 2.13736C4.83894 2.06299 4.83008 1.99229 4.76931 1.92529C4.74783 1.90297 4.72114 1.87695 4.68877 1.84716C4.65671 1.81738 4.58702 1.76345 4.47975 1.68528C4.3726 1.60718 4.25918 1.53742 4.13958 1.47603C4.01985 1.41469 3.8644 1.35234 3.67326 1.28913C3.48222 1.22582 3.28479 1.18307 3.08111 1.16077V0.178571C3.08111 0.12652 3.06506 0.083715 3.033 0.0502133C3.00087 0.0167899 2.95976 0 2.90967 0H2.18619C2.13975 0 2.09957 0.0176499 2.06563 0.0530084C2.0317 0.0883669 2.01473 0.130195 2.01473 0.178571V1.18305C1.45383 1.29462 0.998339 1.54389 0.648236 1.9308C0.298171 2.31773 0.123072 2.76781 0.123072 3.28126C0.123072 3.43378 0.138313 3.57887 0.168682 3.71645C0.199013 3.85415 0.236551 3.97786 0.281222 4.08759C0.325856 4.1974 0.389296 4.30525 0.471449 4.41131C0.553602 4.51732 0.631325 4.60849 0.704544 4.68472C0.7778 4.76093 0.873373 4.84001 0.991225 4.92183C1.10915 5.00372 1.21007 5.06981 1.29405 5.12C1.37804 5.17004 1.48966 5.2279 1.62895 5.29285C1.76827 5.35799 1.87817 5.40723 1.95855 5.44079C2.03894 5.47423 2.14878 5.52079 2.28816 5.58019C2.48105 5.65832 2.62398 5.71879 2.71685 5.7616C2.8098 5.8044 2.92765 5.86392 3.07063 5.94019C3.21349 6.01638 3.31794 6.08615 3.38408 6.14943C3.45017 6.21269 3.50998 6.29082 3.56361 6.3838C3.61723 6.47678 3.64409 6.57537 3.64409 6.67959C3.64409 6.9735 3.53423 7.20039 3.31446 7.36023C3.09479 7.52026 2.84017 7.60024 2.55084 7.60024C2.41878 7.60024 2.28649 7.58544 2.15436 7.55569C1.68993 7.45884 1.25589 7.22632 0.852202 6.85804L0.841484 6.84688C0.809314 6.80607 0.766426 6.7893 0.712896 6.79678C0.655725 6.80421 0.614621 6.82655 0.589639 6.86383L0.0376724 7.61712C-0.0159326 7.69152 -0.0123101 7.76776 0.0484084 7.84589C0.0662955 7.86823 0.0975462 7.90179 0.14218 7.94635C0.186925 7.9911 0.269998 8.06074 0.391398 8.15579C0.512835 8.2507 0.645027 8.33987 0.787954 8.42369C0.930863 8.50736 1.11214 8.5901 1.33189 8.67198C1.55164 8.75372 1.77933 8.81136 2.01513 8.84482V9.82139C2.01513 9.86982 2.03211 9.91163 2.06603 9.94701C2.09998 9.98241 2.14015 10 2.18658 10H2.91006C2.96016 10 3.00126 9.98329 3.03338 9.94985C3.06549 9.9164 3.08148 9.8736 3.08148 9.82141V8.84484C3.64961 8.74813 4.11135 8.49421 4.46676 8.0831C4.82222 7.67199 5 7.18184 5 6.61268C4.99981 6.4267 4.97663 6.25184 4.92975 6.08805Z"
                    fill="#4B5783"
                  />
                </svg>

                <p>IDR 4.000.000 - 5.000.000</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="h-4 w-4"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.35566 4.2781H8.88899V8.33366H1.11121V2.22255H1.94455V1.66699H1.04177C0.976836 1.66808 0.912752 1.68194 0.853178 1.7078C0.793603 1.73366 0.739707 1.77099 0.694565 1.81768C0.649424 1.86437 0.613922 1.9195 0.590089 1.97991C0.566255 2.04032 0.554556 2.10484 0.555659 2.16977V8.38644C0.554556 8.45137 0.566255 8.51589 0.590089 8.5763C0.613922 8.63671 0.649424 8.69183 0.694565 8.73852C0.739707 8.78521 0.793603 8.82255 0.853178 8.84841C0.912752 8.87426 0.976836 8.88813 1.04177 8.88921H8.95844C9.02337 8.88813 9.08746 8.87426 9.14703 8.84841C9.2066 8.82255 9.2605 8.78521 9.30564 8.73852C9.35078 8.69183 9.38628 8.63671 9.41012 8.5763C9.43395 8.51589 9.44565 8.45137 9.44455 8.38644V4.27255L9.35566 4.2781Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M2.22238 3.88867H2.77794V4.44423H2.22238V3.88867Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M3.88881 3.88867H4.44436V4.44423H3.88881V3.88867Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M2.22238 5.27734H2.77794V5.8329H2.22238V5.27734Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M3.88881 5.27734H4.44436V5.8329H3.88881V5.27734Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M5.55559 5.27734H6.11114V5.8329H5.55559V5.27734Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M7.22238 5.27734H7.77794V5.8329H7.22238V5.27734Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M2.22238 6.66699H2.77794V7.22255H2.22238V6.66699Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M3.88881 6.66699H4.44436V7.22255H3.88881V6.66699Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M5.55559 6.66699H6.11114V7.22255H5.55559V6.66699Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M7.22238 6.66699H7.77794V7.22255H7.22238V6.66699Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M2.77778 2.77789C2.85145 2.77789 2.9221 2.74862 2.9742 2.69653C3.02629 2.64443 3.05556 2.57378 3.05556 2.50011V0.833442C3.05556 0.759771 3.02629 0.689117 2.9742 0.637023C2.9221 0.58493 2.85145 0.555664 2.77778 0.555664C2.70411 0.555664 2.63345 0.58493 2.58136 0.637023C2.52927 0.689117 2.5 0.759771 2.5 0.833442V2.50011C2.5 2.57378 2.52927 2.64443 2.58136 2.69653C2.63345 2.74862 2.70411 2.77789 2.77778 2.77789Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M7.45836 0.316723L5.86947 3.05561C5.8325 3.10987 5.81128 3.1733 5.80816 3.23888C5.80503 3.30446 5.82013 3.36963 5.85177 3.42715C5.88341 3.48468 5.93036 3.53232 5.98741 3.5648C6.04447 3.59728 6.10941 3.61333 6.17502 3.61117H9.35558C9.4212 3.61333 9.48614 3.59728 9.54319 3.5648C9.60025 3.53232 9.6472 3.48468 9.67884 3.42715C9.71048 3.36963 9.72557 3.30446 9.72245 3.23888C9.71932 3.1733 9.6981 3.10987 9.66114 3.05561L8.07225 0.316723C8.04091 0.263128 7.99609 0.218671 7.94224 0.187776C7.88839 0.156881 7.82739 0.140625 7.7653 0.140625C7.70322 0.140625 7.64222 0.156881 7.58837 0.187776C7.53452 0.218671 7.48969 0.263128 7.45836 0.316723Z"
                    fill="#4B5783"
                  />
                  <path
                    d="M7.99415 2.5848H7.56104L7.38699 1.18066H8.16824L7.99415 2.5848Z"
                    fill="white"
                  />
                  <path
                    d="M7.77748 3.26437C7.96117 3.26437 8.11008 3.14551 8.11008 2.99888C8.11008 2.85226 7.96117 2.7334 7.77748 2.7334C7.59379 2.7334 7.44489 2.85226 7.44489 2.99888C7.44489 3.14551 7.59379 3.26437 7.77748 3.26437Z"
                    fill="white"
                  />
                </svg>

                <p>15 April 2022</p>
              </div>
              <p className='md:hidden'><span className='font-bold'>Pelamar</span>: 30</p>
            </div>
          </div>
        </section>
        <section className="md:flex hidden flex-col items-center space-y-2 pr-7">
          <svg
            className="h-10 w-10"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33328 11.2083H7.72911C6.90464 11.1785 6.08283 11.3185 5.31471 11.6195C4.54658 11.9206 3.84851 12.3763 3.26383 12.9583L3.09717 13.1528V18.9028H5.9305V15.6389L6.31245 15.2083L6.48606 15.0069C7.39017 14.0781 8.51576 13.3946 9.75689 13.0208C9.1355 12.548 8.64542 11.9241 8.33328 11.2083Z"
              fill="#494B74"
            />
            <path
              d="M21.7639 12.9375C21.1793 12.3554 20.4812 11.8997 19.7131 11.5987C18.9449 11.2977 18.1231 11.1577 17.2987 11.1875C17.0458 11.1882 16.7931 11.2021 16.5417 11.2292C16.2237 11.9006 15.747 12.4846 15.1528 12.9306C16.4778 13.2971 17.6781 14.0173 18.6251 15.0139L18.7987 15.2083L19.1737 15.6389V18.9097H21.9098V13.1319L21.7639 12.9375Z"
              fill="#494B74"
            />
            <path
              d="M7.70841 9.85417H7.92369C7.82366 8.99531 7.97436 8.12585 8.3576 7.35076C8.74083 6.57566 9.34022 5.92806 10.0834 5.48611C9.81401 5.07455 9.44234 4.74001 9.0048 4.51524C8.56726 4.29048 8.07885 4.1832 7.58739 4.20391C7.09593 4.22462 6.61828 4.37261 6.2012 4.63339C5.78412 4.89417 5.44192 5.25879 5.2081 5.69156C4.97428 6.12433 4.85686 6.61041 4.86734 7.10219C4.87783 7.59397 5.01585 8.0746 5.26789 8.49702C5.51994 8.91943 5.87736 9.26915 6.30518 9.51192C6.73299 9.75469 7.21651 9.88219 7.70841 9.88194V9.85417Z"
              fill="#494B74"
            />
            <path
              d="M16.9652 9.33333C16.9737 9.49294 16.9737 9.65289 16.9652 9.8125C17.0985 9.83363 17.2331 9.84523 17.368 9.84722H17.4999C17.9897 9.82111 18.4643 9.66863 18.8776 9.40464C19.2909 9.14065 19.6288 8.77413 19.8585 8.34078C20.0881 7.90742 20.2016 7.422 20.1879 6.93176C20.1742 6.44152 20.0338 5.96318 19.7804 5.5433C19.527 5.12343 19.1692 4.77632 18.7418 4.53578C18.3144 4.29525 17.832 4.16947 17.3416 4.17071C16.8511 4.17194 16.3694 4.30014 15.9432 4.54282C15.517 4.78551 15.161 5.13441 14.9097 5.55556C15.5382 5.96593 16.055 6.52591 16.4138 7.18526C16.7726 7.84461 16.962 8.5827 16.9652 9.33333Z"
              fill="#494B74"
            />
            <path
              d="M12.4098 12.4444C14.1242 12.4444 15.514 11.0547 15.514 9.34028C15.514 7.62589 14.1242 6.23611 12.4098 6.23611C10.6954 6.23611 9.30566 7.62589 9.30566 9.34028C9.30566 11.0547 10.6954 12.4444 12.4098 12.4444Z"
              fill="#494B74"
            />
            <path
              d="M12.5764 14.0972C11.6695 14.0606 10.7646 14.2078 9.91605 14.5301C9.06752 14.8523 8.29295 15.3429 7.63894 15.9722L7.46533 16.1667V20.5625C7.46804 20.7057 7.49893 20.8469 7.55624 20.9782C7.61355 21.1094 7.69616 21.2281 7.79934 21.3274C7.90252 21.4267 8.02426 21.5047 8.1576 21.557C8.29093 21.6092 8.43326 21.6347 8.57644 21.6319H16.5556C16.6988 21.6347 16.8411 21.6092 16.9745 21.557C17.1078 21.5047 17.2295 21.4267 17.3327 21.3274C17.4359 21.2281 17.5185 21.1094 17.5758 20.9782C17.6331 20.8469 17.664 20.7057 17.6667 20.5625V16.1806L17.5001 15.9722C16.8503 15.3409 16.0784 14.849 15.2318 14.5266C14.3851 14.2041 13.4816 14.058 12.5764 14.0972Z"
              fill="#494B74"
            />
          </svg>
          <p className="text-5xl font-semibold">33</p>
          <p className="text-sm">Pelamar</p>
        </section>
      </div>
    </BasicCard>
  );
}