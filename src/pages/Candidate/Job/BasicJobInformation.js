import React from 'react';
import { getDate, getFullDate, getLocalStringRupiah } from 'utils/utils';

export default function BasicJobInformation({item: {location, max_salary, min_salary, min_experience, max_experience, registration_end_date, updated_at}}) {
  return (
    <div>
      <div className="mt-6 space-y-2">
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.64722 5.64286C6.46702 8.14286 4.5 11 4.5 11C4.5 11 2.53298 8.14286 1.35278 5.64286C0.172567 3.14286 2.13958 1 4.5 1C6.86042 1 8.82743 3.14286 7.64722 5.64286Z"
              stroke="#4B5783"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>{location}</p>
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

          <p>IDR {getLocalStringRupiah(min_salary)} - {getLocalStringRupiah(max_salary)}</p>
        </div>
        <div className="flex items-center gap-3">
          <svg
            className="h-4 w-4"
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 4.85056V5.63791C3.75 5.72323 3.78534 5.79712 3.85601 5.85934C3.92127 5.91695 3.99759 5.94793 4.08507 5.95235L4.10717 5.9529H5.89287C5.9896 5.9529 6.07335 5.92176 6.14405 5.85934C6.20923 5.80189 6.24441 5.73451 6.24943 5.65739L6.25006 5.63791V4.85056H10V7.21271C10 7.4292 9.91265 7.61453 9.73774 7.7687C9.57083 7.91589 9.37171 7.99283 9.14044 7.99952L9.10718 8H0.892877C0.647327 8 0.437096 7.9229 0.262261 7.7687C0.0953367 7.62153 0.00812511 7.44598 0.00054167 7.24204L0 7.21271V4.85056H3.75ZM5.71436 4.85056V5.48047H4.28566V4.85056H5.71436ZM6.60718 0C6.75594 0 6.88249 0.0459523 6.98657 0.137771C7.09077 0.229641 7.14282 0.34116 7.14282 0.472398V1.43631H9.10716C9.35265 1.43631 9.56289 1.51337 9.73772 1.66759C9.91265 1.82178 9.99998 2.00708 9.99998 2.22362V4.11335H0V2.22362C0 2.00708 0.0873879 1.82178 0.262261 1.66759C0.437115 1.51337 0.647347 1.43631 0.892877 1.43631H2.85718V0.472398C2.85718 0.341143 2.90923 0.229589 3.01343 0.137771C3.11762 0.0459523 3.2441 0 3.39288 0H6.60718ZM6.42859 0.62987H3.57145V1.43631H6.42859V0.62987Z"
              fill="#4B5783"
            />
          </svg>

          <p>{min_experience} - {max_experience} Tahun</p>
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
          <p>{getDate(registration_end_date)}</p>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <svg
          className="h-4 w-4"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99996 0C6.20558 0 8 1.79442 8 3.99996C8 6.20558 6.20558 8 3.99996 8C1.79442 8 0 6.20558 0 3.99988C0 1.79442 1.79442 0 3.99996 0ZM3.99996 7.14887C5.73628 7.14887 7.14895 5.73636 7.14895 3.99996C7.14895 2.26364 5.73628 0.851134 3.99996 0.851134C2.26372 0.851134 0.851054 2.26364 0.851054 3.99996C0.851054 5.73636 2.26372 7.14887 3.99996 7.14887V7.14887ZM6.08463 3.87642C6.17108 3.87777 6.25354 3.91307 6.31419 3.97468C6.37485 4.0363 6.40885 4.1193 6.40885 4.20576C6.40885 4.29223 6.37485 4.37523 6.31419 4.43684C6.25354 4.49846 6.17108 4.53375 6.08463 4.53511H3.9576C3.87027 4.53506 3.78653 4.50034 3.72479 4.43858C3.66306 4.37681 3.62838 4.29305 3.62838 4.20572V1.7151C3.62973 1.62864 3.66502 1.54619 3.72664 1.48553C3.78826 1.42487 3.87125 1.39087 3.95772 1.39087C4.04418 1.39087 4.12718 1.42487 4.1888 1.48553C4.25041 1.54619 4.28571 1.62864 4.28706 1.7151V3.8765H6.08463V3.87642Z"
            fill="#7E8299"
          />
        </svg>

        <p className="text-xs text-[#7E8299]">
          Dipublish tanggal {getDate(updated_at)}
        </p>
      </div>
    </div>
  );
}
