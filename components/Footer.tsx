import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#00252e] mt-32 md:mt-48 text-white">
      <Wrapper>
        <div className="relative">
          <div className=" bg-white border absolute top-[-15em] md:top-[-17em] shadow-xl rounded-xl px-4 py-12 w-full text-center space-y-4 md:space-y-8 md:w-2/3 md:left-1/2 md:-translate-x-1/2">
            <h1 className="text-black font-semibold text-lg md:text-2xl">
              Ready To Build Your Community?
            </h1>
            <button className="bg-[#fe52c0] text-white py-4 px-12 md:py-3 md:px-14 text-xs rounded-full md:text-lg hover:bg-pink-300 transition-colors duration-300">
              Get Started For Free
            </button>
          </div>
          <div className="my-28 space-y-8 md:mt-32 md:flex md:justify-between md:space-y-0 md:items-center py-8">
            <div className="flex flex-col gap-8 md:gap-4 md:flex-row md:justify-between ">
              <div className="space-y-4 md:w-1/3 ">
                <div className="relative w-full max-w-[9em] h-[1.5em] md:max-w-[13em] md:h-[2.1em]">
                  <Image src={"/images/logo-white.svg"} alt="logo" fill />
                </div>
                <div className="flex gap-4 pt-4">
                  <div className="mt-1.5 relative w-full max-w-[0.8em] h-[1em] md:max-w-[0.8em] md:h-[1em]">
                    <Image src={"/images/icon-location.svg"} alt="email" fill />
                  </div>
                  <p className="text-md p-0 m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="relative w-full max-w-[0.8em] h-[1em] md:max-w-[0.8em] md:h-[1em]">
                    <Image src={"/images/icon-phone.svg"} alt="phone" fill />
                  </div>
                  <p className="text-md">+1-543-123-4567</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="relative w-full max-w-[1em] h-[0.8em] md:max-w-[1em] md:h-[0.8em]">
                    <Image src={"/images/icon-email.svg"} alt="email" fill />
                  </div>
                  <p className="text-md">example@fylo.com</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 md:flex md:space-y-0 md:gap-16 md:items-center">
                <div className="space-y-4 flex flex-col">
                  <Link href={"/"} className="hover:underline">
                    About Us
                  </Link>
                  <Link href={"/"} className="hover:underline">
                    What We Do
                  </Link>
                  <Link href={"/"} className="hover:underline">
                    FAQ
                  </Link>
                </div>

                <div className="space-y-4 flex flex-col">
                  <Link href={"/"} className="hover:underline">
                    Career
                  </Link>
                  <Link href={"/"} className="hover:underline">
                    Blog
                  </Link>
                  <Link href={"/"} className="hover:underline">
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="space-y-4 pt-4 md:flex md:flex-col md:pt-0 md:justify-between">
                <div className="flex justify-center items-center gap-4 md:justify-start pt-12">
                  <div className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="fill-white w-10 h-10 hover:fill-[#fe52c0] p-2 border border-white rounded-full transition duration-200 hover:border-[#fe52c0]"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </div>
                  <div className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="fill-white w-10 h-10 hover:fill-[#fe52c0] p-2 border border-white rounded-full transition duration-200 hover:border-[#fe52c0]"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </div>
                  <div className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-white w-10 h-10 hover:fill-[#fe52c0] p-2 border border-white rounded-full transition duration-200 hover:border-[#fe52c0]"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-center">
                  &copy; Copyright 2018 Huddle. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
