'use client';


import Link from "next/link";
import TrustedPartner from "./trustedPartner";
import CircleComponent from "./circle";

const BannerComponent = ()=>{
    return(
        <>
        <div className="container relative  mx-auto  h-[800px]">
           <div className="py-16 mx-auto">
               <div className="flex flex-col justify-center gap-10 mt-32">
               <h1 className="text-5xl tracking-wide font-medium">Your Global <br />
               Dream Starts Here</h1>
               </div>
           </div>
           <div className=" mx-auto">
           <ul className="flex gap-20">
                <li><div>
                  <h4 className="font-bold text-2xl">15000+</h4>
                  <p className="text-lg">students trained</p>
                  </div></li>
                  <span className="circle-bord"></span>
                  <li><div >
                  <p  className="text-lg">pick from</p>
                  <h4 className="font-bold text-2xl">80000+ courses</h4>
                  </div></li>
              </ul>
           </div>
        
            <div className="flex mt-16">
              <Link href="#" className="circle-btn">Lets’s The Action Plan  </Link>
            </div>

             <div className="mt-4">
            <TrustedPartner/>
             </div>

          <CircleComponent/>
       
        </div>
        </>
    )
}

export default BannerComponent;