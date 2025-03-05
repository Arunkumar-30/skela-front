import Image from "next/image";

function CircleComponent(){
    return(
        <div className="circle ">

        <div className="relative w-full h-full">
             <div className="circle-img">
                 <Image src={'/banner/group-1.png'} width={272} height={358.15020751953125} alt="circle-img"/>
             </div>
       
        </div>
        </div>
    )
}

export default CircleComponent