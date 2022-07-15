import React from 'react';
import { Helmet } from 'react-helmet';
import utils from 'utils/utils';
// import style from './Simple.css'
export default function Simple({
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
      <div class="book">
        <div class="page">
          <div class="subpage">
            <main>
              <div class="flex-container">
                <div class="fb-40 sidebar">
                  <section class="text-center" id="img-wrap">
                    <img
                      class="img-photo mx-auto mb-5 w-full"
                      src={
                        url_photo_profile
                          ? `${process.env.REACT_APP_API_URL}/${url_photo_profile}`
                          : gender === 'L'
                          ? '/male.jpg'
                          : '/female.jpg'
                      }
                      alt="photo_profile"
                    />
                  </section>
                  <section id="contactMe">
                    <p class="judul-section">CONTACT ME AT</p>
                    <div class="content-section">
                      <div class="flex-container-row">
                        <div class="flex-container">
                          <div class="fb-10">
                            <p>
                              <i class="fa fa-user"></i>
                            </p>
                          </div>
                          <div class="fb-90">
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
                              <i class="fa fa-map"></i>
                            </p>
                          </div>
                          <div class="fb-90">
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
                              <i class="fa fa-envelope"></i>
                            </p>
                          </div>
                          <div class="fb-90">
                            <p id="email" name="email">
                              {email}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="flex-container-row">
                        <div class="flex-container">
                          <div class="fb-10">
                            <p>
                              <i class="fa fa-phone"></i>
                            </p>
                          </div>
                          <div class="fb-90">
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
                              <i class="fas fa-hashtag"></i>
                            </p>
                          </div>
                          <div class="fb-90">
                            <p id="phone" name="phone">
                              {slug}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <Skill skills={skills} />
                  <Award awards={certificates} />
                </div>
                <div class="fb-60 content">
                  <h1 id="nama" name="nama" class="cv-name">
                    {full_name.toUpperCase()}
                  </h1>
                  <div class="flex-container">
                    <div class="fb-20 garis"></div>
                  </div>
                  <section>
                    <p class="judul-section judul-section-content">
                      TENTANG SAYA
                    </p>
                    <div class="content-section clr-blk">
                      <p>{about}</p>
                    </div>
                  </section>
                  <WorkExperience works={experiences.slice(0, 2)} />
                  <IntershipExperience interns={internships.slice(0, 2)} />
                  <EducationHistory educations={educations.slice(0, 2)} />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

function Skill({ skills }) {
  return (
    <section>
      <p class="judul-section">SKILL SUMMARY</p>
      <div class="content-section">
        <ul>
          {skills.map((skill) => (
            <li>{skill?.name.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Award({ awards }) {
  return (
    <section>
      <p class="judul-section">AWARDS RECIEVED</p>
      <div class="content-section">
        {awards.map((award) => (
          <div class="flex-container-row">
            <div class="flex-container">
              <div class="fb-10">
                <p>
                  <i class="fas fa-award"></i>
                </p>
              </div>
              <div class="fb-90">
                <p id="penghargaan2" name="penghargaan2">
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

function EducationHistory({ educations }) {
  return (
    <section>
      <p class="judul-section judul-section-content">EDUCATIONAL HISTORY</p>
      <div class="content-section clr-blk">
        {educations.length < 1 ? (
          <p>No Education History</p>
        ) : (
          educations.map((education) => (
            <div class="flex-container-row mb-1">
              <p class="judul-item">{education.school}</p>
              <p class="durasi-item">
                {education.major} | {education.start_date} -{' '}
                {education.end_date}
              </p>
              <ul class="deskripsi-item">
                <li>{education.description}</li>
              </ul>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function IntershipExperience({ interns }) {
  return (
    <section>
      <p class="judul-section judul-section-content">INTERNSHIP EXPERIENCE</p>
      <div class="content-section clr-blk">
        {interns.map((intern) => (
          <div class="flex-container-row mb-1">
            <p class="judul-item">{intern.position}</p>
            <p class="durasi-item">{utils.getMonthYear(intern.start_date)} - {utils.getMonthYear(intern.end_date)}</p>
            <p class="deskripsi-item">
              {intern.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkExperience({works}) {
  return (
    <section>
      <p class="judul-section judul-section-content">WORK EXPERIENCE</p>
      <div class="content-section clr-blk">
      {works.map((work) => (
          <div class="flex-container-row mb-1">
            <p class="judul-item">{work.position}</p>
            <p class="durasi-item">{utils.getMonthYear(work.start_date)} - {utils.getMonthYear(work.end_date) === '-' ? 'Sekarng' : utils.getMonthYear(work.end_date)}</p>
            <p class="deskripsi-item">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
