import NavbarComponent from "@/components/navbar/navbar";
import BannerComponent from "@/components/ui/Banner";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <NavbarComponent/>
    <BannerComponent/>
  </div>
  );
}
