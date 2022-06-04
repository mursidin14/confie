import React from 'react'
import utils from 'utils/utils';

export default function CertificationInformation({ data }) {
    const certificates = data;
    return (
      <section className="mt-10 sm:mt-20">
        <p className="mb-2 text-left text-sm font-semibold sm:mb-6 sm:text-xl">
          Award & Certification
        </p>
        <div className="space-y-1 pr-10 text-left text-xs sm:w-[240px] sm:space-y-3 sm:text-sm">
          {certificates.map((certificate, index) => (
            <div key={index}>
              <p>
                {certificate.name} {utils.getMonthYear(certificate.year)}
              </p>
              <div className="flex items-center gap-4">
                <hr className="w-2 border-b-[0.5px] border-white" />
                <p className="mt-1 text-xs">{certificate.agency}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
