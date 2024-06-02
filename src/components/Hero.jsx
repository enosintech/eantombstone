import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Hero = () => {
    const hero = useRef(null);

    useGSAP(() => {
        let tl2 = gsap.timeline({
            defaults: {
                ease: "none",
            },
            scrollTrigger: {
                trigger: hero.current,
                pin: true,
                end: "bottom 0",
                scrub: true,
            }
        })

        tl2.to(".grow", {
            height: "100%",
          })
      
    }, [])

  return (
    <div ref={hero} className="h-[100vh] w-full p-10">
        <div className="bg-red-500 grow w-[45%] h-10 rounded-[20px]"></div>
    </div>
  )
}

export default Hero
