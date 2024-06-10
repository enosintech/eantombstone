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
                pinSpacing: true,
                scrub: 2,
                snap: 1 / (panels.length - 1),
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

          gsap.delayedCall(2, crossFade);
        }

        gsap.delayedCall(0, crossFade);

    }, [])

  return (
    <div className="overflow-x-hidden">
        <div ref={slider} className="h-[100vh] w-[400vw] flex flex-wrap relative">
          <section className="panel w-[100vw] h-[100vh] flex md:flex-row flex-col py-6 px-2">
            <div className='md:w-1/2 md:h-full w-full h-1/2'>
              <div className='rounded-[10px] overflow-hidden h-full w-full md:w-[75%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <img src={griefImg} className="w-full h-full object-cover" alt="a image about grief"/>
              </div>
            </div>
            <div className='md:w-1/2 md:h-full w-full h-1/2 relative'>
              <p className='text-xl font-light tracking-tight absolute top-5 left-5'>INDEX</p>
              <p className='absolute top-2 right-5 text-7xl font-semibold tracking-tight'>01</p>
              <div className='absolute bottom-0 right-5 w-[85%] sm:w-[75%] md:w-[90%] lg:w-[80%] 2xl:w-[65%] h-[55%] md:h-[30%] lg:h-[35%] flex flex-col'>
                <p className='w-full h-[15%] flex items-center justify-end px-2 text-lg lg:text-xl font-extrabold tracking-tight'>
                  The Wanting Machine
                </p>
                <p className='w-full h-[70%] font-light tracking-tight text-[14px] lg:text-[18px] text-justify'>
                  All the literature and friends told a lie when they said to me that this too shall pass; Time supposed to heal all wounds, and I believe it does. But losing to death does not cause a wound. I have never broken my leg or any vital bones, but if I did, I would want healing to mean I am able to walk again. I would want healing to feel like I never broke a single bone to begin with.
                </p>
                <div className='w-full h-[15%] flex items-center justify-end px-2'>
                  <img src={arrowImg} className="size-12" />
                </div>
              </div>
            </div>
          </section>
          <section className="panel panelGrow w-[100vw] h-[100vh] flex md:flex-row flex-col py-7 px-3">
            <div className='md:w-[60%] md:h-full w-full h-[60%]'>
              <div className='rounded-[10px] overflow-hidden h-full w-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <img className='makululu scale-[2] w-full h-full object-cover' src={makululuImg} alt="family in makululu"/>
              </div>
            </div>
            <div className='md:w-[40%] md:h-full w-full h-[40%] relative'>
              <p className='absolute top-2 right-5 text-7xl font-semibold tracking-tight'>02</p>
              <div className='absolute bottom-0 right-5 w-[85%] sm:w-[75%] md:w-[80%] lg:w-[80%] 2xl:w-[65%] h-[65%] md:h-[40%] lg:h-[45%] flex flex-col'>
                <p className='w-full h-[15%] flex items-center justify-end gap-x-1 px-2 text-lg md:text-[16px] lg:text-xl font-extrabold tracking-tight'>
                  The Wanting Machine<span className='italic font-light'> ( contd.)</span>
                </p>
                <p className='w-full h-[70%] font-light tracking-tight text-[14px] lg:text-[18px] text-justify'>
                  Dear Dad, your seat at the dinner table remains unoccupied. This must be grief; Sometimes when doing my laundry I come across the dashiki you left me and think to myself why I wear anything else. This must be grief as well; On the day you died I could reason. The old and sick deserve to rest. It was easy to accept then. But today I must say, the scab is uglier than the wound. 
                </p>
              </div>
            </div>
          </section>
          <section className="panel w-[100vw] h-[100vh] flex md:flex-row flex-col py-7 px-3">
            <div className='md:w-[60%] md:h-full w-full h-[60%] flex items-center justify-evenly'>
              <div className='rounded-[10px] overflow-hidden h-full w-[45%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <img className='splitImg w-full h-full object-cover scale-[1.5]' src={lastDayImg} alt="last day i saw my father"/>
              </div>
              <div className='rounded-[10px] overflow-hidden h-full w-[45%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <img className='splitImg w-full h-full object-cover scale-[1.5]' src={lastCallImg} alt="last day i called my father"/>
              </div>
            </div>
            <div className='md:w-[40%] md:h-full w-full h-[40%] relative'>
              <p className='absolute top-2 right-5 text-7xl font-semibold tracking-tight'>03</p>
              <div className='absolute bottom-0 right-5 w-[85%] sm:w-[75%] md:w-[80%] lg:w-[80%] 2xl:w-[65%] h-[65%] md:h-[40%] lg:h-[45%] flex flex-col'>
                <p className='w-full h-[15%] flex items-center justify-end gap-x-1 px-2 text-lg md:text-[16px] lg:text-xl font-extrabold tracking-tight'>
                  The Wanting Machine<span className='italic font-light'> ( contd.)</span>
                </p>
                <p className='w-full h-[70%] font-light tracking-tight text-[14px] lg:text-[18px] text-justify'>
                  And so forget about getting better. I fear I may never be myself again. I might go on and do amazing things for my life and the world, might. But I will never be okay about my father. He is <em className='font-bold'>gone</em> and the only thing that makes it okay again is him not being <em className='font-bold'>gone.</em> — So tell me things will get better. I will believe you entirely. In fact, they have. I have moved on, but only from the funeral. I will never move on from his absence. I do not know what that means. </p>
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
              <p className='text-xl font-black tracking-tight absolute top-5 left-5'>END</p>
              <div className='absolute bottom-0 right-5 w-[85%] sm:w-[75%] md:w-[90%] lg:w-[80%] 2xl:w-[65%] h-[55%] md:h-[30%] lg:h-[35%] flex flex-col justify-evenly'>
                <p className='w-full h-[70%] font-light tracking-tight text-[14px] lg:text-[18px]` text-justify'>
                  In a letter to Santa I'd ask for my father and proceed to be a good boy for three lifetimes.
                </p>
                <a className='text-[14px] font-bold tracking-tight'>READ THIS IF YOU HAD TO LOSE A PARENT AS AN ADULT</a>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Slider;
