"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { div } from "framer-motion/client";

const PortalComponent = () => {
  const images = [
    {
      src: "/portal/portal-1.png",
      title: "Pr. Bohra",
      description:
        "Bohra, our top-performing study abroad specialist, drives our organization’s student-centric focus with his expertise.",
    },
    {
      src: "/portal/portal-2.png",
      title: "Jane Doe",
      description:
        "Jane is an education expert who helps students achieve their study-abroad dreams.",
    },
    {
      src: "/portal/portal-1.png",
      title: "John Smith",
      description:
        "John is a leading career counselor specializing in international education.",
    },
    {
      src: "/portal/portal-2.png",
      title: "John Smith",
      description:
        "John is a leading career counselor specializing in international education.",
    },
    {
      src: "/portal/portal-1.png",
      title: "John Smith",
      description:
        "John is a leading career counselor specializing in international education.",
    },
  ];
  const users = [
    {
      name: "Mr. Kamaljith MS",
      email: "Kamal@gmail.com",
      image: "/portal/kaml.png",
      subImage: "/portal/elispe-1.svg",
      subImage1: "/portal/elispe-4.svg",
      tags: ["IELTS/PET/GRE Coach", "Skela Mentor", "communication", "Trainer"],
    },
    {
      name: "Neetu M",
      email: "Neethu@gmail.com",

      image: "/portal/char-1.png",
      subImage: "/portal/elispe-2.svg",
      subImage1: "/portal/elispe-6.svg",
      tags: ["IELTS/PET/GRE Coach", "Skela Mentor", "communication", "Trainer"],
    },
    {
      name: "Neetu M",
      email: "Neethu@gmail.com",

      image: "/portal/char-2.png",
      subImage: "/portal/elispe-3.svg",
      subImage1: "/portal/elispe-5.svg",
      tags: ["IELTS/PET/GRE Coach", "Skela Mentor", "communication", "Trainer"],
    },
  ];
  const settings = {
    dots: true, // Show pagination dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <>
      <div className="bg-[var(--cardbackground)] mt-20">
        <div className="py-16">
          <div className="max-w-7xl mx-auto ">
            <h4 className="text-[var(--subtitle)] text-2xl font-semibold">
              Choose Your Country
            </h4>
            <h1 className="text-5xl font-bold text-black mb-10">
              The World is your Campus!
            </h1>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div className="gap-0">
                  <div
                    key={index}
                    className="relative group w-[350px] h-[400px] rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={image.src}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                      alt={image.title}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col text-white opacity-0 transition-opacity duration-300 group-hover:bg-opacity-60 group-hover:opacity-50">
                      <div className="absolute bottom-5 left-5">
                        <h3 className="text-xl font-bold">{image.title}</h3>
                        <p className="text-sm mt-2 max-w-[200px]">
                          {image.description}
                        </p>
                        {/* Play Button */}
                        <button className="mt-4 bg-white text-green-500 p-3 rounded-full flex items-center justify-center w-10">
                          ▶
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto ">
          <div className="grid gap-4 text-center">
            <h4 className="text-[var(--subtitle)] text-2xl font-semibold">
              Face your fears.
            </h4>
            <div className="relative">
              <h2 className="text-[var(--h2color)] text-7xl font-semibold opacity-50  ">
                Innovation drives leadership.
              </h2>
              <h1 className="text-5xl font-bold text-black absolute top-10 left-96">
                I touch the future. I teach
              </h1>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-10 justify-center mt-32 text-center">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex-1 relative w-[300px] h-[300px] rounded-2xl overflow-hidden group"
              >
                {/* Background Image */}
                <Image
                  src={user.image}
                  width={300}
                  height={220}
                  className="w-full h-full object-contain transition-transform duration-300 bg-[var(--imagebackground)]"
                  alt={user.name}
                />
                <div className="absolute top-0">
                  <Image
                    src={user.subImage}
                    width={100}
                    height={100}
                    alt={user.name}
                  />
                </div>
                <div className="absolute right-0 -bottom-5">
                  <Image
                    src={user.subImage1}
                    width={100}
                    height={100}
                    alt={user.name}
                  />
                </div>

                {/* Expanding Content Div */}
                <div className="absolute rect bottom-0 left-0 w-full  p-4 rounded-t-2xl z-10 transition-all duration-300 h-[80px] group-hover:h-[75%]  group-hover:pb-10 overflow-hidden">
                  {/* Name & Email (Always Visible) */}
                  <div className="flex  items-center ">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{user.name}</h3>
                      <p className="text-sm text-black">{user.email}</p>
                    </div>
                    <div className="flex">
                      <Image
                        src="/portal/port-ele-1.svg"
                        width={40}
                        height={20}
                        alt="port-ele-1"
                      />
                    </div>
                  </div>

                  {/* Extra Content (Hidden Initially, Shows on Hover) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-10">
                      {user.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between mt-4">
                      <button className="px-4 py-2 bg-white border rounded-full border-none pl-10 pr-10">
                        Message
                      </button>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-full pl-10 pr-10">
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortalComponent;
