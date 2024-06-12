import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import React, { useRef, Suspense, useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";

import { boldArrowImg, chevronIcon, heroVideoMain, mainEnosImg1, mainEnosImg2, mainEnosImg3, mainEnosImg4, videoBgImg } from "../lib";
import { noTriggerToAnimations } from "../utils/animations";
import Model from "./Scene";
import Lights from "./Lights";
import Loader from "./Loader";

const Hero = () => {
    const hero = useRef(null);
    const grow = useRef(null);
    const video = useRef(null);

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

        const splitText = gsap.utils.toArray(".singleText .char");
        const scaleImgs = gsap.utils.toArray(".scaleImage");   
        const languageText = gsap.utils.toArray(".language");

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
                end: () => "+=" + hero.current.offsetHeight * 10,
                scrub: true,
                onUpdate: () => {
                    video.current.play();
                }
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
            yPercent: 100,
            opacity: 0,
        })

        tl.to("#altBack1", {
            opacity: 1,
        }, "<")

        tl.to(grow.current, {
            height: screenWidth < 768 ? "50%" :"100%",
        }, "<15%")

        tl.from(scaleImgs[0], {
            scale: 1.5,
        }, "<")

        tl.to(".first", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(".disappear", {
            display: "none",
        }, "<")

        tl.to(scaleImgs[0], {
            scale: 1.5
        }, "<")

        tl.from(scaleImgs[1], {
            scale: 1.5,
        }, "<")

        tl.to(".saidText1", {
            opacity: 0,
        }, "<")

        tl.to(".saidText2", {
            opacity: 1,
        }, "<")

        tl.to(".second", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(scaleImgs[1], {
            scale: 1.5
        }, "<")

        tl.from(scaleImgs[2], {
            scale: 1.5,
        }, "<")

        tl.to(".saidText2", {
            opacity: 0,
        }, "<")

        tl.to(".saidText3", {
            opacity: 1,
        }, "<")

        tl.to(".third", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(scaleImgs[2], {
            scale: 1.5
        }, "<")

        tl.from(scaleImgs[3], {
            scale: 1.5
        }, "<")

        tl.to(".saidText3", {
            opacity: 0,
        }, "<")

        tl.to(".saidText4", {
            opacity: 1,
        }, "<")

        tl.to(".fourth", {
            opacity: 0,
        })

        tl.to(scaleImgs[3], {
            scale: 3
        }, "<")

        tl.to(grow.current, {
            width: "100lvw",
            minWidth: '100lvw',
            height: "100lvh",
            minHeight: "100lvh"
        }, "<")

        tl.to(".saidText4", {
            opacity: 0
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

        gsap.set(languageText[0], { autoAlpha: 1 })

        const crossFade = () => {
          gsap.timeline()
          .to(languageText[0], {autoAlpha: 0, duration: 0.8})
          .to(languageText[1], {autoAlpha: 1, duration: 0.8}, 0)

          languageText.push(languageText.shift())

          gsap.delayedCall(1.5, crossFade);
        }

        gsap.delayedCall(1.5, crossFade);
      
    }, [])

  return (
    <div ref={hero} className="h-[100vh] w-full relative">
        <div id="altBack1" className="absolute opacity-0 w-[100vw] h-[100vh] top-0 left-0 flex md:flex-row flex-col">
            <div ref={grow} className="w-full md:w-1/2 h-0 relative overflow-hidden font-poppins familyImage">
                    <div className="absolute z-[6] bottom-5 left-5 flex flex-col text-white saidText1">
                        <p className="font-extrabold tracking-tight text-2xl sm:text-4xl md:text-2xl lg:text-4xl">MOM AND DAD THRIVING</p>
                        <p className="font-light tracking-tight text-lg sm:text-xl md:text-lg lg:text-xl">20th September, 2020</p>
                    </div>
                    <div className="absolute z-[6] bottom-5 left-5 flex flex-col text-white saidText2 opacity-0">
                        <p className="font-extrabold tracking-tight text-2xl sm:text-4xl md:text-2xl lg:text-4xl">MY BROTHERS WEDDING</p>
                        <p className="font-light tracking-tight text-lg sm:text-xl md:text-lg lg:text-xl">30th April, 2016</p>
                    </div>
                    <div className="absolute z-[6] bottom-5 left-5 flex flex-col text-white saidText3 opacity-0">
                        <p className="font-extrabold tracking-tight text-2xl sm:text-4xl md:text-2xl lg:text-4xl">MOM AND DAD ON VACA</p>
                        <p className="font-light tracking-tight text-lg sm:text-xl md:text-lg lg:text-xl">2015</p>
                    </div>
                    <div className="absolute z-[6] bottom-5 left-5 flex flex-col text-white saidText4 opacity-0">
                        <p className="font-extrabold tracking-tight text-2xl sm:text-4xl md:text-2xl lg:text-4xl">WORKING DAD</p>
                        <p className="font-light tracking-tight text-lg sm:text-xl md:text-lg lg:text-xl">LONG AGO</p>
                    </div>
                <div className="first w-full h-full absolute top-0 left-0 z-[5] overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <img className="scaleImage w-full h-[50vh] md:h-[100vh] object-cover object-top absolute top-0 left-0" src={mainEnosImg1} alt="pic of my father"/>
                </div>
                <div className="second w-full h-full absolute top-0 left-0 z-[4] overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <img className="scaleImage w-full h-[50vh] md:h-[100vh] object-cover absolute top-0 left-0" src={mainEnosImg2} alt="pic of my father 2"/>
                </div>
                <div className="third w-full h-full absolute top-0 left-0 z-[3] overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <img className="scaleImage w-full h-[50vh] md:h-[100vh] object-cover object-top absolute top-0 left-0" src={mainEnosImg3} alt="pic of my father 3"/>
                </div>
                <div className="fourth w-full h-full absolute top-0 left-0 z-[2] overflow-hidden">
                    <img className="scaleImage w-full h-[50vh] md:h-[100vh] object-cover object-top absolute top-0 left-0" src={mainEnosImg4} alt="pic of my father 4"/>
                </div>
                <div className="fifth w-full h-full absolute top-0 left-0 z-[1] flex items-center justify-center overflow-hidden">
                    <img className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" src={videoBgImg} alt="video background Image"/>
                    <video ref={video} key={heroVideoMain} className="w-full h-full object-cover" loop={true} playsInline={true} muted={true} >
                        <source src={heroVideoMain} type="video/mp4" />
                    </video>
                    <div className="flex flex-col gap-y-5 waterText opacity-0 absolute w-[60%] text-white font-poppins">
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
                <div className="w-full h-[20%] md:h-[15%] flex flex-col items-center justify-evenly border-b-2 border-gray-100 text-[18px] md:text-[18px] lg:text-xl xl:text-2xl">
                    <p className="font-slussen">ENOS ARTHUR NSAMBA</p>
                    <p className="font-light tracking-tight font-poppins">SURVIVED 79 YEARS OF EARTH</p>
                </div>
                <div className="flex md:items-center justify-center w-full h-[80%] md:h-[85%]">
                    <div className="w-[85%] sm:w-[75%] lg:w-[85%] h-[80%] md:h-[50%] lg:h-[75%] flex flex-col p-2 mt-4 bg-red-500=">
                        <div className="w-full h-[10%] relative flex items-center px-1 text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-black font-poppins font-extralight tracking-tight">
                            <p className="saidText1 absolute">My Dad Said</p>
                            <p className="saidText2 opacity-0 absolute">My Dad Loved</p>
                            <p className="saidText3 opacity-0 absolute">My Dad Was</p>
                            <p className="saidText4 opacity-0 absolute">My Dad Left</p>
                        </div>
                        <div className="w-full h-[90%] flex items-end md:pb-4 px-1 relative text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl font-poppins text-left">
                            <p className="absolute saidText1 font-bold tracking-tight text-neutral-700">Expect other drivers on the road to make a mistake. Practise Hypothesizing your reactions.</p>
                            <p className="absolute saidText2 opacity-0 font-bold tracking-tight text-neutral-700">Binge watching Nigerian movies - Waking up early to pray - Trying every idea he had, good or bad.</p>
                            <p className="absolute saidText3 opacity-0 font-bold tracking-tight text-neutral-700">The personification of 'not all heroes wear capes'. Silently saving the city. When the city was me.</p>
                            <p className="absolute saidText4 opacity-0 font-bold tracking-tight text-neutral-700">A chronic turbulence in the lives of all that his existed in. Some days I think to myself, 'how dare he?'</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        <div className="absolute w-[100vw] h-[100vh] top-0 left-0 flex flex-col overflow-visible">
            <div className="disappear w-full h-full flex flex-col items-center justify-end relative overflow-visible">
                <div className="w-full h-full absolute z-[-1] flex items-center justify-center overflow-visible pointer-events-none">
                    <div className="h-full w-full overflow-visible pointer-events-none">
                        <Canvas 
                            className="w-full h-full overflow-visible pointer-events-none"
                        >
                            <ambientLight intensity={2} />
                            <Lights />
                            <OrbitControls enableZoom={false} enableRotate={false} />
                            <Suspense fallback={<Loader />}>
                                <Model screenWidth={screenWidth} />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
                <div className="w-full h-full flex items-end justify-center pb-28">
                    <div className="w-fit h-fit flex flex-col relative translate-y-3 md:translate-y-10">
                        <p className="w-full text-center font-medium tracking-tight text-xl subtext font-poppins">IN LOVING MEMORY OF</p>
                        <p className="text-[13vw] md:text-[11vw] lg:text-[10vw] px-2 font-slussen leading-none"><span className="singleText">ENOS</span> <span className="singleText">SR</span></p>
                        <div className="relative w-full h-[40px] grid place-items-center mt-1 font-light tracking-tight text-[16px] sm:text-xl subtext font-poppins">
                            <p className="absolute language">DEC 43' — JUN 22'</p>
                            <p className="absolute language opacity-0">NALUPALE 43' — GANDAPATI 22'</p>
                            <p className="absolute language opacity-0">12 月 43 日 — 6 月 22 日</p>
                            <p className="absolute language opacity-0">DIS 43' — JUN 22'</p>
                            <p className="absolute language opacity-0">1943 ديسمبر - 2022 يونيو</p>
                            <p className="absolute language opacity-0">1943 DE DICIEMBRE — 2022 DE JUNIO</p>
                        </div>
                        <p className="surname absolute w-full text-center opacity-0 bottom-0 font-poppins font-light tracking-tight text-xl">NSAMBA</p>
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
