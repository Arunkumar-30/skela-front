import NavbarComponent from "@/components/navbar/navbar";
import BannerComponent from "@/components/ui/Banner";
import BlogComponent from "@/components/ui/Blog";
import CountryComponent from "@/components/ui/Country";
import LoanComponent from "@/components/ui/Loan";
import NetworkComponent from "@/components/ui/Network";
import OurPartnersComponent from "@/components/ui/OurPartners";
import TrustedPartner from "@/components/ui/OurPartners";

import PortalComponent from "@/components/ui/Portal";
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
      <div className="container mx-auto h-[335px] relative">
        <div className="flex justify-center mb-6 ">
          <h1 className="text-[40px] text-center font-semibold text-[#0F2F64]">
            We are an international education <br /> portal with over 10 years
            of <br /> experience
          </h1>
        </div>
        <div className="flex justify-center">
          <Link
            href="#"
            className="w-[145px] h-[58px] rounded-lg border text-center pt-4 text-[var(--banner-btn)]"
          >
            Read more
          </Link>
        </div>
        <div className="element-1">
          <Image
            src="/edu-element/element-1.png"
            width={150}
            height={70.25}
            alt="element-1"
          />
        </div>
        <div className="element-2">
          <Image
            src="/edu-element/element-2.png"
            width={150}
            height={70.25}
            alt="element-1"
          />
        </div>
        <div className="element-3">
          <Image
            src="/edu-element/element-3.png"
            width={150}
            height={70.25}
            alt="element-1"
          />
        </div>
        <div className="element-4">
          <Image
            src="/edu-element/element-4.png"
            width={150}
            height={70.25}
            alt="element-1"
          />
        </div>
      </div>

      <WhyChooseUsComponent />
      <CountryComponent />
      <PortalComponent />
      <LoanComponent />
      <NetworkComponent />
      <OurPartnersComponent />
      <BlogComponent />
    </>
  );
}
