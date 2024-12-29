import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonLink from "./ButtonLink";
import { Logo } from "../assets";
import Center from "./Center";

const Header = () => {
  return (
    <div className="h-80 flex flex-col sm:mb-20 md:mb-10">
      <div className="flex justify-start items-start p-4 sm:p-10 sm:pl-16">
        <Image src={Logo} alt="logo" width={100} />
      </div>
      <Center>
        <section className="flex flex-col justify-center items-center gap-6">
          <h1 className="uppercase font-bold text-3xl text-center text-gray-700 px-8 sm:px-0">
            summy solution and technology ventures
          </h1>
          {/* <Link href="/">
        <button className="text-gray inline-flex gap-2 bg-headerButton text-gray-950 font-semibold px-4 py-2 rounded-full hover:bg-headerButtonHover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          Contact Us 
        </button>
      </Link> */}
          <ButtonLink href={"/"} header="true" className="w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Contact Us
          </ButtonLink>
        </section>
      </Center>
    </div>
  );
};

export default Header;
