import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-b-brand-primary  px-4 py-[min(1.5vh,1.5vw)]">
      <div>
        <AiOutlineMenu className="cursor-pointer text-3xl text-brand-primary max-[720px]:text-xl" />
      </div>
      <div>
        <h1 className="w-full bg-gold-gradient bg-clip-text text-center text-2xl font-medium text-transparent max-[720px]:text-xl">
          <Image
            src={"/logo/logo_without_name_cropped.png"}
            // className="h-10 w-20"
            alt="Mahi Logo"
            width={200}
            height={400}
            className="h-[6vh] w-auto"
          />
        </h1>
      </div>
      <div>
        <MdLogout className="cursor-pointer text-3xl text-brand-primary max-[720px]:text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
