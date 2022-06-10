import React from 'react';
import Layout from 'components/Layout/Layout';
import BasicCard from 'components/Widgets/BasicCard';

export default function ClassDetail() {
  const categories = [
    'sales',
    'marketing',
    'finance',
    'hr',
    'it',
    'management',
    'other',
  ];
  return (
    <Layout PageName={'Kelas Online'}>
      <BasicCard>
        <article className="md:flex justify-between px-8 text-left items-start">
          <div>
            <p className="text-lg font-semibold">Class Title</p>
            <img className="md:w-[400px] object-cover block md:hidden my-2" src="/class_img.png" alt="" srcset="" />
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span className="rounded-md border border-[#C6C6C6] bg-[#F3F3F3] py-1 px-2 text-xs">
                  {category}
                </span>
              ))}
            </div>

            <RatingClass rating={4.8} />
            <p className="table-row text-sm">
              <b className="table-cell pr-2">Class Length</b>: 15 Chapter (1 hrs
              57 min)
            </p>
            <p className="table-row text-sm">
              <b className="table-cell pr-2">Category</b>: Design & Style
            </p>
            <div className="my-4 flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7.99618L14.2255 5.871L14.4727 3.05781L11.8473 2.43096L10.4727 0L8 1.1161L5.52727 0L4.15273 2.43096L1.52727 3.05017L1.77455 5.86335L0 7.99618L1.77455 10.1214L1.52727 12.9422L4.15273 13.569L5.52727 16L8 14.8763L10.4727 15.9924L11.8473 13.5614L14.4727 12.9345L14.2255 10.1214L16 7.99618ZM8.72727 11.8184H7.27273V10.2895H8.72727V11.8184ZM8.72727 8.76063H7.27273V4.17391H8.72727V8.76063Z"
                  fill="#3F4254"
                />
              </svg>
              <p className="text-sm">Last updated 2/2022</p>
            </div>
            <div className="flex w-fit items-center justify-between gap-8 rounded-md border border-dashed border-black p-5 sm:text-sm text-xs">
              <button className="primary-btn w-fit px-5 py-2">
                Ambil Kelas
              </button>
              <p>
                Price : <span className="text-red-500">Rp. 50.000</span>
              </p>
            </div>
          </div>
          <img className="md:w-[400px] object-cover hidden md:block" src="/class_img.png" alt="" srcset="" />
        </article>
      </BasicCard>
      <section className="mt-9 md:flex gap-6">
        <div className="md:w-4/6">
          <BasicCard>
            <article className=" px-8 text-left">
              <p className="font-semibold">Tentang Kelas</p>
              <hr className="my-2 border border-solid border-black/30" />
              <p className="mt-3 text-sm">
                Seleksi berkas is Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </article>
          </BasicCard>
          <section>
            <div className="mt-7 flex justify-between">
              <p className="font-semibold">Kurikulum Pembelajaran</p>
              <button className="primary-btn w-fit px-5 py-2 text-sm">
                Ambil Kelas
              </button>
            </div>
            <BasicCard>
              <article className=" px-8 text-left">
                <div className="flex justify-between">
                  <p className="font-semibold">Tentang Kelas</p>
                  <p className="font-bold">Free</p>
                </div>
                <hr className="my-2 border border-solid border-black/30" />
                <p className="mt-3 text-sm">
                  Seleksi berkas is Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="mt-6 flex items-center gap-20">
                  <div className="flex items-center gap-3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 0C19.9272 0 23.9332 1.65937 26.8869 4.61307C29.8406 7.56677 31.5 11.5728 31.5 15.75C31.5 19.9272 29.8406 23.9332 26.8869 26.8869C23.9332 29.8406 19.9272 31.5 15.75 31.5C11.5728 31.5 7.56677 29.8406 4.61307 26.8869C1.65937 23.9332 0 19.9272 0 15.75C0 11.5728 1.65937 7.56677 4.61307 4.61307C7.56677 1.65937 11.5728 0 15.75 0ZM15.75 29.25C19.3304 29.25 22.7642 27.8277 25.2959 25.2959C27.8277 22.7642 29.25 19.3304 29.25 15.75C29.25 12.1696 27.8277 8.7358 25.2959 6.20406C22.7642 3.67232 19.3304 2.25 15.75 2.25C12.1696 2.25 8.7358 3.67232 6.20406 6.20406C3.67232 8.7358 2.25 12.1696 2.25 15.75C2.25 19.3304 3.67232 22.7642 6.20406 25.2959C8.7358 27.8277 12.1696 29.25 15.75 29.25ZM14.0625 20.5447L21.2557 15.75L14.0625 10.9552V20.5447ZM14.436 8.49825L23.2065 14.346C23.4376 14.5001 23.6271 14.7089 23.7582 14.9538C23.8892 15.1987 23.9578 15.4722 23.9578 15.75C23.9578 16.0278 23.8892 16.3013 23.7582 16.5462C23.6271 16.7911 23.4376 16.9999 23.2065 17.154L14.436 23.0017C14.1819 23.1712 13.8865 23.2684 13.5815 23.2832C13.2764 23.2979 12.973 23.2296 12.7038 23.0855C12.4345 22.9414 12.2094 22.7269 12.0524 22.4649C11.8954 22.2029 11.8125 21.9032 11.8125 21.5977V9.9C11.8125 9.59458 11.8954 9.29489 12.0524 9.03289C12.2094 8.77089 12.4345 8.55639 12.7038 8.41228C12.973 8.26817 13.2764 8.19985 13.5815 8.21459C13.8865 8.22933 14.1819 8.32659 14.436 8.496V8.49825Z"
                        fill="black"
                      />
                    </svg>
                    <div className="text-xs">
                      <p className="font-semibold">Video</p>
                      <p>Durasi 35.00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      width="24"
                      height="29"
                      viewBox="0 0 24 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5641 10.3733H21.8788L21.9148 7.6328C21.9105 7.47264 21.8537 7.31942 21.7548 7.2007L15.8671 0.1943C15.8198 0.135521 15.7619 0.0879419 15.697 0.0545174C15.6321 0.0210929 15.5616 0.00253635 15.4898 0L3.1705 0C2.89429 0.00482278 2.63057 0.126007 2.43486 0.338042C2.23915 0.550077 2.12672 0.836422 2.12123 1.1368V10.3733H1.4346C1.05462 10.3733 0.687977 10.5444 0.421325 10.8489C0.14926 11.1584 -0.00177681 11.5706 1.57758e-05 11.9987V20.4522C1.57758e-05 21.3484 0.642646 22.0763 1.4346 22.0763H2.12123V27.8618C2.1264 28.1629 2.23905 28.45 2.43537 28.6624C2.63168 28.8749 2.89627 28.9959 3.17317 29H20.8762C21.4295 29 21.9161 28.4896 21.9161 27.8632V22.0777H22.5654C23.3574 22.0777 24 21.3484 24 20.4508V11.9973C24 11.5681 23.8493 11.1534 23.58 10.8489C23.4494 10.6994 23.2923 10.5801 23.1181 10.4984C22.944 10.4167 22.7564 10.3741 22.5667 10.3733H22.5641ZM3.93313 1.9981H13.2073V8.63475C13.2068 8.78418 13.2593 8.92806 13.3539 9.0364C13.3998 9.08889 13.4551 9.13073 13.5162 9.15939C13.5774 9.18805 13.6433 9.20294 13.7099 9.20315H20.0549V10.3733H3.93313V1.9981ZM3.93313 27.0019V22.0763H20.0549V27.0019H3.93313ZM15.0538 2.204L15.5671 2.8333L19.0069 6.97015L19.1976 7.221H15.6818C15.4152 7.221 15.2485 7.17315 15.1778 7.076C15.1072 6.98175 15.0658 6.8295 15.0538 6.62215V2.204ZM2.66653 20.6364V11.9364H5.22372C6.19167 11.9364 6.82363 11.9799 7.11695 12.0669C7.57026 12.1974 7.9489 12.4816 8.25422 12.9195C8.5582 13.356 8.71153 13.92 8.71153 14.6131C8.71153 15.1467 8.62353 15.5962 8.44754 15.9616C8.27155 16.3241 8.04756 16.6098 7.77691 16.8171C7.52951 17.0135 7.24844 17.154 6.95029 17.2304C6.57031 17.313 6.01968 17.3551 5.29839 17.3551H4.25978V20.6364H2.66653ZM4.25978 13.4081V15.8775H5.13173C5.75969 15.8775 6.17967 15.8311 6.39166 15.7412C6.59655 15.6571 6.77207 15.5053 6.89355 15.3071C7.01503 15.1089 7.07637 14.8743 7.06895 14.6363C7.07868 14.3498 6.98815 14.07 6.81563 13.8533C6.64917 13.6489 6.42328 13.5128 6.17567 13.4676C5.98635 13.4285 5.6037 13.4096 5.02907 13.4096H4.25978V13.4081ZM9.64614 11.9364H12.558C13.2153 11.9364 13.7152 11.9915 14.0606 12.1032C14.5232 12.2525 14.9192 12.5208 15.2498 12.9036C15.5791 13.2878 15.8311 13.7576 16.0031 14.313C16.1764 14.8698 16.2618 15.5541 16.2618 16.369C16.2618 17.0854 16.1818 17.7031 16.0191 18.2207C15.8218 18.8544 15.5391 19.3662 15.1738 19.7577C14.8978 20.055 14.5245 20.287 14.0539 20.4537C13.7032 20.5755 13.2326 20.6364 12.6446 20.6364H9.64614V11.9364ZM11.2394 13.4081V19.1705H12.4287C12.874 19.1705 13.1953 19.1429 13.3926 19.0878C13.6512 19.0153 13.8659 18.8964 14.0352 18.7253C14.2059 18.5557 14.3459 18.2758 14.4525 17.8857C14.5605 17.4957 14.6139 16.965 14.6139 16.2922C14.6139 15.6194 14.5605 15.1032 14.4539 14.7436C14.3692 14.4263 14.2134 14.1369 14.0006 13.9012C13.7948 13.6923 13.5394 13.5501 13.2633 13.4908C13.0406 13.4357 12.6046 13.4081 11.9567 13.4081H11.2394ZM17.2564 20.6364V11.9364H22.6654V13.4081H18.8496V15.4672H22.1428V16.9389H18.8496V20.6364H17.2564Z"
                        fill="black"
                      />
                    </svg>

                    <div className="text-xs">
                      <p className="font-semibold">Workload</p>
                      <p>Download</p>
                    </div>
                  </div>
                </div>
              </article>
            </BasicCard>
            <BasicCard></BasicCard>
          </section>
        </div>
        <div className="md:w-1/3">
          <BasicCard>
            <div className="px-8 text-left">
              <div className="flex items-center gap-3">
                <img className="w-10 rounded-full" src="/male.jpg" alt="" />
                <article className="text-sm">
                  <p className="font-semibold">Andika Pratama</p>
                  <p className="text-xs font-thin">
                    Hosted on PT. WIjaya 2019{' '}
                  </p>
                </article>
              </div>
              <article>
                <p className="mt-5 text-sm">
                  Pg Muhd Uwuis Al Qarni is a certified Professional Scrum
                  Master, Product Owner and a Business Coach with his vast
                  experience mainly in Software Development Projects. He is keen
                  to support the community in coaching startups with their
                  product designs and business model.
                </p>
              </article>
            </div>
          </BasicCard>
          <BasicCard>
            <div className="px-8 text-left">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Review</p>
                <button className="flex items-center gap-4 rounded-md bg-[#5A5A5A]/50 p-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.755 13.3975L7.29588 12.953L16.5735 3.56421C16.6467 3.48922 16.6874 3.38845 16.6869 3.28367C16.6864 3.17889 16.6448 3.07851 16.5709 3.00421L16.0152 2.44246C15.9793 2.40557 15.9365 2.3762 15.8891 2.35606C15.8417 2.33593 15.7908 2.32543 15.7393 2.32519C15.6878 2.32494 15.6368 2.33495 15.5892 2.35464C15.5417 2.37432 15.4985 2.40329 15.4622 2.43984L6.20913 11.8041L5.75412 13.3966L5.755 13.3975ZM17.1151 1.32946L17.6707 1.89209C18.4373 2.66821 18.4443 3.92034 17.6847 4.68859L8.1245 14.3643L4.831 15.3128C4.62992 15.3691 4.41473 15.3433 4.23264 15.2411C4.05055 15.1389 3.91645 14.9687 3.85975 14.7677C3.81756 14.6232 3.81695 14.4698 3.858 14.325L4.81612 10.965L14.351 1.31459C14.5323 1.13202 14.7481 0.987391 14.9859 0.88912C15.2237 0.790849 15.4787 0.740909 15.736 0.742212C15.9933 0.743516 16.2477 0.796036 16.4845 0.89671C16.7213 0.997385 16.9357 1.14507 17.1151 1.32946ZM7.036 2.33834C7.47 2.33834 7.82175 2.69446 7.82175 3.13371C7.82244 3.23755 7.80266 3.3405 7.76354 3.43668C7.72441 3.53287 7.66671 3.6204 7.59374 3.69427C7.52076 3.76813 7.43394 3.8269 7.33824 3.86719C7.24254 3.90748 7.13984 3.92851 7.036 3.92909H3.893C3.025 3.92909 2.3215 4.64134 2.3215 5.51896V15.0617C2.3215 15.9402 3.025 16.6525 3.893 16.6525H13.322C14.19 16.6525 14.8944 15.9402 14.8944 15.0617V11.8811C14.8944 11.4418 15.2461 11.0857 15.6801 11.0857C16.1141 11.0857 16.4659 11.4418 16.4659 11.882V15.0617C16.4659 16.8187 15.058 18.2432 13.322 18.2432H3.893C2.157 18.2432 0.75 16.8187 0.75 15.0617V5.51896C0.75 3.76284 2.157 2.33834 3.893 2.33834H7.036Z"
                      fill="#3F4254"
                    />
                  </svg>
                  <span className="text-sm">Write Content</span>
                </button>
              </div>
              <div className="mt-2 flex gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <p>4.8</p>
                  <svg
                    className="h-3 w-3"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 10.4479L10.517 13L9.451 8.19L13 4.95368L8.3265 4.53632L6.5 0L4.6735 4.53632L0 4.95368L3.549 8.19L2.483 13L6.5 10.4479Z"
                      fill="#FEF400"
                    />
                  </svg>
                </div>
                <p>(31 Reviews)</p>
                <a
                  href="/reviews"
                  className="grow text-right text-xs underline"
                >
                  See all reviews
                </a>
              </div>
              <article className="my-4">
                <div className="flex items-center gap-3">
                  <img className="w-10 rounded-full" src="/male.jpg" alt="" />
                  <article className="text-sm">
                    <p className="font-semibold">Andika Pratama</p>
                    <p className="text-xs font-thin">
                      Hosted on PT. WIjaya 2019{' '}
                    </p>
                  </article>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  aliquid! Id nisi exercitationem reprehenderit totam unde
                  necessitatibus saepe asperiores amet, cumque voluptatibus
                  laudantium sit sapiente adipisci iusto esse placeat ipsa!
                </p>
              </article>
              <a href="" className="flex items-center gap-3 group">
                <p className="font-semibold group-hover:underline">Show More</p>
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.845154 13.5307C0.704704 13.39 0.625814 13.1994 0.625814 13.0007C0.625814 12.8019 0.704704 12.6113 0.845154 12.4707L6.31515 7.00066L0.845154 1.53066C0.771467 1.462 0.712364 1.3792 0.671372 1.2872C0.63038 1.1952 0.608338 1.09589 0.606561 0.995182C0.604785 0.894479 0.62331 0.794452 0.661031 0.701063C0.698752 0.607675 0.754897 0.52284 0.826115 0.451622C0.897334 0.380404 0.982167 0.324258 1.07556 0.286537C1.16894 0.248816 1.26897 0.230292 1.36968 0.232069C1.47038 0.233846 1.56969 0.255887 1.66169 0.296879C1.75369 0.337871 1.83649 0.396973 1.90515 0.470659L7.90515 6.47066C8.0456 6.61129 8.12449 6.80191 8.12449 7.00066C8.12449 7.19941 8.0456 7.39003 7.90515 7.53066L1.90515 13.5307C1.76453 13.6711 1.5739 13.75 1.37515 13.75C1.1764 13.75 0.98578 13.6711 0.845154 13.5307Z"
                    fill="#3F4254"
                  />
                </svg>
              </a>
            </div>
          </BasicCard>
        </div>
      </section>
    </Layout>
  );
}

function RatingClass({ rating }) {
  let stars = [1, 2, 3, 4, 5];
  return (
    <div className="my-3 flex items-center gap-3">
      <p className="text-sm font-medium">{rating}</p>
      <div className="flex gap-1">
        {stars.map((star, index) => (
          <svg
            className={`h-4 w-4 ${
              star <= rating ? 'fill-[#FEF400]' : 'fill-current'
            }`}
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 8.84053L8.899 11L7.997 6.93L11 4.19158L7.0455 3.83842L5.5 0L3.9545 3.83842L0 4.19158L3.003 6.93L2.101 11L5.5 8.84053Z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
