/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const JobCard = () => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-row items-start gap-6">
        <Image
          src="/assets/images/logo.png"
          alt="company logo"
          width={64}
          height={64}
          className="object-cover"
        />

        <div className="grow">
          <div className="flex-between w-full flex-wrap gap-3">
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              Company name
            </h3>
            <div className="background-light800_dark300 flex gap-2 rounded-full px-2 py-1">
              <Image
                src="/assets/images/logo.png"
                alt="country flag"
                width={16}
                height={16}
                className="rounded-full object-cover"
              />
              <p className="text-dark200_light900">Country Name</p>
            </div>
          </div>
          <p className="text-dark200_light900 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting //
            eslint-disable-next-line react/no-unescaped-entities industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type
          </p>
          <div className="flex-between mt-5 flex gap-4">
            <div className="flex gap-4">
              <div className="flex gap-3">
                <Image
                  src="/assets/icons/clock-2.svg"
                  alt="clock"
                  width={20}
                  height={20}
                />
                <p className="text-dark200_light900">Full Time</p>
              </div>
              <div className="flex gap-3">
                <Image
                  src="/assets/icons/currency-dollar-circle.svg"
                  alt="clock"
                  width={20}
                  height={20}
                />
                <p className="text-dark200_light900">Not disclose</p>
              </div>
            </div>

            <Link
              href="/job-details"
              className="primary-text-gradient flex gap-2"
            >
              View
              <Image
                src="/assets/icons/arrow-up-right.svg"
                alt="link"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
