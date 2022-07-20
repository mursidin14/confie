import React from 'react';
import { getCurrentUserComplete } from 'services/Auth/AuthService';
import Simple from 'components/Resume/Simple';
import Complete from 'components/Resume/Complete';
import { getModelCV } from 'utils/utils';
import { Helmet } from 'react-helmet';
export default function ResumeComplete() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userComplete, setUserComplete] = React.useState(null);
  React.useEffect(() => {
    const user = getCurrentUserComplete();
    setUserComplete(user);
    setIsLoading(false);
    return () => {};
  }, []);

  return (
    <>
      <Helmet>
        <title>Resume Preview</title>
      </Helmet>
      <div className="mx-auto flex w-[210mm] items-start ">
        <button
          className="my-2 rounded-md border-2 border-solid border-[#202020] bg-black px-5 py-2 text-white transition-all hover:bg-white hover:text-[#202020]"
          onClick={() => {
            window.print();
          }}
        >
          Print
        </button>
      </div>
      {isLoading ? (
        <div>Loading..,</div>
      ) : (
        <>
          {getModelCV() === 'simple' && <Simple user={userComplete} />}
          {getModelCV() !== 'simple' && <Complete user={userComplete} />}
        </>
      )}
    </>
  );
}
