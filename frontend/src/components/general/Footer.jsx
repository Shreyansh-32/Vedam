const Footer = () => {
  return (
    <div className="w-full bg-[#251308] min-h-[353px] justify-between flex">
      <div className="flex w-[1620px] ml-[150px] mr-[150px] justify-between pb-[82px]">
        <div className="h-full flex flex-col items-center">
          <h4 className="text-[24px] font-semibold mt-[82px] text-[#FAF1DA]">
            Get to know us
          </h4>
          <h6 className="mt-[65px] text-[20px] text-[#FAF1DA] cursor-pointer">
            About Vedam
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer">
            Sell with us
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer">
            Careers
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer">
            Blogs
          </h6>
        </div>
        <div className="h-full flex flex-col items-center">
          <h4 className="text-[24px] font-semibold mt-[82px] text-[#FAF1DA]">
            Quick links
          </h4>
          <h6 className="mt-[65px] text-[20px] text-[#FAF1DA] cursor-pointer">
            Terms and condition
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer">
            Privacy policy
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer">
            Track order
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer">
            FAQs
          </h6>
        </div>
        <div className="h-full flex flex-col items-center">
          <h4 className="text-[24px] font-semibold mt-[82px] text-[#FAF1DA]">
            Support
          </h4>
          <h6 className="mt-[65px] text-[20px] text-[#FAF1DA] cursor-pointer">
            Contact us
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer flex items-center gap-1">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.66667 18.3334C3.1625 18.3334 2.73091 18.1539 2.37188 17.7949C2.01285 17.4358 1.83334 17.0042 1.83334 16.5001V5.50008C1.83334 4.99591 2.01285 4.56432 2.37188 4.20529C2.73091 3.84626 3.1625 3.66675 3.66667 3.66675H18.3333C18.8375 3.66675 19.2691 3.84626 19.6281 4.20529C19.9872 4.56432 20.1667 4.99591 20.1667 5.50008V16.5001C20.1667 17.0042 19.9872 17.4358 19.6281 17.7949C19.2691 18.1539 18.8375 18.3334 18.3333 18.3334H3.66667ZM11 11.9167L3.66667 7.33341V16.5001H18.3333V7.33341L11 11.9167ZM11 10.0834L18.3333 5.50008H3.66667L11 10.0834ZM3.66667 7.33341V5.50008V16.5001V7.33341Z"
                fill="#FEF7FF"
              />
            </svg>
            Email
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer flex items-center gap-1">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6634 17.2066C20.6634 17.2066 19.5047 18.2498 19.2207 18.5557C18.7582 19.0081 18.2132 19.2218 17.4988 19.2218C17.4301 19.2218 17.3568 19.2218 17.2881 19.2176C15.9279 19.138 14.6639 18.652 13.716 18.2373C11.1238 17.0893 8.84773 15.4596 6.95631 13.3942C5.39464 11.6723 4.35047 10.0803 3.65893 8.37103C3.23302 7.32785 3.07731 6.51509 3.14601 5.74842C3.1918 5.25825 3.39789 4.85187 3.778 4.50414L5.33968 3.07553C5.56409 2.88281 5.80223 2.77808 6.03579 2.77808C6.32432 2.77808 6.55788 2.93728 6.70443 3.07134C6.70901 3.07553 6.71359 3.07972 6.71817 3.08391C6.99753 3.32271 7.26315 3.56989 7.54252 3.83383C7.68449 3.96789 7.83104 4.10195 7.97759 4.2402L9.22785 5.38393C9.71329 5.82802 9.71329 6.23859 9.22785 6.68267C9.09503 6.80417 8.9668 6.92566 8.83399 7.04296C8.4493 7.40326 8.7515 7.12681 8.35306 7.45359C8.3439 7.46197 8.33474 7.46616 8.33016 7.47454C7.93631 7.83483 8.00958 8.18675 8.09202 8.42555C8.0966 8.43812 8.10118 8.45068 8.10576 8.46325C8.43092 9.18384 8.88889 9.86254 9.585 10.6711L9.58958 10.6753C10.8536 12.0997 12.1863 13.2099 13.6564 14.0604C13.8441 14.1693 14.0365 14.2573 14.2197 14.3411C14.3845 14.4165 14.5402 14.4877 14.673 14.5631C14.6914 14.5715 14.7097 14.5841 14.728 14.5925C14.8837 14.6637 15.0303 14.6972 15.1814 14.6972C15.5615 14.6972 15.7997 14.4793 15.8775 14.4081L16.7752 13.5869C16.9309 13.4445 17.1782 13.2727 17.4667 13.2727C17.7507 13.2727 17.9842 13.4361 18.1262 13.5786C18.1308 13.5827 18.1308 13.5827 18.1354 13.5869L20.6588 15.8953C21.1305 16.3227 20.6634 17.2066 20.6634 17.2066Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Phone
          </h6>
        </div>
        <div className="h-full flex flex-col items-center">
          <h4 className="text-[24px] font-semibold mt-[82px] text-[#FAF1DA]">
            Connect with us
          </h4>
          <h6 className="mt-[65px] text-[20px] text-[#FAF1DA] cursor-pointer flex items-center gap-1">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6361 6.41659H17.6477M9 20.1666H15C20 20.1666 22 18.3333 22 13.7499V8.24992C22 3.66659 20 1.83325 15 1.83325H9C4 1.83325 2 3.66659 2 8.24992V13.7499C2 18.3333 4 20.1666 9 20.1666ZM15.5 10.9999C15.5 12.7718 13.933 14.2083 12 14.2083C10.067 14.2083 8.5 12.7718 8.5 10.9999C8.5 9.228 10.067 7.79159 12 7.79159C13.933 7.79159 15.5 9.228 15.5 10.9999Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Instagram
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer flex items-center gap-1">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 1.83325H15C13.6739 1.83325 12.4021 2.31614 11.4645 3.17568C10.5268 4.03522 10 5.20101 10 6.41659V9.16658H7V12.8333H10V20.1666H14V12.8333H17L18 9.16658H14V6.41659C14 6.17347 14.1054 5.94031 14.2929 5.7684C14.4804 5.5965 14.7348 5.49992 15 5.49992H18V1.83325Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Facebook
          </h6>
          <h6 className="mt-[32px] text-[20px] text-[#FAF1DA] cursor-pointer flex items-center gap-1">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 2.74994C22.0424 3.36913 20.9821 3.84271 19.86 4.15244C19.2577 3.51766 18.4573 3.06774 17.567 2.86354C16.6767 2.65934 15.7395 2.7107 14.8821 3.01069C14.0247 3.31068 13.2884 3.84481 12.773 4.54085C12.2575 5.23689 11.9877 6.06125 12 6.90244V7.81911C10.2426 7.86088 8.50127 7.5036 6.93101 6.7791C5.36074 6.0546 4.01032 4.98536 3 3.66661C3 3.66661 -1 11.9166 8 15.5833C5.94053 16.8647 3.48716 17.5073 1 17.4166C10 21.9999 21 17.4166 21 6.87494C20.9991 6.61961 20.9723 6.3649 20.92 6.11411C21.9406 5.19148 22.6608 4.02659 23 2.74994Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Twitter
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
