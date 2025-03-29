"use client"; // Ensure client-side rendering

import Image from "next/image";
import Link from "next/link";

const WhyChooseUsComponent = () => {
  return (
    <>
      <div className="bg-[var(--cardbackground)]">
        <div className="max-w-7xl py-20 mx-auto  relative px-5">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-5">
              <div className="relative">
                {/* Main Image */}
                <Image
                  src="/whychoose/skela.png"
                  width={600}
                  height={600}
                  className="w-full sm:w-auto mx-auto"
                  alt="why"
                />

                {/* Floating Elements - Adjusted for Mobile */}
                <div className="absolute top-[85%] right-[10%] sm:top-[390px] sm:right-[60px] w-[60px] sm:w-[87px] animate-float">
                  <Image
                    src="/whychoose/30.png"
                    width={87}
                    height={79}
                    alt="element-1"
                  />
                </div>

                <div className="absolute top-[5%] right-[10%] sm:top-[30px] sm:right-[60px] w-[60px] sm:w-[87px] animate-float">
                  <Image
                    src="/whychoose/31.png"
                    width={87}
                    height={79}
                    alt="element-2"
                  />
                </div>

                <div className="absolute left-[5%] bottom-[30%] sm:left-[20px] sm:bottom-[150px] w-[60px] sm:w-[87px] animate-float">
                  <Image
                    src="/whychoose/32.png"
                    width={87}
                    height={79}
                    alt="element-3"
                  />
                </div>

                <div className="absolute top-[3%] left-[5%] sm:top-[20px] sm:left-[30px] w-[60px] sm:w-[87px] animate-float">
                  <Image
                    src="/whychoose/33.png"
                    width={87}
                    height={79}
                    alt="element-4"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6 mt-20">
              <h4 className="text-base font-medium text-[var(--subtitle)]">
                Choose?
              </h4>
              <h1 className="text-4xl font-bold">
                Why Should You <br />
                Choose{" "}
                <span className="text-[var(--banner-btn)]">SkelaEdu</span>
              </h1>
              <p className="text-2xl font-normal text-[var(--ptext)]">
                Work with our team and state-of-the-art technology and
                experience how they can be a game changer for your business
              </p>

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

              <div>
                <Link
                  href="#"
                  className="readmore text-white text-base font-medium"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className=" book-element-5">
            <Image
              src="/whychoose/why_ele-5.png"
              width={100}
              height={100}
              alt="element-1"
            />
          </div>
          <div className=" book-element-6">
            <Image
              src="/whychoose/why_ele-6.png"
              width={32}
              height={32}
              alt="element-1"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl py-20 mx-auto relative px-5">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="flex-1 space-y-6 mt-20">
            <h4 className="text-base font-medium text-[var(--subtitle)]">
              Choose?
            </h4>
            <h1 className="text-4xl font-bold">
              Why Should You <br />
              Choose <span className="text-[var(--banner-btn)]">SkelaEdu</span>
            </h1>
            <p className="text-2xl font-normal text-[var(--ptext)]">
              Work with our team and state-of-the-art technology and experience
              how they can be a game changer for your business
            </p>

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

            <div>
              <Link
                href="#"
                className="readmore text-white text-base font-medium"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-5">
            <div className="relative">
              <Image
                src="/whychoose/why-2.png"
                width={600}
                height={600}
                className="w-full sm:w-auto mx-auto"
                alt="why"
              />
              <div className="absolute top-[85%] right-[10%] sm:top-[390px] sm:right-[60px] w-[60px] sm:w-[87px] animate-float">
                <Image
                  src="/whychoose/30.png"
                  width={87}
                  height={79.06}
                  alt="element-1"
                />
              </div>
              <div className="absolute top-[5%] right-[10%] sm:top-[30px] sm:right-[60px] w-[60px] sm:w-[87px] animate-float">
                <Image
                  src="/whychoose/31.png"
                  width={87}
                  height={79.06}
                  alt="element-1"
                />
              </div>
              <div className="absolute left-[5%] bottom-[30%] sm:left-[20px] sm:bottom-[150px] w-[60px] sm:w-[87px] animate-float">
                <Image
                  src="/whychoose/32.png"
                  width={87}
                  height={79.06}
                  alt="element-1"
                />
              </div>
              <div className="absolute top-[3%] left-[5%] sm:top-[20px] sm:left-[30px] w-[60px] sm:w-[87px] animate-float">
                <Image
                  src="/whychoose/33.png"
                  width={87}
                  height={79.06}
                  alt="element-1"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block  book-element-7">
            <Image
              src="/whychoose/why_ele-5.png"
              width={100}
              height={100}
              alt="element-1"
            />
          </div>
          <div className="hidden lg:block  book-element-8">
            <Image
              src="/whychoose/why_ele-6.png"
              width={32}
              height={32}
              alt="element-1"
            />
          </div>
        </div>
      </div>
      <div className="bg-[var(--cardbackground)]">
        <div className="max-w-7xl py-20 mx-auto relative px-5">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-5">
              <div className="relative">
                <Image
                  src="/whychoose/why-3.png"
                  width={600}
                  height={600}
                  className="w-full sm:w-auto mx-auto"
                  alt="why"
                />
                {/* Floating Elements - Adjusted for Mobile */}
                <div className="absolute top-[85%] right-[10%] sm:top-[390px] sm:right-[60px] w-[60px] sm:w-[87px] animate-float">
                  <Image
                    src="/whychoose/30.png"
                    width={87}
                    height={79}
                    alt="element-1"
                  />
                </div>

                <div className="absolute top-[5%] right-[10%] sm:top-[30px] sm:right-[60px] w-[60px] sm:w-[87px] animate-float">
                  <Image
                    src="/whychoose/31.png"
                    width={87}
                    height={79}
                    alt="element-2"
                  />
                </div>

                <div className="absolute left-[5%] bottom-[30%] sm:left-[20px] sm:bottom-[150px] w-[60px] sm:w-[87px] animate-float">
                  <Image
                    src="/whychoose/32.png"
                    width={87}
                    height={79}
                    alt="element-3"
                  />
                </div>

                <div className="absolute top-[3%] left-[5%] sm:top-[20px] sm:left-[30px] w-[60px] sm:w-[87px] animate-float">
                  <Image
                    src="/whychoose/33.png"
                    width={87}
                    height={79}
                    alt="element-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6 mt-20">
              <h4 className="text-base font-medium text-[var(--subtitle)]">
                Choose?
              </h4>
              <h1 className="text-4xl font-bold">
                Why Should You <br />
                Choose{" "}
                <span className="text-[var(--banner-btn)]">SkelaEdu</span>
              </h1>
              <p className="text-2xl font-normal text-[var(--ptext)]">
                Work with our team and state-of-the-art technology and
                experience how they can be a game changer for your business
              </p>

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

              <div>
                <Link
                  href="#"
                  className="readmore text-white text-base font-medium"
                >
                  Read more
                </Link>
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
        </div>
      </div>
      <div className="max-w-7xl py-20 mx-auto relative px-5">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="flex-1 space-y-6 mt-20">
            <h4 className="text-base font-medium text-[var(--subtitle)]">
              Choose?
            </h4>
            <h1 className="text-4xl font-bold">
              Why Should You <br />
              Choose <span className="text-[var(--banner-btn)]">SkelaEdu</span>
            </h1>
            <p className="text-2xl font-normal text-[var(--ptext)]">
              Work with our team and state-of-the-art technology and experience
              how they can be a game changer for your business
            </p>

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

            <div>
              <Link
                href="#"
                className="readmore text-white text-base font-medium"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-5">
            <div className="relative">
              <Image
                src="/whychoose/why-4.png"
                width={600}
                height={600}
                className="w-full sm:w-auto mx-auto"
                alt="why"
              />
              <div className=" absolute top-[85%] right-[10%] sm:top-[390px] sm:right-[60px] w-[60px] sm:w-[87px] animate-float">
                <Image
                  src="/whychoose/30.png"
                  width={87}
                  height={79.06}
                  alt="element-1"
                />
              </div>
              <div className="absolute top-[5%] right-[10%] sm:top-[30px] sm:right-[60px] w-[60px] sm:w-[87px] animate-float">
                <Image
                  src="/whychoose/31.png"
                  width={87}
                  height={79.06}
                  alt="element-1"
                />
              </div>
              <div className="absolute left-[5%] bottom-[30%] sm:left-[20px] sm:bottom-[150px] w-[60px] sm:w-[87px] animate-float">
                <Image
                  src="/whychoose/32.png"
                  width={87}
                  height={79.06}
                  alt="element-1"
                />
              </div>
              <div className="absolute top-[3%] left-[5%] sm:top-[20px] sm:left-[30px] w-[60px] sm:w-[87px] animate-float">
                <Image
                  src="/whychoose/33.png"
                  width={87}
                  height={79.06}
                  alt="element-1"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block book-element-7">
            <Image
              src="/whychoose/why_ele-5.png"
              width={100}
              height={100}
              alt="element-1"
            />
          </div>
          <div className="hidden lg:block  book-element-8">
            <Image
              src="/whychoose/why_ele-6.png"
              width={32}
              height={32}
              alt="element-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsComponent;
