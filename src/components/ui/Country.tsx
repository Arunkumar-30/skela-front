"use client";

import Image from "next/image";
import UniversityPartner from "./universityPartner";
import Link from "next/link";

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
            <h1 className="lg:text-5xl text-4xl font-bold text-black absolute lg:top-10 lg:left-25 top-10 left-15">
              The World is your Campus!
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto flex justify-center items-center mt-20 mb-20">
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
      </div> */}

      <div className="max-w-7xl mx-auto mt-20">
        <div>
          <div className="grid gap-4 text-center relative">
            <Image
              src="/country/country-map.png"
              width={500}
              height={500}
              className="w-full h-[300px] lg:h-[708px]"
              alt="country-map"
            />
            <div className=" group relative h-full hidden md:block">
              <Image
                src="/country/flag-1.jpg"
                width={40}
                height={42}
                alt="flag-1"
                className="cursor-pointer absolute bottom-50 right-65"
              />
              <div
                className="
        bg-cover bg-no-repeat bg-center rounded-lg
        bg-[url('/country/e2.jpg')] 
      absolute right-0 bottom-[230px] z-50 transform p-3 -translate-x-1/2  border shadow-2xl bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform border-none h-60 w-80 md:w-96"
              >
                <div className="p-4 ml-32 border border-white rounded-2xl drop-shadow-lg backdrop-blur-3xl">
                  <h3 className="text-xl text-white font-bold">
                    Country Information
                  </h3>
                  <p className="text-xs text-white">
                    This is where you put your detailed content about the
                    country. This is where you put your detailed content about
                    the country. This is where you put your detailed content
                    about the country.
                  </p>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] rounded-2xl text-white text-sm pl-1 pr-1"
                  >
                    Read more
                  </Link>
                </div>
                <UniversityPartner />
              </div>
            </div>

            <div className="group relative h-full hidden md:block ">
              <Image
                src="/country/flag-2.jpg"
                width={40}
                height={42}
                alt="flag-1"
                className="absolute -top-120 right-80 cursor-pointer"
              />
              <div
                className="
        bg-cover bg-no-repeat bg-center rounded-lg
        bg-[url('/country/e2.jpg')] 
      absolute right-0 bottom-121  z-50 transform p-3 -translate-x-1/2  border shadow-2xl bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform border-none h-60 w-80 md:w-96"
              >
                <div className="p-4 ml-32 border border-white rounded-2xl drop-shadow-lg backdrop-blur-3xl">
                  <h3 className="text-xl text-white font-bold">
                    Country Information
                  </h3>
                  <p className="text-xs text-white">
                    This is where you put your detailed content about the
                    country. This is where you put your detailed content about
                    the country. This is where you put your detailed content
                    about the country.
                  </p>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] rounded-2xl text-white text-sm pl-1 pr-1"
                  >
                    Read more
                  </Link>
                </div>
                <UniversityPartner />
              </div>
            </div>
            <div className="group relative h-full hidden md:block  ">
              <Image
                src="/country/flag-3.png"
                width={40}
                height={42}
                alt="flag-1"
                className="absolute -top-100 right-101 cursor-pointer "
              />
              <div
                className="
        bg-cover bg-no-repeat bg-center rounded-lg
        bg-[url('/country/e2.jpg')] 
      absolute right-0 bottom-101  z-50 transform p-3 -translate-x-1/2  border shadow-2xl bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform border-none h-60 w-80 md:w-96"
              >
                <div className="p-4 ml-32 border border-white rounded-2xl drop-shadow-lg backdrop-blur-3xl">
                  <h3 className="text-xl text-white font-bold">
                    Country Information
                  </h3>
                  <p className="text-xs text-white">
                    This is where you put your detailed content about the
                    country. This is where you put your detailed content about
                    the country. This is where you put your detailed content
                    about the country.
                  </p>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] rounded-2xl text-white text-sm pl-1 pr-1"
                  >
                    Read more
                  </Link>
                </div>
                <UniversityPartner />
              </div>
            </div>
            <div className="group relative h-full hidden md:block">
              <Image
                src="/country/flag-4.jpg"
                width={40}
                height={42}
                alt="flag-1"
                className="  absolute -top-130 left-160 cursor-pointer"
              />
              <div
                className="
        bg-cover bg-no-repeat bg-center rounded-lg
        bg-[url('/country/e2.jpg')] 
      absolute right-60 bottom-131  z-50 transform p-3 -translate-x-1/2  border shadow-2xl bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform border-none h-60 w-80 md:w-96"
              >
                <div className="p-4 ml-32 border border-white rounded-2xl drop-shadow-lg backdrop-blur-3xl">
                  <h3 className="text-xl text-white font-bold">
                    Country Information
                  </h3>
                  <p className="text-xs text-white">
                    This is where you put your detailed content about the
                    country. This is where you put your detailed content about
                    the country. This is where you put your detailed content
                    about the country.
                  </p>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] rounded-2xl text-white text-sm pl-1 pr-1"
                  >
                    Read more
                  </Link>
                </div>
                <UniversityPartner />
              </div>
            </div>
            <div className="group relative h-full hidden md:block ">
              <Image
                src="/country/flag-5.jpg"
                width={40}
                height={42}
                alt="flag-1"
                className="absolute -top-90 left-148 cursor-pointer"
              />
              <div
                className="
        bg-cover bg-no-repeat bg-center rounded-lg
        bg-[url('/country/e2.jpg')] 
      absolute right-60 bottom-91  z-50 transform p-3 -translate-x-1/2  border shadow-2xl bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform border-none h-60 w-80 md:w-96"
              >
                <div className="p-4 ml-32 border border-white rounded-2xl drop-shadow-lg backdrop-blur-3xl">
                  <h3 className="text-xl text-white font-bold">
                    Country Information
                  </h3>
                  <p className="text-xs text-white">
                    This is where you put your detailed content about the
                    country. This is where you put your detailed content about
                    the country. This is where you put your detailed content
                    about the country.
                  </p>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] rounded-2xl text-white text-sm pl-1 pr-1"
                  >
                    Read more
                  </Link>
                </div>
                <UniversityPartner />
              </div>
            </div>
            <div className="group relative h-ful hidden md:block  ">
              <Image
                src="/country/flag-6.jpg"
                width={40}
                height={42}
                alt="flag-1"
                className="absolute bottom-46 left-89 cursor-pointer"
              />
              <div
                className="
        bg-cover bg-no-repeat bg-center rounded-lg
        bg-[url('/country/e2.jpg')] 
      absolute bottom-54 left-89  z-50 transform p-3 -translate-x-1/2  border shadow-2xl bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform border-none h-60 w-80 md:w-96"
              >
                <div className="p-4 ml-32 border border-white rounded-2xl drop-shadow-lg backdrop-blur-3xl">
                  <h3 className="text-xl text-white font-bold">
                    Country Information
                  </h3>
                  <p className="text-xs text-white">
                    This is where you put your detailed content about the
                    country. This is where you put your detailed content about
                    the country. This is where you put your detailed content
                    about the country.
                  </p>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] rounded-2xl text-white text-sm pl-1 pr-1"
                  >
                    Read more
                  </Link>
                </div>
                <UniversityPartner />
              </div>
            </div>

            <div className="group relative h-full hidden md:block  ">
              <Image
                src="/country/canda.jpg"
                width={40}
                height={42}
                alt="flag-1"
                className="absolute -top-140 left-53 cursor-pointer"
              />
              <div
                className="
        bg-cover bg-no-repeat bg-center rounded-lg
        bg-[url('/country/e2.jpg')] 
      absolute bottom-141 left-60  z-50 transform p-3 -translate-x-1/2  border shadow-2xl bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform border-none h-60 w-80 md:w-96"
              >
                <div className="p-4 ml-32 border border-white rounded-2xl drop-shadow-lg backdrop-blur-3xl">
                  <h3 className="text-xl text-white font-bold">
                    Country Information
                  </h3>
                  <p className="text-xs text-white">
                    This is where you put your detailed content about the
                    country. This is where you put your detailed content about
                    the country. This is where you put your detailed content
                    about the country.
                  </p>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] rounded-2xl text-white text-sm pl-1 pr-1"
                  >
                    Read more
                  </Link>
                </div>
                <UniversityPartner />
              </div>
            </div>

            <div className="group relative h-full hidden md:block">
              <Image
                src="/country/america.png"
                width={40}
                height={42}
                alt="flag-1"
                className="absolute -top-110 left-53 cursor-pointer"
              />
              <div
                className="
        bg-cover bg-no-repeat bg-center rounded-lg
        bg-[url('/country/e2.jpg')] 
      absolute bottom-[444px] left-53 z-50 transform p-3 -translate-x-1/2  border shadow-2xl bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform border-none h-60 w-80 md:w-96"
              >
                <div className="p-4 ml-32 border border-white rounded-2xl drop-shadow-lg backdrop-blur-3xl">
                  <h3 className="text-xl text-white font-bold">
                    Country Information
                  </h3>
                  <p className="text-xs text-white">
                    This is where you put your detailed content about the
                    country. This is where you put your detailed content about
                    the country. This is where you put your detailed content
                    about the country.
                  </p>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] rounded-2xl text-white text-sm pl-1 pr-1"
                  >
                    Read more
                  </Link>
                </div>
                <UniversityPartner />
              </div>
            </div>

            <div className="group relative h-full hidden md:block">
              <Image
                src="/country/india.png"
                width={40}
                height={42}
                alt="flag-1"
                className="absolute bottom-98 right-93 cursor-pointer"
              />
              <div
                className="
        bg-cover bg-no-repeat bg-center rounded-lg
        bg-[url('/country/e2.jpg')] 
      absolute right-0 bottom-105 z-50 transform p-3 -translate-x-1/2  border shadow-2xl bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform border-none h-60 w-80 md:w-96"
              >
                <div className="p-4 ml-32 border border-white rounded-2xl drop-shadow-lg backdrop-blur-3xl">
                  <h3 className="text-xl text-white font-bold">
                    Country Information
                  </h3>
                  <p className="text-xs text-white">
                    This is where you put your detailed content about the
                    country. This is where you put your detailed content about
                    the country. This is where you put your detailed content
                    about the country.
                  </p>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] rounded-2xl text-white text-sm pl-1 pr-1"
                  >
                    Read more
                  </Link>
                </div>
                <UniversityPartner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryComponent;
