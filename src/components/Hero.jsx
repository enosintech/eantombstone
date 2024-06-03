import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

import { boldArrowImg, chevronIcon, heroVideoMain } from "../lib";
import { noTriggerToAnimations } from "../utils/animations";

const Hero = () => {
    const hero = useRef(null);
    const grow = useRef(null);

    useGSAP(() => {
        
        SplitType.create(".singleText", {types: "chars"});

        const splitText = gsap.utils.toArray(".singleText .char")

        noTriggerToAnimations("#scrollprompt", {
            y: 0,
            opacity: 1,
            ease: "none",
            duration: 0.7,
            yoyo: true,
            repeat: -1
        })

        let tl = gsap.timeline({
            defaults: {
                ease: "none",
            },
            scrollTrigger: {
                trigger: hero.current,
                pin: true,
                end: "bottom -700%",
                scrub: true,
                snap: 1 / 6.35
            }
        })

        tl.to(splitText[0], {
            y: -40,
            x: 60,
            ease: "power4.out",
        })

        tl.to(splitText[1], {
            y: 40,
            x: 0,
            ease: "power4.out",
        }, "<")

        tl.to(splitText[2], {
            y: -40,
            x: -20,
            ease: "power4.out",
        }, "<")

        tl.to(splitText[3], {
            y: 0,
            x: -40,
            rotationZ: 20,
            ease: "power4.out",
        }, "<")

        tl.to(splitText[4], {
            y: 0,
            x: -40,
            rotationZ: -20,
            ease: "power4.out",
        }, "<")

        tl.to(splitText[5], {
            y: 40,
            x: -40,
            rotationZ: 20,
            ease: "power4.out",
        }, "<")

        tl.to(".subtext", {
            opacity: 0,
            ease: "power4.out"
        }, "<")

        tl.to(".surname", {
            opacity: 1,
            ease: "power4.out",
        }, "<")

        tl.to(".disappear", {
            scale: 0.5,
            opacity: 0,
            ease: "power4.out"
        })

        tl.to(grow.current, {
            height: "100%",
            ease: "power4.out"
        }, "<35%")

        tl.to(".first", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(".second", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(".third", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(".fourth", {
            opacity: 0,
            ease: "power4.out"
        })

        tl.to(grow.current, {
            width: "100%",
            borderRadius: 60,
            ease: "power4.out"
        }, "<")

        tl.to("#bookPrompt", {
            opacity: 0,
            ease: "power4.out"
        }, "<")
      
    }, [])

  return (
    <div ref={hero} className="h-[100vh] w-full p-10 relative">
        <div ref={grow} className="bg-red-500 w-[45%] h-0 rounded-[30px] relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <div className="first rounded-[30px] w-full h-full absolute top-0 left-0 z-[5] bg-yellow-500"></div>
            <div className="second rounded-[30px] w-full h-full absolute top-0 left-0 z-[4] bg-red-500"></div>
            <div className="third rounded-[30px] w-full h-full absolute top-0 left-0 z-[3] bg-purple-500"></div>
            <div className="fourth rounded-[30px] w-full h-full absolute top-0 left-0 z-[2] bg-green-500"></div>
            <div className="fifth rounded-[30px] w-full h-full absolute top-0 left-0 z-[1]">
                <video className="w-full h-full object-cover" autoPlay={true} loop={true} playsInline={true} muted={true} >
                    <source src={heroVideoMain} type="video/mp4" />
                </video>
            </div>
        </div>
        <div className="absolute w-[100vw] h-[100vh] top-0 left-0 flex flex-col">
            <div className="disappear w-full h-full flex flex-col items-center justify-center relative">
                <video className="hero-bg-video w-full h-full object-cover" autoPlay={true} loop={true} playsInline={true} muted={true} >
                    <source src={heroVideoMain} type="video/mp4" />
                </video>
                <p className="subtext absolute top-52 left-[106px] z-20 text-black font-extralight tracking-tight text-3xl">Celebrating the life of</p>
                <p className="heroMainText text-[390px] tracking-tighter select-none absolute leading-none flex items-center justify-center gap-x-14 font-poppins font-black"><span className="singleText">ENOS</span> <span className="singleText">SR</span></p>
                <p className="subtext absolute bottom-48 right-[70px] z-20 text-black font-poppins font-[800] tracking-tight text-5xl"> Dec 43' <span className="font-[200]">—</span> June 22'</p>
                <p className="surname absolute bottom-48 text-black font-poppins font-[900] text-2xl tracking-tight opacity-0">NSAMBA</p>
            </div>
        </div>
        <div className="absolute w-full h-[5%] bottom-7 left-0 pointer-events-none flex items-center justify-center">
            <img id="scrollprompt" src={chevronIcon} className="size-5 -translate-y-3 opacity-0" alt="chevron icon" />
        </div>
        <a id="bookPrompt" className="absolute top-3 right-10 flex items-center gap-x-2 hover:opacity-75 active:opacity-50 cursor-pointer select-none">
            <p className="font-poppins font-extrabold tracking-tighter text-xl">GET EBOOK</p>
            <img src={boldArrowImg} className="size-5 -rotate-45"/>
        </a>
    </div>
  )
}

export default Hero
