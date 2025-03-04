'use client';

import Image from "next/image";
const members = [
  { id: 1, src: '/banner/image-1.png', name: 'Member 1' },
  { id: 2, src: '/banner/image-2.png', name: 'Member 2' },
  { id: 3, src: '/banner/image-3.png', name: 'Member 3' },
  { id: 4, src: '/banner/image-4.png', name: 'Member 4' },
  { id: 5, src: '/banner/image-5.png', name: 'Member 5' },
];
const BannerComponent = ()=>{
    return(
        <>
        <div className="max-w-[1280px]">
          <div className="flex flex-col justify-center gap-10">
            <div className="flex">
               <h1>Your Global 
               Dream Starts Here</h1>
            </div>
            <div className="circle">
            <div>
                 <div className="circle-img">
                     <Image src={'/banner/group-1.png'} width={272} height={358.15020751953125} alt="circle-img"/>
                 </div>
                 <div className="circle-alt ">
                  {
                    members.map((data=>(
                      <>
                        <Image src={data.src} alt={data.name} width={64} height={64}/>
                      </>
                    )))
                  }
                 </div>
           
            </div>
            </div>
         

          </div>
       
        </div>
        </>
    )
}

export default BannerComponent;