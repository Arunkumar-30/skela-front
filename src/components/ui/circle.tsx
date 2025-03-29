// "use client";
// import Image from "next/image";

// function CircleComponent() {
//   return (
//     <div className="circle ">

//       <div className="circle-allImg">
//         <div className="icon-block">
//           <Image
//             src="/banner/image-1.png"
//             width={100}
//             height={100}
//             alt="image-1"
//             className="Image"
//           />
//         </div>
//         <div className="icon-block">
//           <Image
//             src="/banner/image-2.png"
//             width={100}
//             height={100}
//             alt="image-1"
//             className="Image"
//           />
//         </div>
//         <div className="icon-block">
//           <Image
//             src="/banner/image-3.png"
//             width={100}
//             height={100}
//             alt="image-1"
//             className="Image"
//           />
//         </div>
//         <div className="icon-block">
//           <Image
//             src="/banner/image-4.png"
//             width={100}
//             height={100}
//             alt="image-1"
//             className="Image"
//           />
//         </div>
//       </div>
//       <div className="center-logo">
//         {" "}
//         <Image
//           src="/banner/group-1.png"
//           width={273}
//           height={358}
//           alt="group-1"
//         />
//       </div>
//       <div className="circle-dot">
//         <Image src="/banner/dot.svg" width={560} height={560} alt="dot-svg" />
//       </div>
//     </div>
//   );
// }

// export default CircleComponent;

import { useState, useEffect } from "react";
import Image from "next/image";

const centerImages = [
  "/banner/group-1.png",
  "/banner/skela-2.png",
  "/banner/skela-3.png",
]; // Add multiple center images

const RotatingIcons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % centerImages.length);
    }, 6000);

    return () => clearTimeout(interval); // Cleanup function
  }, [currentIndex]);

  return (
    <div className="circle hidden lg:block">
      <div className="">
        <div className="circle-allImg">
          {/* Rotating Icons */}
          {["image-1", "image-2", "image-3", "image-4"].map((img, index) => (
            <div
              className="icon-block"
              key={index}
              style={{ "--i": index } as React.CSSProperties}
            >
              <Image
                src={`/banner/${img}.png`}
                width={100}
                height={100}
                alt={img}
                className="Image"
              />
            </div>
          ))}
        </div>

        {/* Center Changing Image */}
        <div className="center-logo">
          <Image
            src={centerImages[currentIndex]}
            width={273}
            height={358}
            className="object-fit"
            alt={`group-${currentIndex + 1}`}
          />
        </div>
      </div>

      <div className="circle-dot">
        <Image src="/banner/dot.svg" width={560} height={560} alt="dot-svg" />
      </div>
    </div>
  );
};

export default RotatingIcons;

{
  /* <div className="relative w-full h-full">
        <div className="circle-img ">
          <Image
            src={"/banner/group-1.png"}
            width={272}
            height={358.15020751953125}
            alt="circle-img"
          />
        </div>{" "}
        <div>
          <div className="circle-dot relative ">
            <Image src="/banner/dot.svg" width={560} height={560} alt="dot" />
            <div className="circle-subImg">
              <Image
                src="/banner/image-2.png"
                width={80}
                height={80}
                alt="dot"
              />
            </div>
            <div className="circle-subImg1">
              <Image
                src="/banner/image-1.png"
                width={80}
                height={80}
                alt="dot"
              />
            </div>
            <div className="circle-subImg2">
              <Image
                src="/banner/image-3.png"
                width={80}
                height={80}
                alt="dot"
              />
            </div>
            <div className="circle-subImg3">
              <Image
                src="/banner/image-4.png"
                width={80}
                height={80}
                alt="dot"
              />
            </div>
            <div className="circle-subImg4">
              <Image
                src="/banner/image-5.png"
                width={80}
                height={80}
                alt="dot"
              />
            </div>
          </div>
        </div>
      </div> */
}
