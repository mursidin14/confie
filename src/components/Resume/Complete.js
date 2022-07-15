import React from 'react';
import { Helmet } from 'react-helmet';
import utils from 'utils/utils';

export default function Complete({
  user: {
    full_name,
    gender,
    url_photo_profile,
    slug,
    address,
    province_name,
    city_name,
    email,
    phone_number,
    about,
    skills,
    educations,
    experiences,
    internships,
    certificates,
  },
}) {
  const subpage = 'border-[3px] border-solid border-[#202020] h-[290mm]';
  const cv_name = 'text-left text-bold text-[#202020] h-[15mm]';
  const section = 'mb-[10px] px-[10px]';
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>

      <div class="page">
        <div class={`${subpage}`}>
          <main className="p-[20px]">
            <section
              class={`${section} border-b-solid border-b-[2px] border-[#202020]`}
            >
              <h1 id="nama" name="nama" class={`${cv_name}`}>
                {full_name.toUpperCase()}
              </h1>
            </section>
            <div class="px-3">
              <section class="flex-container-row mt-5 ">
                <div class="flex-container content-section">
                  <div class="fb-50">
                    <div class="flex-container-row">
                      <div class="flex-container">
                        <div class="fb-10">
                          <p>
                            <i class="fa fa-user text-[#202020]"></i>
                          </p>
                        </div>
                        <div class="fb-90 text-[#202020]">
                          <p id="userLink" name="userLink">
                            confie/{slug}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex-container-row">
                      <div class="flex-container">
                        <div class="fb-10">
                          <p>
                            <i class="fa fa-map text-[#202020]"></i>
                          </p>
                        </div>
                        <div class="fb-90 text-[#202020]">
                          <p id="alamat" name="alamat">
                            {address} {utils.makeCapital(city_name)},{' '}
                            {utils.makeCapital(province_name)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex-container-row">
                      <div class="flex-container">
                        <div class="fb-10">
                          <p>
                            <i class="fa fa-envelope text-[#202020]"></i>
                          </p>
                        </div>
                        <div class="fb-90 ml-3 text-[#202020]">
                          <p id="email" name="email">
                            {email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="fb-50">
                    <div class="flex-container-row">
                      <div class="flex-container">
                        <div class="fb-10">
                          <p>
                            <i class="fa fa-phone text-[#202020]"></i>
                          </p>
                        </div>
                        <div class="fb-90 ml-3 text-[#202020]">
                          <p id="phone" name="phone">
                            {phone_number}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex-container-row">
                      <div class="flex-container">
                        <div class="fb-10">
                          <p>
                            <i class="fas fa-hashtag text-[#202020]"></i>
                          </p>
                        </div>
                        <div class="fb-90 ml-3 text-[#202020]">
                          <p id="phone" name="phone">
                            {slug}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <p class="mb-[10px] text-[1.1rem] font-semibold text-[#202020]">
                  TENTANG SAYA
                </p>
                <div class="content-section clr-blk">
                  <p>{about}</p>
                </div>
              </section>
              <WorkExperiences works={experiences} />
              <InternExperiences interns={internships} />
              <EducationHIstory educations={educations} />
            </div>
          </main>
        </div>
      </div>
      <div class="page">
        <div class={`${subpage}`}>
          <div class="">
            <main className="p-[30px]">
              <Skills skills={skills} />
              <Awards awards={certificates} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

function WorkExperiences({ works }) {
  return (
    <section>
      <p class="mb-[10px] text-[1.1rem] font-semibold text-[#202020]">
        WORK EXPERIENCE
      </p>
      <div class="content-section clr-blk">
        {works.map((work) => (
          <div class="flex-container-row mb-1">
            <p class="judul-item">{work.position}</p>
            <p class="durasi-item">
              {utils.getMonthYear(work.start_date)} -{' '}
              {work.is_current ? 'Sekarang' : utils.getMonthYear(work.end_date)}
            </p>
            <p class="deskripsi-item list-inside list-disc">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InternExperiences({ interns }) {
  return (
    <section>
      <p class="mb-[10px] text-[1.1rem] font-semibold text-[#202020]">
        INTERNSHIP EXPERIENCE
      </p>
      <div class="content-section clr-blk">
        {interns.map((intern) => (
          <div class="flex-container-row mb-1">
            <p class="judul-item">{intern.position}</p>
            <p class="durasi-item">
              {utils.getMonthYear(intern.start_date)} -{' '}
              {utils.getMonthYear(intern.end_date)}
            </p>
            <p class="deskripsi-item list-inside list-disc">
              {intern.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationHIstory({ educations }) {
  return (
    <section>
      <p class="mb-[10px] text-[1.1rem] font-semibold text-[#202020]">
        EDUCATIONAL HISTORY
      </p>
      <div class="content-section clr-blk">
        {educations.map((education) => (
          <div class="flex-container-row mb-1">
            <p class="judul-item">{education.school.toUpperCase()}</p>
            <p class="durasi-item">
              {education.major} | {education.start_date} - {education.end_date}
            </p>
            <ul class="deskripsi-item list-inside list-disc">
              <li>{education.description}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills({ skills }) {
  return (
    <section>
      <p class="mb-[10px] text-[1.1rem] font-semibold text-[#202020]">
        SKILL SUMMARY
      </p>
      <div class="content-section">
        <ul class="deskripsi-item list-inside list-disc">
          {skills.map((skill) => (
            <li>{skill.name.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Awards({ awards }) {
  return (
    <section>
      <p class="mb-[10px] text-[1.1rem] font-semibold text-[#202020]">
        AWARDS RECIEVED
      </p>
      <div class="content-section">
        {awards.map((award) => (
          <div class="flex-container-row">
            <div class="flex-container">
              <div class="fb-5">
                <p>
                  <i class="fas fa-award mr-3 text-[#202020]"></i>
                </p>
              </div>
              <div class="fb-90 text-[#202020]">
                <p id="penghargaan1" name="penghargaan1">
                  {award.name.toUpperCase()}, {award.agency.toUpperCase()} (
                  {award.year})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
