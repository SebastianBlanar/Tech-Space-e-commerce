import { Carousel } from "flowbite-react";

export function SliderComponent({children}){
    return (
            <Carousel slideInterval={3000000} indicators={false}> 
            <div className="relative  md:w-screen md:h-screen overflow-hidden">
                <video autoPlay loop  muted className="w-full h-full object-cover">
                    <source src="/videos/slide1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
                <div className="absolute inset-0 flex items-end justify-center z-20">
                    {children}
                </div>
            </div>
            <div className="relative w-screen h-screen overflow-hidden">
                <video autoPlay loop  muted className="w-full h-full object-cover ">
                    <source src={"/videos/slide2.mp4"} type="video/mp4" />
                </video>
            </div>
            </Carousel>
        
    )
}