// "use client";
// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import { Icon, LatLng, divIcon } from "leaflet";
// import "leaflet/dist/leaflet.css";

// const MapComponent = () => {
//   const [destination, setDestination] = useState<{
//     name: string;
//     lat: number;
//     lon: number;
//   }>({
//     name: "India",
//     lat: 20.5937,
//     lon: 78.9629,
//   });

//   const countryData: Record<
//     string,
//     { name: string; lat: number; lon: number }
//   > = {
//     India: { name: "India", lat: 20.5937, lon: 78.9629 },
//     Canada: { name: "Canada", lat: 56.1304, lon: -106.3468 },
//     France: { name: "France", lat: 46.6034, lon: 1.8883 },
//     Germany: { name: "Germany", lat: 51.1657, lon: 10.4515 },
//   };

//   const planeIcon = divIcon({
//     html: "✈️",
//     className: "text-lg",
//     iconSize: [30, 30],
//   });

//   const customIcon = new Icon({
//     iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//     iconSize: [30, 30],
//   });

//   return (
//     <div className="max-w-7xl mx-auto text-center mt-10">
//       <h2 className="text-2xl font-bold mb-4">Select Your Destination</h2>

//       <select
//         className="border p-2 rounded-lg mb-4"
//         onChange={(e) => {
//           const selected = e.target.value as keyof typeof countryData;
//           setDestination(countryData[selected]);
//         }}
//       >
//         {Object.keys(countryData).map((country) => (
//           <option key={country} value={country}>
//             {country}
//           </option>
//         ))}
//       </select>

