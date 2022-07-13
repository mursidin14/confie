import React from 'react'
import Skeleton from 'react-loading-skeleton';

export default function SkeletonCard() {
  return (
    <div className="mt-4 rounded-md bg-white py-7 shadow-mine first:mt-0 ">
      <div className="hidden flex-col items-start justify-start gap-2 px-8 lg:flex">
        <Skeleton width={100} height={40} />
        <Skeleton width={750} height={200} />
      </div>
      <div className="flex flex-col items-start justify-start gap-2 px-8 lg:hidden">
        <Skeleton width={100} height={40} />
        <Skeleton width={250} height={200} />
      </div>
    </div>
  );
}
