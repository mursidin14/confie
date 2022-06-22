import { useState } from 'react';

export default function SalaryFilter() {
  const [open, setOpen] = useState(true);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="flex h-[100%] w-full items-center justify-between rounded-md bg-[#F5F8FA] p-3 text-center text-[#9CA3AF] transition-all placeholder:italic hover:bg-[#edf0f3] sm:px-5"
      >
        <span>Range Gaji</span>
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
              placeholder="Minimun Salary..."
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
              placeholder="Max Salary..."
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
  );
}