//       <MapContainer
//         center={[20.5937, 78.9629]}
//         zoom={4}
//         style={{ width: "100%", height: "500px" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker position={[20.5937, 78.9629]} icon={customIcon}>
//           <Popup>India</Popup>
//         </Marker>
//         <Marker position={[destination.lat, destination.lon]} icon={customIcon}>
//           <Popup>{destination.name}</Popup>
//         </Marker>
//         <AnimatedFlight
//           from={[20.5937, 78.9629]}
//           to={[destination.lat, destination.lon]}
//         />
//       </MapContainer>
//     </div>
//   );
// };

// const AnimatedFlight = ({
//   from,
//   to,
// }: {
//   from: [number, number];
//   to: [number, number];
// }) => {
//   const [planePosition, setPlanePosition] = useState<LatLng | null>(null);
//   const map = useMap();

//   useEffect(() => {
//     let animationFrame: number;
//     const steps = 100;
//     let step = 0;

//     const animate = () => {
//       if (step <= steps) {
//         const lat = from[0] + ((to[0] - from[0]) * step) / steps;
//         const lon = from[1] + ((to[1] - from[1]) * step) / steps;
//         setPlanePosition(new LatLng(lat, lon));
//         step++;
//         animationFrame = requestAnimationFrame(animate);
//       }
//     };

//     animate();
//     map.flyTo(to, 5, { duration: 3 });

//     return () => cancelAnimationFrame(animationFrame);
//   }, [from, to, map]);

//   return planePosition ? (
//     <Marker
//       position={planePosition}
//       icon={divIcon({ html: "✈️", className: "text-lg" })}
//     />
//   ) : null;
// };

