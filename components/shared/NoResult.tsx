import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const NoResult = ({ title, description, link, linkText }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No Result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />

      <Image
        src="/assets/images/dark-illustration.png"
        alt="No Result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 max-w-md text-center">
        {description}
      </p>
      <Link href={link} className="flex justify-end max-sm:w-full">
        <Button className="primary-gradient mt-2 min-h-[46px] px-4 py-3 !text-light-900">
          {linkText}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
