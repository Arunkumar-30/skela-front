"use client";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L, { Icon, divIcon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { image } from "framer-motion/client";

// Country data with lat/lon and flag image URL
const countryData = {
  India: {
    name: "India",
    lat: 20.5937,
    lon: 78.9629,
    flag: "/country/india.png",
  },
  Canada: {
    name: "Canada",
    lat: 56.1304,
    lon: -106.3468,
    flag: "/country/canada.jpg",
  },
  France: {
    name: "France",
    lat: 46.6034,
    lon: 1.8883,
    flag: "/country/france.png",
  },
  Germany: {
    name: "Germany",
    lat: 51.1657,
    lon: 10.4515,
    flag: "/country/germany.jpg",
  },
  Algeria: {
    name: "Algeria",
    lat: 28.0339,
    lon: 1.6596,
    flag: "/country/algeria.jpg",
  },
  America: {
    name: "United States",
    lat: 37.0902,
    lon: -95.7129,
    flag: "/country/america.png",
  },
  NewZealand: {
    name: "New Zealand",
    lat: -40.9006,
    lon: 174.886,
    flag: "/country/newzealand.png",
  },
  Peru: { name: "Peru", lat: -9.19, lon: -75.0152, flag: "/country/peru.jpg" },
};

const MapComponent = () => {
  const [destination, setDestination] = useState(countryData.India);
  const [popup, setPopup] = useState("");
  const mapRef = useRef(null);

  const createFlagIcon = (flagUrl: string) =>
    new Icon({
      iconUrl: flagUrl,
      iconSize: [40, 30], // Adjust the flag icon size as needed
      iconAnchor: [20, 30], // Anchor it at the bottom
    });

  const handleDestinationChange = (event: { target: { value: any } }) => {
    const selectedCountry = event.target.value;
    setDestination(countryData[selectedCountry]);
    // Scroll to map section smoothly
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
  useEffect(() => {
    if (destination) {
      // Show popup automatically after 1 second
      setTimeout(() => {
        setPopup(destination);
      }, 300);
    }
  }, [destination]);

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
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid gap-6 justify-center mt-14">
          <div className="bg-[url(/country/country.png)] bg-auto bg-center bg-no-repeat w-[550px] h-[200px]">
            <p>Knowledge beyond boundaries.</p>
            <div className="flex justify-center items-center gap-10 mt-16">
              <div className="w-[220px] h-[48px]">
                <form>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={handleDestinationChange}
                  >
                    <option value="" disabled>
                      Study Destination
                    </option>
                    {Object.keys(countryData).map((country) => (
                      <option key={country} value={country}>
                        {countryData[country].name}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div className="mb-2">
                <button
                  type="button"
                  className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-[var(--banner-btn)] bg-white rounded-lg border border-[var(--banner-btn)] focus:ring-4 focus:outline-none focus:ring-blue-300"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <MapContainer
          center={[destination.lat, destination.lon]}
          zoom={3}
          style={{ width: "100%", height: "500px" }}
          whenCreated={(map) => {
            map.flyTo([destination.lat, destination.lon], 3, {
              duration: 2,
            });
          }}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

          {/* Render flag markers for each country */}
          {Object.keys(countryData).map((countryKey) => {
            const country = countryData[countryKey];
            return (
              <Marker
                key={country.name}
                position={[country.lat, country.lon]}
                icon={createFlagIcon(country.flag)}
                className="relative"
              >
                <Popup>{country.name}</Popup>
              </Marker>
            );
          })}

          {/* Animated flight marker */}
          <AnimatedFlight
            from={[countryData.India.lat, countryData.India.lon]}
            to={[destination.lat, destination.lon]}
          />
        </MapContainer>
      </div>
    </>
  );
};

const AnimatedFlight = ({ from, to }) => {
  const [planePosition, setPlanePosition] = useState(from);
  const map = useMap();

  useEffect(() => {
    let step = 0;
    const steps = 100;
    const intervalTime = 50;
    setPlanePosition(from);

    const latStep = (to[0] - from[0]) / steps;
    const lonStep = (to[1] - from[1]) / steps;

    const interval = setInterval(() => {
      step++;
      if (step >= steps) {
        clearInterval(interval);
        setPlanePosition(to);
      } else {
        setPlanePosition([from[0] + latStep * step, from[1] + lonStep * step]);
      }
    }, intervalTime);

    map.flyTo(to, 4, { duration: 3 });
    return () => clearInterval(interval);
  }, [to, map, from]);

  return (
    <Marker
      position={planePosition}
      icon={divIcon({ html: "✈️", className: "text-lg", iconSize: [30, 30] })}
    />
  );
};

export default MapComponent;
