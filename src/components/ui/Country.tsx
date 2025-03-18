"use client";

import Image from "next/image";

const CountryComponent = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="grid gap-4 text-center">
          <h4 className="text-[var(--subtitle)] text-2xl font-semibold">
            Choose Your Country
          </h4>
          <div className="relative">
            <h2 className="text-[var(--h2color)] text-7xl font-semibold opacity-50  ">
              Skela County Advantage
            </h2>
            <h1 className="text-5xl font-bold text-black absolute top-10 left-25">
              The World is your Campus!
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center items-center mt-20 mb-20">
        <div className="grid gap-6 text-center">
          <div className="bg-[url(/country/country.png)] bg-auto bg-center bg-no-repeat w-[550px] h-[200px]">
            <p>Knowledge beyond boundaries.</p>
            <div className="flex justify-center items-center gap-10 mt-16">
              <div className=" w-[220px] h-[48px]">
                <form>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-[var(--dropdowntext)] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Study Destination</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </form>
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-[var(--banner-btn)] bg-white rounded-lg border border-[var(--banner-btn)]  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto ">
        <div>
          <div className="grid gap-4 text-center relative">
            <Image
              src="/country/country-map.png"
              width={500}
              height={500}
              className="w-full h-[708px]"
              alt="country-map"
            />
            <div className="absolute bottom-50 right-65">
              <Image
                src="/country/flag-1.jpg"
                width={40}
                height={42}
                alt="flag-1"
              />
            </div>
            <div className="absolute top-70 right-80">
              <Image
                src="/country/flag-2.jpg"
                width={40}
                height={42}
                alt="flag-1"
              />
            </div>
            <div className="absolute top-87 right-101  ">
              <Image
                src="/country/flag-3.png"
                width={40}
                height={42}
                alt="flag-1"
              />
            </div>
            <div className="absolute top-70 left-160">
              <Image
                src="/country/flag-4.jpg"
                width={40}
                height={42}
                alt="flag-1"
              />
            </div>
            <div className="absolute top-107 left-148">
              <Image
                src="/country/flag-5.jpg"
                width={40}
                height={42}
                alt="flag-1"
              />
            </div>
            <div className="absolute bottom-46 left-89">
              <Image
                src="/country/flag-6.jpg"
                width={40}
                height={42}
                alt="flag-1"
              />
            </div>
            <div className="absolute top-80 left-77">
              <Image
                src="/country/flag-7.jpg"
                width={40}
                height={82}
                alt="flag-1"
              />
            </div>
            <div className="absolute top-68 left-53">
              <Image
                src="/country/canda.jpg"
                width={40}
                height={42}
                alt="flag-1"
              />
            </div>
            <div className="absolute bottom-68 right-93">
              <Image
                src="/country/india.png"
                width={40}
                height={42}
                alt="flag-1"
              />
            </div>
            <div className="absolute bottom-70 right-90">
              <Image
                src="/country/line.svg"
                width={300}
                height={200}
                alt="line"
              />
            </div>
            <div className="absolute bottom-107 right-100 rotate-12">
              <Image
                src="/country/flight.svg"
                width={30}
                height={20}
                alt="line"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryComponent;