// export default MapComponent;

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const countryData = {
//   India: { name: "India", x: 400, y: 500 },
//   Canada: { name: "Canada", x: 150, y: 200 },
//   France: { name: "France", x: 600, y: 250 },
//   Germany: { name: "Germany", x: 620, y: 230 },
// };

// const MapComponent = () => {
//   const [destination, setDestination] = useState(countryData.India);
//   const [planePosition, setPlanePosition] = useState(countryData.India);

//   const handleDestinationChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const selectedCountry = event.target.value;
//     setDestination(countryData[selectedCountry]);

//     setTimeout(() => {
//       setPlanePosition(countryData[selectedCountry]);
//     }, 500);
//   };

//   return (
//     <div className="relative w-full h-[900px] flex flex-col items-center">
//       <h2 className="text-2xl font-bold mb-4">Select Your Destination</h2>

//       <select
//         className="border p-2 rounded-lg mb-4"
//         onChange={handleDestinationChange}
//       >
//         {Object.keys(countryData).map((country) => (
//           <option key={country} value={country}>
//             {country}
//           </option>
//         ))}
//       </select>

//       <div className="relative w-full h-full flex justify-center items-center">
//         <Image
//           src="/country/country-map.png"
//           width={800}
//           height={600}
//           className="w-full h-[700px]"
//           alt="World Map"
//           unoptimized
//         />

//         <svg className="absolute w-full h-full" viewBox="0 0 800 600">
//           <path
//             d={`M${countryData.India.x},${countryData.India.y} Q500,100 ${planePosition.x},${planePosition.y}`}
//             stroke="red"
//             strokeWidth="2"
//             fill="transparent"
//             strokeDasharray="5,5"
//           />
//         </svg>

//         <motion.img
//           src="/country/flight.svg"
//           alt="Airplane"
//           className="absolute w-10 h-10"
//           initial={{ x: countryData.India.x, y: countryData.India.y }}
//           animate={{ x: planePosition.x, y: planePosition.y }}
//           transition={{ duration: 3, ease: "easeInOut" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default MapComponent;
// "use client";
// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import { Icon, divIcon } from "leaflet";
// import "leaflet/dist/leaflet.css";

// const countryData: Record<string, { name: string; lat: number; lon: number }> =
//   {
//     India: { name: "India", lat: 20.5937, lon: 78.9629 },
//     Canada: { name: "Canada", lat: 56.1304, lon: -106.3468 },
//     France: { name: "France", lat: 46.6034, lon: 1.8883 },
//     Germany: { name: "Germany", lat: 51.1657, lon: 10.4515 },
//   };

// const customIcon = new Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//   iconSize: [30, 30],
// });

// const MapComponent = () => {
//   const [destination, setDestination] = useState(countryData.Canada);
//   const mapCenter: [number, number] = [20.5937, 78.9629];

//   const handleDestinationChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const selectedCountry = event.target.value as keyof typeof countryData;
//     setDestination(countryData[selectedCountry]);
//   };

//   return (
//     <div className="max-w-7xl mx-auto text-center mt-10">
//       <h2 className="text-2xl font-bold mb-4">Select Your Destination</h2>
//       <select
//         className="border p-2 rounded-lg mb-4"
//         onChange={handleDestinationChange}
//       >
//         {Object.keys(countryData)
//           .filter((country) => country !== "India")
//           .map((country) => (
//             <option key={country} value={country}>
//               {country}
//             </option>
//           ))}
//       </select>
//       <MapContainer
//         center={mapCenter}
//         zoom={3}
//         style={{ width: "100%", height: "500px" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker
//           position={[countryData.India.lat, countryData.India.lon]}
//           icon={customIcon}
//         >
//           <Popup>India</Popup>
//         </Marker>
//         <Marker position={[destination.lat, destination.lon]} icon={customIcon}>
//           <Popup>{destination.name}</Popup>
//         </Marker>
//         <AnimatedFlight
//           from={[countryData.India.lat, countryData.India.lon]}
//           to={[destination.lat, destination.lon]}
//         />
//       </MapContainer>
//     </div>
//   );
// };

// const AnimatedFlight = ({
//   from,
//   to,
// }: {
//   from: [number, number];
//   to: [number, number];
// }) => {
//   const [planePosition, setPlanePosition] = useState<[number, number]>(from);
//   const [rotation, setRotation] = useState(0);
//   const map = useMap();

//   useEffect(() => {
//     let step = 0;
//     const steps = 100;
//     const intervalTime = 50;
//     setPlanePosition(from);

//     const latStep = (to[0] - from[0]) / steps;
//     const lonStep = (to[1] - from[1]) / steps;

//     const interval = setInterval(() => {
//       step++;
//       if (step >= steps) {
//         clearInterval(interval);
//         setPlanePosition(to);
//       } else {
//         const newPos: [number, number] = [
//           from[0] + latStep * step,
//           from[1] + lonStep * step,
//         ];
//         setPlanePosition(newPos);
//       }
//     }, intervalTime);

//     map.flyTo(to, 4, { duration: 3 });

//     return () => clearInterval(interval);
//   }, [to, map, from]);

//   return (
//     <Marker
//       position={planePosition}
//       icon={divIcon({
//         html: `<div style="transform: rotate(${rotation}deg); font-size: 20px;">✈️</div>`,
//         className: "text-lg",
//         iconSize: [30, 30],
//       })}
//     />
//   );
// };

// export default MapComponent;
