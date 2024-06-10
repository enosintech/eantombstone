import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import React, { useRef, Suspense, useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";

import { boldArrowImg, chevronIcon, heroVideoMain } from "../lib";
import { noTriggerToAnimations } from "../utils/animations";
import Model from "./Scene";
import Lights from "./Lights";

const Hero = () => {
    const hero = useRef(null);
    const grow = useRef(null);

    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            const { target } = e;

            setScreenWidth(target.innerWidth);
        })  

        return () => {
            window.removeEventListener("resize", (e) => {
                const { target } = e;

                setScreenWidth(target.innerWidth);
            })
        }
    }, [])

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
                end: "bottom -800%",
                scrub: true,
            }
        })

        tl.to(splitText[0], {
            yPercent: -20,
            xPercent: 30,
        })

        tl.to(splitText[1], {
            yPercent: 25,
        }, "<")

        tl.to(splitText[2], {
            yPercent: -25,
            xPercent: -20,
        }, "<")

        tl.to(splitText[3], {
            xPercent: -40,
            rotationZ: "20%",
        }, "<")

        tl.to(splitText[4], {
            xPercent: -40,
            rotationZ: "-20%",
        }, "<")

        tl.to(splitText[5], {
            yPercent: 15,
            xPercent: -50,
            rotationZ: "20%",
        }, "<")

        tl.to(".subtext", {
            opacity: 0,
        }, "<")

        tl.to(".surname", {
            opacity: 1,
        }, "<")

        tl.to(".disappear", {
            opacity: 0,
            yPercent: 100
        })

        tl.to("#altBack1", {
            opacity: 1,
        }, "<")

        tl.to(grow.current, {
            height: screenWidth < 768 ? "50%" :"100%",
        }, "<15%")

        tl.to(".dadSaidText1", {
            opacity: 1,
        }, "<")

        tl.to(".adviceBox1", {
            xPercent: 0,
            yPercent: 0,
            rotate: 0,
            backgroundColor: "rgb(82,82,82)",
        }, "<")

        tl.to(".first", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(".adviceBox2", {
            xPercent: 0,
            yPercent: 0,
            rotate: 0,
            backgroundColor: "rgb(82,82,82)",
        }, "<")

        tl.to(".saidText1", {
            opacity: 0,
        }, "<")

        tl.to(".adviceBox1", {
            xPercent: -10,
            yPercent: -5,
            rotate: "-10%",
            backgroundColor: "black",
        }, "<")

        tl.to(".saidText2", {
            opacity: 1,
        }, "<")

        tl.to(".dadSaidText2", {
            opacity: 1,
        }, "<")

        tl.to(".second", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(".adviceBox2", {
            xPercent: 10,
            yPercent: -5,
            rotate: "10%",
            backgroundColor: "black",
        }, "<")

        tl.to(".adviceBox3", {
            xPercent: 0,
            yPercent: 0,
            rotate: 0,
            backgroundColor: "rgb(82,82,82)",
        }, "<")

        tl.to(".saidText2", {
            opacity: 0,
        }, "<")

        tl.to(".saidText3", {
            opacity: 1,
        }, "<")

        tl.to(".dadSaidText3", {
            opacity: 1,
        }, "<")

        tl.to(".third", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(".adviceBox3", {
            xPercent: -15,
            yPercent: -20,
            rotate: "15%",
            backgroundColor: "black",
        }, "<")

        tl.to(".adviceBox4", {
            xPercent: 0,
            yPercent: 0,
            rotate: 0,
            backgroundColor: "rgb(82,82,82)",
        }, "<")

        tl.to(".saidText3", {
            opacity: 0,
        }, "<")

        tl.to(".saidText4", {
            opacity: 1,
        }, "<")

        tl.to(".dadSaidText4", {
            opacity: 1,
        }, "<")

        tl.to(".fourth", {
            opacity: 0,
        })

        tl.to(grow.current, {
            width: "100vw",
            minWidth: '100vw',
            height: "100vh",
            minHeight: "100vh"
        }, "<")

        tl.to("#scrollprompt", {
            filter: "invert(100%)",
        }, "<")

        tl.to("#scrollDiv", {
            bottom: 35
        }, "<")

        tl.to("#altBack", {
            xPercent: screenWidth < 768 ? 0 : 50,
            yPercent: screenWidth < 768 ? 20 : 0,
            opacity: 0,
        }, "<")

        tl.to(".waterText", {
            opacity: 1,
        })
      
    }, [])

  return (
    <div ref={hero} className="h-[100vh] w-full relative">
        <div id="altBack1" className="absolute opacity-0 w-[100vw] h-[100vh] top-0 left-0 flex md:flex-row flex-col">
            <div ref={grow} className="bg-red-500 w-full md:w-1/2 h-0 relative overflow-hidden">
                <div className="first w-full h-full absolute top-0 left-0 z-[5] bg-yellow-500"></div>
                <div className="second w-full h-full absolute top-0 left-0 z-[4] bg-red-500"></div>
                <div className="third w-full h-full absolute top-0 left-0 z-[3] bg-purple-500"></div>
                <div className="fourth w-full h-full absolute top-0 left-0 z-[2] bg-green-500"></div>
                <div className="fifth w-full h-full absolute top-0 left-0 z-[1] flex items-center justify-center">
                    <video key={heroVideoMain} className="w-full h-full object-cover" autoPlay={true} loop={true} playsInline={true} muted={true} >
                        <source src={heroVideoMain} type="video/mp4" />
                    </video>
                    <div className="flex flex-col gap-y-5 waterText opacity-0 absolute w-[60%] text-white">
                        <p className="tracking-tight font-extralight text-[10px] sm:text-[14px] lg:text-xl">Excerpt from: <em className="font-semibold">Because I could not stop for death, He kindly stopped for me </em> by Emily Dickinson</p>
                        <p className="text-2xl md:text-3xl xl:text-5xl font-bold tracking-tight text-justify">
                            Because I could not stop for Death –
                            He kindly stopped for me –
                            The Carriage held but just Ourselves —
                            <em> And Immortality.</em>
                        </p>
                    </div>
                </div>
            </div>
            <div id="altBack" className="md:w-[50vw] md:h-full w-[100vw] md:min-w-[50vw] min-h-[50vh] h-[50vh] flex flex-col items-center justify-evenly">
                <div className="flex flex-col items-center justify-center w-full md:h-[95%] h-[92%]">
                    <div className="w-[80%] md:w-[95%] 2xl:w-[80%] h-[80%] md:h-[50%] lg:h-[65%] flex justify-evenly flex-wrap text-white">
                        <div className="p-3 flex flex-col adviceBox1 w-[45%] sm:w-[35%] h-[45%] md:h-[35%] xl:h-[45%] bg-black rounded-[10px] lg:rounded-[15px] -translate-x-4 -translate-y-3 -rotate-[25deg] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="dadSaidText1 opacity-0 font-light tracking-tight text-[10px] xl:text-[12px]">My Dad loved...</p>
                            <p className="text-[12px] xl:text-[16px] font-bold tracking-tight">Binge watching Nigerian movies, .</p>
                        </div>
                        <div className="p-3 flex flex-col adviceBox2 w-[45%] sm:w-[35%] h-[45%] md:h-[35%] xl:h-[45%] bg-black rounded-[10px] lg:rounded-[15px] translate-x-4 -translate-y-3 rotate-[10deg] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="dadSaidText2 opacity-0 font-light tracking-tight text-[10px] xl:text-[12px]">My Dad Said...</p>
                            <p className="text-[12px] xl:text-[16px] font-bold tracking-tight">Expect other drivers on the road to make a mistake and hypothesize your reactions.</p>
                        </div>
                        <div className="p-3 flex flex-col adviceBox3 w-[45%] sm:w-[35%] h-[45%] md:h-[35%] xl:h-[45%] bg-black rounded-[10px] lg:rounded-[15px] -translate-x-2 translate-y-10 rotate-[15deg] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="dadSaidText3 opacity-0  font-light tracking-tight text-[10px] xl:text-[12px]">My Dad...</p>
                            <p className="text-[12px] xl:text-[16px] font-bold tracking-tight">Was on the first Zambian Airways flight from Lusaka to New York.</p>
                        </div>
                        <div className="p-3 flex flex-col adviceBox4 w-[45%] sm:w-[35%] h-[45%] md:h-[35%] xl:h-[45%] bg-black rounded-[10px] lg:rounded-[15px] rotate-[20deg] translate-y-4 translate-x-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="dadSaidText4 opacity-0  font-light tracking-tight text-[10px] xl:text-[12px]">My Dad died and...</p>
                            <p className="text-[12px] xl:text-[16px] font-bold tracking-tight">Left an unending turbulence in my life.</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full md:h-[5%] h-[8%] text-[14px] md:text-[11px] lg:text-[16px] xl:text-[20px]">
                    <div className="saidText1 w-full h-full top-0 left-0 absolute flex items-center justify-end px-2">
                        <p className="font-bold tracking-tight">9th December, 2020</p>
                    </div>
                    <div className="saidText2 w-full h-full top-0 left-0 absolute opacity-0 flex items-center justify-end px-2">
                        <p className="font-bold tracking-tight">16 January, 1984</p>
                    </div>
                    <div className="saidText3 w-full h-full top-0 left-0 absolute opacity-0 flex items-center justify-end px-2">
                        <p className="font-bold tracking-tight">9th December, 2020</p>
                    </div>
                    <div className="saidText4 w-full h-full top-0 left-0 absolute opacity-0 flex items-center justify-end px-2">
                        <p className="font-bold tracking-tight">16 January, 1984</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute w-[100vw] h-[100vh] top-0 left-0 flex flex-col overflow-visible">
            <div className="disappear w-full h-full flex flex-col items-center justify-end relative overflow-visible">
                <div className="w-full h-full absolute flex items-center justify-center overflow-visible">
                    <div className="h-full w-full overflow-visible">
                        <Canvas 
                            className="w-full h-full overflow-visible"
                        >
                            <ambientLight intensity={1} />
                            <Lights />
                            <OrbitControls enableZoom={false} enableRotate={false} />
                            <Model screenWidth={screenWidth} />
                        </Canvas>
                    </div>
                </div>
                <div className="w-full h-[50%] flex items-center justify-center">
                    <div className="w-fit h-fit translate-y-14 md:translate-y-10 xl:translate-y-3 flex flex-col relative">
                        <p className="w-full text-center font-medium tracking-tight text-xl subtext">IN LOVING MEMORY OF</p>
                        <p className="text-[13vw] md:text-[11vw] lg:text-[10vw] px-2 font-slussen leading-none"><span className="singleText">ENOS</span> <span className="singleText">SR</span></p>
                        <p className="w-full text-center mt-1 font-light tracking-tight text-xl subtext">DEC 43' — JUN 22'</p>
                        <p className="surname absolute w-full text-center opacity-0 bottom-0 font-light tracking-tight text-xl">NSAMBA</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="scrollDiv" className="absolute z-50 w-full h-[5%] bottom-3 left-0 pointer-events-none flex items-center justify-center">
            <img id="scrollprompt" src={chevronIcon} className="size-5 -translate-y-3 opacity-0" alt="chevron icon" />
        </div>
    </div>
  )
}

export default Hero;
