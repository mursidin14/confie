import Layout from 'components/Layout/Layout';
import BasicCard from 'components/Widgets/BasicCard';
import CandidateProvider from 'context/candidate-context';
import React from 'react';
import UseCarrerMap from './UseCarrerMap';

export default function CarrerMap() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const items = UseCarrerMap();
  return (
    <CandidateProvider PageName={'Panduan Karir'}>
      <ButtonStepContainer
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <ArticleGuide />
    </CandidateProvider>
  );
}
function ButtonStepContainer({ currentStep, setCurrentStep }) {
  const steps = [
    {
      number: 1,
      description: 'Pahami diri anda ',
    },
    {
      number: 2,
      description: 'Tingkatkan Pengalaman dan Kemampuan',
    },
    {
      number: 3,
      description: 'Jelajahi Pilihan Karir',
    },
    {
      number: 4,
      description: 'Memilih Karir/profesi',
    },
    {
      number: 5,
      description: 'Persiapan menghadapi Seleksi Kerja',
    },
    {
      number: 6,
      description: 'Tumbuh Maju dalam Karir',
    },
  ];
  return (
    <BasicCard>
      <section className="flex flex-wrap justify-between gap-1 px-10 lg:flex-nowrap">
        {steps.map((step, index) => (
          <ButtonStep
            step={step}
            active={step.number === currentStep}
            handleClick={() => {
              setCurrentStep(step.number);
            }}
          />
        ))}
      </section>
    </BasicCard>
  );
}
function ButtonStep({ step: { number, description }, active, handleClick }) {
  return (
    <button className="flex flex-col items-center gap-1" onClick={handleClick}>
      <div
        className={`rounded-full ${
          active ? 'bg-[#FE9A00]' : 'bg-[#4B5783]'
        } flex h-[70px] w-[70px] items-center justify-center text-lg`}
      >
        <p className="relative text-xl text-white">{number}</p>
      </div>
      <p className={`w-[150px] text-xs ${active && 'font-semibold'}`}>
        {description}
      </p>
    </button>
  );
}
function ArticleGuide() {
  return (
    <section className="mt-10">
      <BasicCard>
        <article className="px-5 text-left">
          <h3 className="text-3xl font-black">
            Everything You Need to Know About Business
          </h3>
          <img
            className="my-5 w-full rounded-md"
            src="/banner.png"
            alt="img-map"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            non, ipsa assumenda in quam magni voluptate distinctio rem quibusdam
            iusto excepturi eius necessitatibus neque delectus optio dolor vero
            aut mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit
            eveniet facilis numquam, saepe perspiciatis repellat totam dicta
            quaerat, quam explicabo modi ratione libero harum perferendis qui
            illum distinctio officiis?
          </p>
        </article>
      </BasicCard>
    </section>
  );
}
