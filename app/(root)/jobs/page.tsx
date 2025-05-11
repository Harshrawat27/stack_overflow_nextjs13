"use client";
import JobCard from "@/components/cards/JobCard";
import Filter from "@/components/shared/Filter";
import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { QuestionFilters } from "@/constants/filter";
import { set } from "mongoose";
import { useEffect, useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [countries, setCountries] = useState([]);
  async function logCountries() {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags"
    );
    const countries = await response.json();
    countries.forEach((country: any) => console.log(country.name.common));
    setCountries(countries);
  }

  const url =
    "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "264e4ed8a9msh27a63b019092f6cp18db19jsn4f868669cbc2",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  async function logJobs(url: any, options: any) {
    try {
      const response = await fetch(url, options);
      const results = await response.json();
      results.data.forEach((job) => {
        console.log(job.employer_name);
      });
    } catch (error) {
      console.error(error);
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    logCountries();
    logJobs(url, options);
  }, []);

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>
      {/* {countries.map((country: any) => (
        // eslint-disable-next-line react/jsx-key
        <p>{country.name.common}</p>
      ))} */}

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/jobs"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={QuestionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        <JobCard />
      </div>
      {/* <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div> */}
    </>
  );
};

export default page;
