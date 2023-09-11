import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";

function Navbar() {
  return (
    <Wrapper>
      <div className="flex justify-between items-center">
        <Link
          href={"/"}
          className="relative w-full max-w-[7em] h-[1.3em] md:max-w-[12em] md:h-[2em]"
        >
          <Image src={"/images/logo.svg"} alt="logo" fill />
        </Link>
        <button className="bg-[#ffffff] shadow-md py-1 px-7 rounded-full font-semibold md:py-3 md:px-14 hover:text-gray-400 transition-colors duration-300">
          Try It Free
        </button>
      </div>
    </Wrapper>
  );
}

export default Navbar;
