import React, {useState} from 'react'

export default function SearchClass() {
    const [open, setOpen] = useState(true);
    function handleClick() {
      setOpen(!open);
    }
  return (
    <div className="flex flex-col justify-between gap-3 rounded-md bg-white p-3 text-xs shadow-mine sm:flex-row sm:gap-7 sm:p-7 lg:text-sm">
      <input
        className="w-full rounded-md bg-[#F5F8FA] p-3 placeholder:italic sm:px-5"
        type="text"
        placeholder="Search..."
      />
      <input
        className="w-full rounded-md bg-[#F5F8FA] p-3 placeholder:italic sm:px-5"
        type="text"
        placeholder="Category..."
      />
       <div className="w-full">
      <button
        onClick={handleClick}
        className="flex h-[100%] w-full items-center justify-between rounded-md bg-[#F5F8FA] p-3 text-center text-[#9CA3AF] transition-all placeholder:italic hover:bg-[#edf0f3] sm:px-5"
      >
        <span>Price</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#9CA3AF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        className={`absolute right-8 w-[300px] rounded-md border-[0.5px] border-[#b1b1b1] bg-white py-4 px-6 md:right-auto ${
          open ? 'translate-y-0  opacity-0 hidden' : ' translate-y-1 opacity-100'
        } transition-all`}
      >
      <div className='space-y-2'>
          <div className="flex items-center rounded-md border-2 border-[#F5F8FA] bg-[#F5F8FA] focus-within:border-black">
            <div className="flex items-center justify-center bg-[#DCE5EB] p-3">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.006 10L3.85 6.192H2.926V10H0.966V0.228H4.634C5.39 0.228 6.034 0.363333 6.566 0.634C7.098 0.895333 7.49467 1.25467 7.756 1.712C8.02667 2.16 8.162 2.664 8.162 3.224C8.162 3.868 7.97533 4.45133 7.602 4.974C7.22867 5.48733 6.67333 5.842 5.936 6.038L8.274 10H6.006ZM2.926 4.722H4.564C5.096 4.722 5.49267 4.596 5.754 4.344C6.01533 4.08267 6.146 3.72333 6.146 3.266C6.146 2.818 6.01533 2.47267 5.754 2.23C5.49267 1.978 5.096 1.852 4.564 1.852H2.926V4.722ZM11.8948 3.364C12.1468 3.00933 12.4921 2.71533 12.9308 2.482C13.3788 2.23933 13.8874 2.118 14.4568 2.118C15.1194 2.118 15.7168 2.28133 16.2488 2.608C16.7901 2.93467 17.2148 3.40133 17.5228 4.008C17.8401 4.60533 17.9988 5.30067 17.9988 6.094C17.9988 6.88733 17.8401 7.592 17.5228 8.208C17.2148 8.81467 16.7901 9.286 16.2488 9.622C15.7168 9.958 15.1194 10.126 14.4568 10.126C13.8874 10.126 13.3834 10.0093 12.9448 9.776C12.5154 9.54267 12.1654 9.24867 11.8948 8.894V13.696H9.93475V2.244H11.8948V3.364ZM15.9968 6.094C15.9968 5.62733 15.8988 5.226 15.7028 4.89C15.5161 4.54467 15.2641 4.28333 14.9468 4.106C14.6388 3.92867 14.3028 3.84 13.9388 3.84C13.5841 3.84 13.2481 3.93333 12.9308 4.12C12.6228 4.29733 12.3708 4.55867 12.1748 4.904C11.9881 5.24933 11.8948 5.65533 11.8948 6.122C11.8948 6.58867 11.9881 6.99467 12.1748 7.34C12.3708 7.68533 12.6228 7.95133 12.9308 8.138C13.2481 8.31533 13.5841 8.404 13.9388 8.404C14.3028 8.404 14.6388 8.31067 14.9468 8.124C15.2641 7.93733 15.5161 7.67133 15.7028 7.326C15.8988 6.98067 15.9968 6.57 15.9968 6.094Z"
                  fill="#A1A5B7"
                />
              </svg>
            </div>
            <input
              className="ml-2 bg-[#F5F8FA] focus:outline-none w-fit"
              type="number"
              placeholder="Minimun Price..."
              min={0}
            />
          </div>
          <div className="flex items-center rounded-md border-2 border-[#F5F8FA] bg-[#F5F8FA] focus-within:border-black">
            <div className="flex items-center justify-center bg-[#DCE5EB] p-3">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.006 10L3.85 6.192H2.926V10H0.966V0.228H4.634C5.39 0.228 6.034 0.363333 6.566 0.634C7.098 0.895333 7.49467 1.25467 7.756 1.712C8.02667 2.16 8.162 2.664 8.162 3.224C8.162 3.868 7.97533 4.45133 7.602 4.974C7.22867 5.48733 6.67333 5.842 5.936 6.038L8.274 10H6.006ZM2.926 4.722H4.564C5.096 4.722 5.49267 4.596 5.754 4.344C6.01533 4.08267 6.146 3.72333 6.146 3.266C6.146 2.818 6.01533 2.47267 5.754 2.23C5.49267 1.978 5.096 1.852 4.564 1.852H2.926V4.722ZM11.8948 3.364C12.1468 3.00933 12.4921 2.71533 12.9308 2.482C13.3788 2.23933 13.8874 2.118 14.4568 2.118C15.1194 2.118 15.7168 2.28133 16.2488 2.608C16.7901 2.93467 17.2148 3.40133 17.5228 4.008C17.8401 4.60533 17.9988 5.30067 17.9988 6.094C17.9988 6.88733 17.8401 7.592 17.5228 8.208C17.2148 8.81467 16.7901 9.286 16.2488 9.622C15.7168 9.958 15.1194 10.126 14.4568 10.126C13.8874 10.126 13.3834 10.0093 12.9448 9.776C12.5154 9.54267 12.1654 9.24867 11.8948 8.894V13.696H9.93475V2.244H11.8948V3.364ZM15.9968 6.094C15.9968 5.62733 15.8988 5.226 15.7028 4.89C15.5161 4.54467 15.2641 4.28333 14.9468 4.106C14.6388 3.92867 14.3028 3.84 13.9388 3.84C13.5841 3.84 13.2481 3.93333 12.9308 4.12C12.6228 4.29733 12.3708 4.55867 12.1748 4.904C11.9881 5.24933 11.8948 5.65533 11.8948 6.122C11.8948 6.58867 11.9881 6.99467 12.1748 7.34C12.3708 7.68533 12.6228 7.95133 12.9308 8.138C13.2481 8.31533 13.5841 8.404 13.9388 8.404C14.3028 8.404 14.6388 8.31067 14.9468 8.124C15.2641 7.93733 15.5161 7.67133 15.7028 7.326C15.8988 6.98067 15.9968 6.57 15.9968 6.094Z"
                  fill="#A1A5B7"
                />
              </svg>
            </div>
            <input
              className="ml-2 bg-[#F5F8FA] focus:outline-none w-fit"
              type="number"
              placeholder="Max Price..."
              min={0}
            />
          </div>
        </div>
        <div className="mx-auto mt-7 w-full">
          <button className="rounded-md bg-[#FE9A00] px-5  py-2 text-sm text-white">
            Tambah Filter
          </button>
        </div>
      </div>
    </div>
      <button className="primary-btn flex w-fit items-center justify-center gap-2 rounded-md px-5 py-2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.43744 13.6788C8.56359 13.6179 8.6699 13.5234 8.74435 13.4061C8.8188 13.2888 8.85841 13.1533 8.85871 13.015V9.02502C8.85871 8.82852 8.93869 8.63952 9.08191 8.50002L13.7448 3.95951C13.886 3.82225 13.9982 3.65877 14.0748 3.47854C14.1514 3.2983 14.191 3.1049 14.1912 2.90951V0.992514C14.1908 0.894486 14.1707 0.797499 14.1322 0.707103C14.0937 0.616707 14.0375 0.534677 13.9667 0.46571C13.8959 0.396742 13.8121 0.342191 13.7199 0.305179C13.6277 0.268167 13.529 0.249421 13.4294 0.250014H1.24091C0.819642 0.250014 0.479126 0.581514 0.479126 0.992514V2.90951C0.479126 3.30326 0.639862 3.68126 0.925529 3.95951L5.58838 8.50002C5.65903 8.56862 5.71514 8.65036 5.75346 8.74048C5.79177 8.8306 5.81153 8.92732 5.81159 9.02502V13.7575C5.81159 14.3088 6.4073 14.6673 6.91388 14.4205L8.43744 13.6788Z"
            fill="white"
          />
        </svg>

        <p>Filter</p>
      </button>
    </div>
  )
}
