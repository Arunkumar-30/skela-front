"use client";

import Image from "next/image";

const LoanComponent = () => {
  return (
    <>
      <div className="max-w-7xl py-20 mx-auto mt-10 relative">
        <h4 className="text-[var(--subtitle)] text-2xl font-semibold">
          Choose Your Country
        </h4>
        <h1 className="text-5xl font-bold text-black mb-10">
          The World is your Campus!
        </h1>
        <div className="flex flex-row lg:flex-row gap-10">
          <div className="flex-1 space-y-5">
            <div className="relative">
              <Image
                src="/loan/skela.png"
                width={600}
                height={600}
                className=""
                alt="why"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6 mt-20">
            <h1 className="text-4xl font-bold">
              Study Loans <br /> up to
              <span className="text-[var(--banner-btn)]"> $35,000</span>
            </h1>

            <form className="w-[380px] bg-white rounded-xl shadow-md">
              {/* Email Input */}
              <div className="relative ">
                <label
                  htmlFor="email"
                  className="text-gray-500 text-sm absolute top-1 left-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full text-gray-900 text-sm p-3 border-b-2 border-[#EBEBEB] outline-none mt-4 "
                  placeholder="Enter your Email Address"
                  required
                />
              </div>

              {/* Loan Amount Input */}
              <div className="relative">
                <input
                  type="text"
                  id="loan"
                  className="w-full text-gray-900 text-sm p-3 border-b-2 border-[#EBEBEB] outline-none  "
                  placeholder="Enter Loan Amount"
                  required
                />
              </div>

              {/* Mobile Number Input */}
              <div className="relative ">
                <input
                  type="tel"
                  id="mobile"
                  className="w-full text-gray-900 text-sm p-3 border-b-2 border-[#EBEBEB] outline-none  "
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>

              {/* Last 4 Digits of SSN Input */}
              <div className="relative ">
                <input
                  type="text"
                  id="ssn"
                  className="w-full text-gray-900 text-sm p-3 border-b-2 border-[#EBEBEB] outline-none  "
                  placeholder="Enter Last 4 digits of SSN"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all"
              >
                Get Started Now →
              </button>
            </form>

            <ul className="text-lg font-normal text-[var(--ptext)]">
              <li className="flex gap-4">
                <img src="/whychoose/arrow.svg" />
                Collaborative Expertise{" "}
              </li>
              <li className="flex gap-4">
                <img src="/whychoose/arrow.svg" />
                Cutting-Edge Technology{" "}
              </li>
              <li className="flex gap-4">
                <img src="/whychoose/arrow.svg" />
                Transformational Results.
              </li>
            </ul>
          </div>
        </div>
        <div className="book-element-5">
          <Image
            src="/whychoose/why_ele-5.png"
            width={100}
            height={100}
            alt="element-1"
          />
        </div>
        <div className="book-element-6">
          <Image
            src="/whychoose/why_ele-6.png"
            width={32}
            height={32}
            alt="element-1"
          />
        </div>
      </div>
    </>
  );
};

export default LoanComponent;
