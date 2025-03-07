"use client";

import Image from "next/image";

const NetworkComponent = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto h-[600px]">
        <div className="relative">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="bg-[#D7E6FF59] border-4 border-[#D7E6FF59] w-full max-w-[1235px] h-[287px] flex justify-center items-center rounded-lg">
              <h1 className="text-2xl font-bold text-center">
                We can connect you with one of many lenders in our network,
                ready <br />
                to serve you!
              </h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 justify-center mb-20 absolute -bottom-75 left-32">
            {/* Card 1 - Submit Details */}
            <div className="flex items-center  shadow-2xl rounded-lg bg-[#5971C9] h-[283.79px] w-[306.18px] text-white  p-5 relative">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Submit Details</h2>
                <p className="text-xs font-medium">
                  All paperwork is gone! The whole process is completely online.
                  Just fill in a few details about yourself and hit “Get
                  Started”!
                </p>
              </div>
              <div className="flex flex-shrink-0">
                <Image
                  src="/network/network-1.png"
                  width={220} // Increased width
                  height={380} // Increased height
                  className="object-cover w-[190px] h-[320px]" // Ensures image maintains aspect ratio
                  alt="Quick Process"
                />
              </div>
              <div className="absolute -bottom-4 left-32 w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-lg border border-gray-300">
                <span className="text-xl font-bold text-blue-900">1</span>
              </div>
            </div>

            {/* Card 2 - Quick Process */}
            <div className="flex items-center h-[283.79px] w-[306.18px] shadow-2xl rounded-lg bg-[#4CAF50] text-white p-5 relative">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Quick Process</h2>
                <p className="text-xs font-medium">
                  The online form usually takes less than 10 minutes to
                  complete. So before you even finish your cup of tea, you'll
                  already have your request submitted.
                </p>
              </div>
              <div className="flex flex-shrink-0">
                <Image
                  src="/network/network-2.png"
                  width={220} // Increased width
                  height={380} // Increased height
                  className="object-cover w-[190px] h-[320px]"
                  alt="Quick Process"
                />
              </div>
              <div className="absolute -bottom-4 left-32 w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-lg border border-gray-300">
                <span className="text-xl font-bold text-blue-900">2</span>
              </div>
            </div>

            {/* Card 3 - Receive Funds */}
            <div className="flex items-center h-[283.79px] w-[306.18px]  shadow-2xl rounded-lg bg-[#FFA726] text-white p-5 relative">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Receive Funds</h2>
                <p className="text-xs font-medium">
                  Once you submit your request, get your offer, and e-sign it,
                  you’ll be able to get the funds to your bank account in no
                  time!
                </p>
              </div>
              <div className="flex flex-shrink-0">
                <Image
                  src="/network/network-3.png"
                  width={220} // Increased width
                  height={380} // Increased height
                  className="object-cover w-[190px] h-[320px]"
                  alt="Quick Process"
                />
              </div>
              <div className="absolute -bottom-4 left-32 w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-lg border border-gray-300">
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
