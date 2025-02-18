import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import downloadImage from "../../public/img/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to try-out this App?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Don&apos;t miss the wonderful moments of every day.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          {/* <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Download for Free
          </a> */}
          <Link href="https://apps.apple.com/app/id6742095766" className="px-8 py-4">
            <Image src={downloadImage} alt="N" width="212" height="44" />
          </Link>
        </div>
      </div>
    </Container>
  );
};
