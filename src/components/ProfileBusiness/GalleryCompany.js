import React from 'react';
import BasicCard from 'components/BasicCard';
export default function GalleryCompany() {
  let img_company = [1, 2, 3];
  return (
    <BasicCard>
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold">Gallery Company</h3>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="px-8 flex flex-wrap items-stretch sm:justify-between justify-center gap-6 my-5">
        {img_company.map((img, index) => 
            <img className="w-52" src="/company_1.png" alt="" />
        )}

        <div className="image-upload">
          <label className='cursor-pointer' for="file-input">
            <div className="flex h-full w-fit flex-col gap-5 items-center justify-center rounded-md bg-[#A1A5B7] p-10 text-white">
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="27.5071"
                  width="7.98592"
                  height="63"
                  rx="3.99296"
                  fill="white"
                />
                <rect
                  x="63"
                  y="27.5071"
                  width="7.98592"
                  height="63"
                  rx="3.99296"
                  transform="rotate(90 63 27.5071)"
                  fill="white"
                />
              </svg>

              <p>Tambah Gambar</p>
            </div>
          </label>
          <input id="file-input" type="file" />
        </div>
      </div>
    </BasicCard>
  );
}
