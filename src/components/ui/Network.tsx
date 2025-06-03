"use client";

import Image from "next/image";

const NetworkComponent = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto h-auto lg:h-[600px] px-4">
        <div className="relative">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="bg-[#D7E6FF59] border-4 border-[#D7E6FF59] w-full max-w-[1235px] h-[287px] flex justify-center items-center rounded-lg p-6">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
                We can connect you with one of many lenders in our network,
                ready <br className="hidden lg:block" />
                to serve you!
              </h1>
            </div>
          </div>

          {/* Steps Section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center mt-10 lg:-mt-14 mb-20">
            {/* Card 1 - Submit Details */}
            <div className="flex items-center shadow-2xl rounded-lg bg-[#5971C9] text-white w-full max-w-[306px] p-5 relative h-auto min-h-[280px]">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-bold">Submit Details</h2>
                <p className="text-xs sm:text-sm font-medium">
                  All paperwork is gone! The whole process is completely online.
                  Just fill in a few details about yourself and hit “Get
                  Started”!
                </p>
              </div>
              <div className="flex flex-shrink-0">
                <Image
                  src="/network/network-1.png"
                  width={150}
                  height={220}
                  className="object-cover"
                  alt="Submit Details"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-lg border border-gray-300">
                <span className="text-xl font-bold text-blue-900">1</span>
              </div>
            </div>

            {/* Card 2 - Quick Process */}
            <div className="flex items-center shadow-2xl rounded-lg bg-[#4CAF50] text-white w-full max-w-[306px] p-5 relative h-auto min-h-[280px]">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-bold">Quick Process</h2>
                <p className="text-xs sm:text-sm font-medium">
                  The online form usually takes less than 10 minutes to
                  complete. So before you even finish your cup of tea,
                  you&apos;ll already have your request submitted.
                </p>
              </div>
              <div className="flex flex-shrink-0">
                <Image
                  src="/network/network-2.png"
                  width={150}
                  height={220}
                  className="object-cover"
                  alt="Quick Process"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-lg border border-gray-300">
                <span className="text-xl font-bold text-blue-900">2</span>
              </div>
            </div>

            {/* Card 3 - Receive Funds */}
            <div className="flex items-center shadow-2xl rounded-lg bg-[#FFA726] text-white w-full max-w-[306px] p-5 relative h-auto min-h-[280px]">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-bold">Receive Funds</h2>
                <p className="text-xs sm:text-sm font-medium">
                  Once you submit your request, get your offer, and e-sign it,
                  you’ll be able to get the funds to your bank account in no
                  time!
                </p>
              </div>
              <div className="flex flex-shrink-0">
                <Image
                  src="/network/network-3.png"
                  width={150}
                  height={220}
                  className="object-cover"
                  alt="Receive Funds"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-lg border border-gray-300">
                <span className="text-xl font-bold text-blue-900">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkComponent;
