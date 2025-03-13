// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const SliderNavigation = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const totalSlides = 4;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sliderRef.current) return;
//       const sliderTop = sliderRef.current.offsetTop;
//       const scrollPosition = window.scrollY;

//       if (scrollPosition >= sliderTop && activeSlide < totalSlides) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeSlide]);

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       if (!isSticky || isScrolling) return;

//       setIsScrolling(true);
//       setTimeout(() => setIsScrolling(false), 800);

//       if (e.deltaY > 0 && activeSlide < totalSlides - 1) {
//         e.preventDefault();
//         goToSlide(activeSlide + 1);
//       } else if (e.deltaY < 0 && activeSlide > 0) {
//         e.preventDefault();
//         goToSlide(activeSlide - 1);
//       }
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [activeSlide, isScrolling, isSticky]);

//   const goToSlide = (index: number) => {
//     if (index < 0 || index >= totalSlides) return;

//     setActiveSlide(index);
//     gsap.to(containerRef.current, {
//       y: -index * window.innerHeight,
//       duration: 0.8,
//       ease: "power2.inOut",
//     });

//     if (index === totalSlides - 1) {
//       setTimeout(() => setIsSticky(false), 800);
//     }
//   };

//   return (
//     <div>

//       <div
//         ref={sliderRef}
//         className={`w-full transition-all ${
//           isSticky ? "fixed top-0 left-0 h-screen max-h-[720px]" : "relative"
//         }`}
//       >
//         <div ref={containerRef} className="absolute w-full h-screen max-h-[720px]">

//           <div className="w-full h-screen max-h-[720px] flex items-center justify-center bg-white">
//             <h1 className="text-4xl font-bold">Slide 1 Content Here</h1>
//           </div>

//           <div className="w-full h-screen max-h-[720px] flex items-center justify-center bg-gray-200">
//             <h1 className="text-4xl font-bold">Slide 2 Content Here</h1>
//           </div>

//           <div className="w-full h-screen max-h-[720px] flex items-center justify-center bg-gray-300">
//             <h1 className="text-4xl font-bold">Slide 3 Content Here</h1>
//           </div>

//           <div className="w-full h-screen max-h-[720px] flex items-center justify-center bg-gray-400">
//             <h1 className="text-4xl font-bold">Slide 4 Content Here</h1>
//           </div>
//         </div>
//       </div>

//       {isSticky && (
//         <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
//           {[0, 1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//                 activeSlide === i ? "bg-white scale-125" : "bg-gray-500"
//               }`}
//               onClick={() => goToSlide(i)}
//             />
//           ))}
//         </div>
//       )}

//       <div className="w-full h-screen max-h-[720px] flex items-center justify-center bg-green-500">
//         <h1 className="text-white text-5xl font-bold">Next Section Content</h1>
//       </div>
//     </div>
//   );
// };

// export default SliderNavigation;
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SliderNavigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const panels = panelsRef.current;

    panels.forEach((panel) => {
      if (!panel) return;
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: true, // Ensure normal spacing
      });
    });
  }, []);

  return (
    <div className="relative w-full">
      <div ref={containerRef} className="overflow-hidden ">
        <div ref={(el) => (panelsRef.current[0] = el)} id="one">
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
        </div>
        <div
          ref={(el) => (panelsRef.current[1] = el)}
          id="two"
          className="bg-white"
        >
          <div className="max-w-7xl py-20 mx-auto  px-5">
            <div className="flex flex-col-reverse lg:flex-row gap-10">
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
              <div className="absolute -bottom-[0px] hidden lg:block">
                <Image
                  src="/whychoose/why_ele-5.png"
                  width={100}
                  height={100}
                  alt="element-1"
                />
              </div>
              <div className="absolute -bottom-3 hidden lg:block">
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
        <div ref={(el) => (panelsRef.current[2] = el)} id="three">
          <div className="bg-[var(--cardbackground)]">
            <div className="max-w-7xl py-20 mx-auto  px-5">
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
        </div>
        <div
          ref={(el) => (panelsRef.current[3] = el)}
          id="four"
          className="bg-white"
        >
          <div className="max-w-7xl py-20 mx-auto  px-5">
            <div className="flex flex-col-reverse lg:flex-row gap-10">
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
        </div>
      </div>
    </div>
  );
};

export default SliderNavigation;
