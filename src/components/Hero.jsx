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
                end: "bottom -800%",
                scrub: true,
            }
        })

        tl.to(splitText[0], {
            y: -40,
            x: 60,
        })

        tl.to(splitText[1], {
            y: 40,
            x: 0,
        }, "<")

        tl.to(splitText[2], {
            y: -40,
            x: -20,
        }, "<")

        tl.to(splitText[3], {
            y: 0,
            x: -40,
            rotationZ: 20,
        }, "<")

        tl.to(splitText[4], {
            y: 0,
            x: -40,
            rotationZ: -20,
        }, "<")

        tl.to(splitText[5], {
            y: 40,
            x: -50,
            rotationZ: 20,
        }, "<")

        tl.to(".subtext", {
            opacity: 0,
        }, "<")

        tl.to(".surname", {
            opacity: 1,
        }, "<")

        tl.to(".disappear", {
            opacity: 0,
            rotationX: -50,
        })

        tl.to("#bookPrompt", {
            opacity: 0,
        }, "<")

        tl.to("#altBack", {
            opacity: 1,
        }, "<")

        tl.to(grow.current, {
            height: "100%",
        }, "<15%")

        tl.to(".dadSaidText1", {
            opacity: 1,
        }, "<")

        tl.to(".adviceBox1", {
            x: 0,
            y: 0,
            rotate: 0,
            backgroundColor: "rgb(82,82,82)",
        }, "<")

        tl.to(".first", {
            height: 0,
            ease: "power4.out"
        })

        tl.to(".adviceBox2", {
            x: 0,
            y: 0,
            rotate: 0,
            backgroundColor: "rgb(82,82,82)",
        }, "<")

        tl.to(".saidText1", {
            opacity: 0,
        }, "<")

        tl.to(".adviceBox1", {
            x: -20,
            y: -20,
            rotate: -25,
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
            x: 20,
            y: -30,
            rotate: 20,
            backgroundColor: "black",
        }, "<")

        tl.to(".adviceBox3", {
            x: 0,
            y: 0,
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
            x: -20,
            y: 30,
            rotate: 20,
            backgroundColor: "black",
        }, "<")

        tl.to(".adviceBox4", {
            x: 0,
            y: 0,
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
            width: "100%",
            borderRadius: 0,
        }, "<")

        tl.to("#scrollprompt", {
            filter: "invert(100%)",
        }, "<")

        tl.to("#scrollDiv", {
            bottom: 35
        }, "<")

        tl.to("#altBack", {
            xPercent: 50,
            opacity: 0
        }, "<")

        tl.to(".waterText", {
            opacity: 1,
        })
      
    }, [])

  return (
    <div ref={hero} className="h-[100vh] w-full relative">
        <div ref={grow} className="bg-red-500 w-[45%] h-0 relative overflow-hidden">
            <div className="first w-full h-full absolute top-0 left-0 z-[5] bg-yellow-500"></div>
            <div className="second w-full h-full absolute top-0 left-0 z-[4] bg-red-500"></div>
            <div className="third w-full h-full absolute top-0 left-0 z-[3] bg-purple-500"></div>
            <div className="fourth w-full h-full absolute top-0 left-0 z-[2] bg-green-500"></div>
            <div className="fifth w-full h-full absolute top-0 left-0 z-[1] flex items-center justify-center">
                <video key={heroVideoMain} className="w-full h-full object-cover" autoPlay={true} loop={true} playsInline={true} muted={true} >
                    <source src={heroVideoMain} type="video/mp4" />
                </video>
                <div className="flex flex-col gap-y-5 waterText opacity-0 absolute w-[60%] text-white">
                    <p className="tracking-tight font-extralight text-xl">Excerpt from: <em className="font-semibold">Because I could not stop for death, He kindly stopped for me </em> by Emily Dickinson</p>
                    <p className="text-5xl font-bold tracking-tight text-justify">
                        Because I could not stop for Death –
                        He kindly stopped for me –
                        The Carriage held but just Ourselves —
                        <em> And Immortality.</em>
                    </p>
                </div>
            </div>
        </div>
        <div id="altBack" className="absolute opacity-0 w-[100vw] h-[100vh] top-0 left-0 flex justify-end">
            <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
                <div className="w-[90%] h-[10%]">
                    <p className="relative z-[9999] text-xl font-bold text-neutral-500 tracking-tight text-justify">My Father was known by the <span className="text-neutral-800">Central Statistical Office</span> as, <span className="text-black font-black">Enos Arthur Nsamba</span>. He lived to be 79 years old. I always think that it must be incredibly difficult to allow yourself to die once time throws all its might to getting you there, but I think my father had a lot behind him that <em>maybe</em> made it easier.</p>
                </div>
                <div className="flex flex-col gap-y-20 items-center justify-center w-[90%] h-[70%]">
                    <div className="w-[70%] h-[70%] flex justify-evenly flex-wrap text-white">
                        <div className="p-3 flex flex-col adviceBox1 w-[45%] h-[45%] bg-black rounded-[25px] -translate-x-4 -translate-y-3 -rotate-[25deg] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="dadSaidText1 opacity-0 font-light tracking-tight text-[12px]">My Dad loved...</p>
                            <p className="text-lg font-bold tracking-tight">Binge watching Nigerian movies, .</p>
                        </div>
                        <div className="p-3 flex flex-col adviceBox2 w-[45%] h-[45%] bg-black rounded-[25px] translate-x-4 -translate-y-3 rotate-[10deg] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="dadSaidText2 opacity-0 font-light tracking-tight text-[12px]">My Dad Said...</p>
                            <p className="text-lg font-bold tracking-tight">Expect other drivers on the road to make a mistake and hypothesize your reactions.</p>
                        </div>
                        <div className="p-3 flex flex-col adviceBox3 w-[45%] h-[45%] bg-black rounded-[25px] -translate-x-2 translate-y-10 rotate-[15deg] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="dadSaidText3 opacity-0  font-light tracking-tight text-[12px]">My Dad...</p>
                            <p className="text-lg font-bold tracking-tight">Was on the first Zambian Airways flight from Lusaka to New York.</p>
                        </div>
                        <div className="p-3 flex flex-col adviceBox4 w-[45%] h-[45%] bg-black rounded-[25px] rotate-[20deg] translate-y-4 translate-x-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="dadSaidText4 opacity-0  font-light tracking-tight text-[12px]">My Dad died and...</p>
                            <p className="text-lg font-bold tracking-tight">Left an unending turbulence in my life.</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-[90%] h-[5%]">
                    <div className="saidText1 w-full h-full top-0 left-0 absolute flex items-center justify-between">
                        <p className="text-lg font-light tracking-tight">Last day I physically saw my dad</p>
                        <p className="text-lg font-bold tracking-tight">9th December, 2020</p>
                    </div>
                    <div className="saidText2 w-full h-full top-0 left-0 absolute opacity-0 flex items-center justify-between">
                        <p className="text-lg font-light tracking-tight">My dad in early fatherhood</p>
                        <p className="text-lg font-bold tracking-tight">16 January, 1984</p>
                    </div>
                    <div className="saidText3 w-full h-full top-0 left-0 absolute opacity-0 flex items-center justify-between">
                        <p className="text-lg font-light tracking-tight">Last day I physically saw my dad</p>
                        <p className="text-lg font-bold tracking-tight">9th December, 2020</p>
                    </div>
                    <div className="saidText4 w-full h-full top-0 left-0 absolute opacity-0 flex items-center justify-between">
                        <p className="text-lg font-light tracking-tight">My dad in early fatherhood</p>
                        <p className="text-lg font-bold tracking-tight">16 January, 1984</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute w-[100vw] h-[100vh] top-0 left-0 flex flex-col">
            <div className="disappear w-full h-full flex flex-col items-center justify-center relative">
                {/* <video className="hero-bg-video w-full h-full object-cover" autoPlay={true} loop={true} playsInline={true} muted={true} >
                    <source src={heroVideoMain} type="video/mp4" />
                </video>
                <p className="subtext absolute top-56 left-[100px] z-20 text-black font-extralight tracking-tight text-3xl">In Loving Memory of</p>
                <p className="heroMainText text-[23.3vw] tracking-tighter select-none absolute leading-none flex items-center justify-center gap-x-14 font-poppins font-black"><span className="singleText">ENOS</span> <span className="singleText">SR</span></p>
                <p className="subtext absolute bottom-48 right-[70px] z-20 text-black font-poppins font-black tracking-tight text-5xl"> Dec 43' <span className="font-[200]">—</span> June 22'</p>
                <p className="surname absolute bottom-48 text-black font-poppins font-[900] text-2xl tracking-tight opacity-0">NSAMBA</p> */}
                <div className="w-full h-[65%] bg-red-500"></div>
                <div className="w-full h-[35%] flex items-center justify-center">
                    <div className="w-fit h-[75%] flex flex-col relative">
                        <p className="subtext pl-2 font-extralight tracking-tight text-lg">In Loving Memory of</p>
                        <p className="text-[8vw] font-poppins font-black tracking-tighter leading-none"><span className="singleText">ENOS</span> <span className="singleText">SR</span></p>
                        <p className="subtext w-full flex items-center justify-end font-poppins font-black tracking-tight text-2xl">Dec 43' <span>—</span> June 22'</p>
                        <p className="surname absolute text-center w-full bottom-8 font-poppins font-black tracking-tight opacity-0">NSAMBA</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="scrollDiv" className="absolute z-50 w-full h-[5%] bottom-3 left-0 pointer-events-none flex items-center justify-center">
            <img id="scrollprompt" src={chevronIcon} className="size-5 -translate-y-3 opacity-0" alt="chevron icon" />
        </div>
        <a id="bookPrompt" className="absolute top-3 right-10 bg-black p-3 px-4 rounded-full text-white flex items-center gap-x-2 hover:opacity-75 active:opacity-50 cursor-pointer select-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <p className="font-black tracking-tighter text-xl">GET EBOOK</p>
            <img src={boldArrowImg} className="size-5 -rotate-45 invert"/>
        </a>
    </div>
  )
}

export default Hero;
