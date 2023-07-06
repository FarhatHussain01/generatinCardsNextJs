import Image from "next/image"
import heroImg from "@/app/assests/images/photo-grid.png"
import Wrapper from "./Wrapper"

const Hero = () => {
  return (
    <section>
      <Wrapper>
      <div className="flex flex-col mt-10 p-5 z-0">
        {/* imaage */}
        <div className="max-w-[400px] md:max-w-xl self-center mb-10">
        <Image src={heroImg} alt ="hero-img"  />
        </div>
   
        {/* heading */}
        <div className="max-w-md mt-6">
          <h1 className="font-bold text-5xl mb-4">Online Experience</h1>
          <p className="text-xl text-gray-900">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </div>
      </Wrapper>
      </section>
  )
}

export default Hero