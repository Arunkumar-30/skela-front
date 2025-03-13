import NavbarComponent from "@/components/navbar/navbar";
import BannerComponent from "@/components/ui/Banner";
import BlogComponent from "@/components/ui/Blog";
import CircularSlider from "@/components/ui/circle";
import CountryComponent from "@/components/ui/Country";
import LoanComponent from "@/components/ui/Loan";
import NetworkComponent from "@/components/ui/Network";
import OurPartnersComponent from "@/components/ui/OurPartners";

import PortalComponent from "@/components/ui/Portal";
import SliderNavigation from "@/components/ui/Vertical";
import WhyChooseUsComponent from "@/components/ui/WhyChooseUs";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <NavbarComponent />
        <BannerComponent />
      </div>
      <div className="container mx-auto h-[335px] relative px-5">
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <h1 className="text-[32px] sm:text-[40px] text-center font-semibold text-[#0F2F64]">
            We are an international education <br className="hidden sm:block" />
            portal with over 10 years of <br className="hidden sm:block" />
            experience
          </h1>
        </div>

        {/* Read More Button */}
        <div className="flex justify-center">
          <Link
            href="#"
            className="w-[145px] h-[58px] rounded-lg border text-center pt-4 text-[var(--banner-btn)]"
          >
            Read more
          </Link>
        </div>

        {/* Floating Elements - Hidden on Mobile */}
        <div className="absolute hidden sm:block element-1">
          <Image
            src="/edu-element/element-1.png"
            width={150}
            height={70.25}
            alt="element-1"
          />
        </div>

        <div className="absolute hidden sm:block element-2">
          <Image
            src="/edu-element/element-2.png"
            width={150}
            height={70.25}
            alt="element-2"
          />
        </div>

        <div className="absolute hidden sm:block element-3 animate-float">
          <Image
            src="/edu-element/element-3.png"
            width={150}
            height={70.25}
            alt="element-3"
          />
        </div>

        <div className="absolute hidden sm:block element-4 animate-float">
          <Image
            src="/edu-element/element-4.png"
            width={150}
            height={70.25}
            alt="element-4"
          />
        </div>
      </div>

      <section>
        <SliderNavigation />
      </section>
      {/* <WhyChooseUsComponent /> */}
      <section>
        {" "}
        <CountryComponent />
        <PortalComponent />
        <LoanComponent />
        <NetworkComponent />
        <OurPartnersComponent />
        <BlogComponent />
      </section>
    </>
  );
}
