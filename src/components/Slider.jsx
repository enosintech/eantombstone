import { useGSAP } from '@gsap/react';
import { useRef } from 'react'
import gsap from 'gsap';

import { arrowImg, endImage1, endImage2, endImage3, endImage4, endImage5, endImage6, endImage7, griefImg, lastCallImg, lastDayImg, makululuImg } from '../lib';

const Slider = () => {

    const slider = useRef(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray(".panel");
        const splitImg = gsap.utils.toArray(".splitImg");
        const endImgs = gsap.utils.toArray(".motiv");
    
        let tl = gsap.timeline({
            defaults: {
                ease: "none",
            },
            scrollTrigger: {
                trigger: slider.current,
                pin: true,
                scrub: 2,
                start: "top top",
                end: () => "+=" + slider.current.offsetWidth,
            }
        })

        tl.to(panels, {
          xPercent: -100 * (panels.length - 1),
        })

        gsap.to(".makululu", {
          scale: 1.1,
          x: 20,
          scrollTrigger: {
            trigger: ".makululu", 
            containerAnimation: tl,
            start: "left right",
            scrub: 5,
          }
        })

        splitImg.forEach((img, i) => (
          gsap.to(img, {
            scale: 1,
            scrollTrigger: {
              trigger: img,
              containerAnimation: tl,
              start: "left right",
              scrub: 5,
            }
          })
        ))

        gsap.set(endImgs[0], { autoAlpha: 1 })

        const crossFade = () => {
          gsap.timeline()
          .to(endImgs[0], {autoAlpha: 0, duration: 0.8})
          .to(endImgs[1], {autoAlpha: 1, duration: 0.8}, 0)

          endImgs.push(endImgs.shift())

          gsap.delayedCall(1.5, crossFade);
        }

        gsap.delayedCall(1.5, crossFade);

    }, [])

  return (
    <div className="overflow-x-hidden">
        <div ref={slider} className="h-[100vh] w-[400vw] flex flex-wrap relative">
          <section className="panel w-[100vw] h-[100vh] flex md:flex-row flex-col py-6 px-2">
            <div className='md:w-1/2 md:h-full w-full h-1/2'>
              <div className='rounded-[10px] relative overflow-hidden h-full w-full md:w-[75%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <img src={griefImg} className="w-full h-full object-cover" alt="a image about grief"/>
                <p className='text-white font-poppins font-light tracking-tight text-[14px] absolute bottom-3 w-full italic text-center'>picture from <span className='font-bold'>unsplash</span></p>
              </div>
            </div>
            <div className='md:w-1/2 md:h-full w-full h-1/2 relative'>
              <p className='text-xl font-light tracking-tight absolute top-5 left-5 font-poppins'>INDEX</p>
              <p className='absolute top-2 right-5 text-7xl lg:text-9xl font-poppins font-semibold tracking-tight'>01</p>
              <div className='absolute bottom-0 right-5 w-[85%] sm:w-[75%] md:w-full lg:w-[90%] 2xl:w-[80%] h-[45%] sm:h-[50%] md:h-[40%] flex flex-col'>
                <p className='w-full h-[20%] flex items-center justify-end px-2 text-[14px] sm:text-lg lg:text-2xl font-poppins font-extrabold tracking-tight'>
                  The Wanting Machine
                </p>
                <p className='w-full h-[60%] font-poppins font-[300] tracking-tight text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-xl text-justify'>
                  The literature and friends continue to tell a lie when they say to me that this too shall pass; I have never broken a leg or any vital bones, but if I did, I would want healing to mean I am able to walk again. I would want healing to feel like I never broke a single bone to begin with.
                </p>
                <div className='w-full h-[20%] flex items-center justify-end px-2'>
                  <img src={arrowImg} className="size-12 sm:size-14" />
                </div>
              </div>
            </div>
          </section>
          <section className="panel panelGrow w-[100vw] h-[100vh] flex md:flex-row flex-col py-7 px-3">
            <div className='md:w-[60%] md:h-full w-full h-1/2'>
              <div className='rounded-[10px] overflow-hidden relative h-full w-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <img className='makululu scale-[2] w-full h-full object-cover' src={makululuImg} alt="family in makululu"/>
                <p className='text-white md:text-xl font-black font-poppins absolute bottom-3 left-3'>2013 - <span className='font-extralight tracking-tight'>MAKULULU, KABWE</span></p>
              </div>
            </div>
            <div className='md:w-[40%] md:h-full w-full h-1/2 relative'>
              <p className='absolute top-2 right-2 text-7xl lg:text-9xl font-semibold tracking-tight font-poppins'>02</p>
              <div className='absolute bottom-0 right-5 md:right-2 xl:right-5 w-[85%] sm:w-[75%] md:w-[90%] lg:w-[90%] h-[45%] sm:h-[50%] md:h-[40%] flex flex-col'>
                <p className='w-full h-[20%] flex items-center justify-end gap-x-1 px-2 text-[14px] sm:text-lg md:text-[16px] md:translate-y-3 lg:translate-y-0 lg:text-xl xl:text-2xl font-poppins font-extrabold tracking-tight'>
                  The Wanting Machine<span className='italic font-light'> ( contd.)</span>
                </p>
                <p className='w-full h-[80%] font-poppins font-[300] tracking-tight text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-xl text-justify'>
                  Sometimes when doing my laundry I stumble upon the dashiki you left me and think to myself why I wear anything else. This must be grief; How on the day you died I could reason quite clearly. You were old and in pain so the pity met the relief. But the scab is uglier than the wound.
                </p>
              </div>
            </div>
          </section>
          <section className="panel w-[100vw] h-[100vh] flex md:flex-row flex-col py-7 px-3">
            <div className='md:w-[60%] md:h-full w-full h-1/2 flex items-start justify-between'>
              <div className='rounded-[10px] overflow-hidden h-full w-[47.5%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <img className='splitImg w-full h-full object-cover scale-[1.5]' src={lastDayImg} alt="last day i saw my father"/>
              </div>
              <div className='rounded-[10px] overflow-hidden h-full w-[47.5%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <img className='splitImg w-full h-full object-cover scale-[1.5]' src={lastCallImg} alt="last day i called my father"/>
              </div>
            </div>
            <div className='md:w-[40%] md:h-full w-full h-1/2 relative'>
              <p className='absolute top-2 right-5 md:right-2 xl:right-5 text-7xl lg:text-9xl font-semibold tracking-tight font-poppins'>03</p>
              <div className='absolute bottom-0 right-2 w-[85%] sm:w-[75%] md:w-[90%] lg:w-[90%] h-[45%] sm:h-[50%] md:h-[40%] flex flex-col'>
                <p className='w-full h-[20%] flex items-center justify-end gap-x-1 px-2 text-[14px] sm:text-lg md:text-[16px] md:translate-y-3 lg:translate-y-0 lg:text-xl xl:text-2xl font-poppins font-extrabold tracking-tight'>
                  The Wanting Machine<span className='italic font-light'> ( contd.)</span>
                </p>
                <p className='w-full h-[80%] font-poppins font-[300] tracking-tight text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-xl text-justify'>
                  So forget about getting better, I may not ever even be myself again. I might go on and do amazing things for my life; perhaps even for the world. But I will never be okay about my father. He is <em className='font-bold'>gone</em> and the only thing that makes it okay again is him not being <em className='font-bold'>gone</em>.
                </p>
              </div>
            </div>
          </section>
          <section className="panel w-[100vw] h-[100vh] flex md:flex-row flex-col py-7 px-3">
            <div className='md:w-1/2 md:h-full w-full h-1/2'>
              <div className='rounded-[10px] overflow-hidden relative h-full md:w-[75%] w-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <img className='absolute top-0 left-0 z-[5] w-full h-full object-cover motiv' src={endImage1} alt="picture of my father" />
                <img className='absolute top-0 left-0 z-[4] w-full h-full object-top object-cover motiv' src={endImage2} alt="picture of my father" />
                <img className='absolute top-0 left-0 z-[3] w-full h-full object-top object-cover motiv' src={endImage3} alt="picture of my father" />
                <img className='absolute top-0 left-0 z-[2] w-full h-full object-top object-cover motiv' src={endImage4} alt="picture of my father" />
                <img className='absolute top-0 left-0 z-[1] w-full h-full object-top object-cover motiv' src={endImage5} alt="picture of my father" />
                <img className='absolute top-0 left-0 z-[1] w-full h-full object-cover motiv' src={endImage6} alt="picture of my father" />
                <img className='absolute top-0 left-0 z-[1] w-full h-full object-cover motiv' src={endImage7} alt="picture of my father" />
              </div>
            </div>
            <div className='md:w-1/2 md:h-full w-full h-1/2 relative'>
              <p className='text-xl font-black tracking-tight absolute top-5 left-5 font-poppins'>END</p>
              <div className='absolute bottom-0 right-5 w-[85%] sm:w-[75%] md:w-[95%] lg:w-[80%] 2xl:w-[65%] h-[90%] md:h-[60%] lg:h-[60%] flex flex-col justify-evenly'>
                <p className='w-full h-fit font-poppins font-thin italic tracking-tight text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-xl text-justify'>
                   (I will never forget how dissapointing it felt to find out that stars died. Once when I was 6, my father, my brother and I took a walk back home from vespers. I must have counted to a 100 stars over and over the entire walk. I don't remember much about the weather, but it was a wednesday evening and in the season that got dark quick so it must have been cold; I learn't to count about a year before I got into school — Both numbers and on my father.)
                </p>
                <p className='w-full h-fit font-poppins font-[300] tracking-tight text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-xl text-justify'>
                  Every now and then I scratch until it bleeds again. I cannot help it, the wound stays itchy. Your seat at the dinner table remains yours. In a letter to Santa I'd ask for you and proceed to be a good boy in three different lifetimes if I could. This must be grief, still.
                </p>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Slider;
