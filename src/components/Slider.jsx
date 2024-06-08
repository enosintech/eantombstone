import { useGSAP } from '@gsap/react';
import { useRef } from 'react'
import gsap from 'gsap';
import { noTriggerToAnimations, triggerToAnimations } from '../utils/animations';
import { arrowImg } from '../lib';

const Slider = () => {

    const slider = useRef(null);

    useGSAP(() => {
        let panels = gsap.utils.toArray(".panel");
    
        let tl = gsap.timeline({
            defaults: {
                ease: "none",
            },
            scrollTrigger: {
                trigger: slider.current,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                end: () => "+=" + slider.current.offsetWidth,
            }
        })

        tl.to(panels, {
          xPercent: -100 * (panels.length - 1),
        })

    }, [])

  return (
    <div className="overflow-x-hidden">
        <div ref={slider} className="h-[100vh] w-[400vw] flex flex-wrap relative">
          <section className="panel w-[100vw] h-[100vh] flex py-6 px-2">
            <div className='w-1/2 h-full'>
              <div className='rounded-[10px] bg-black h-full w-[75%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'></div>
            </div>
            <div className='w-1/2 h-full relative'>
              <p className='text-xl font-light tracking-tight absolute top-5 left-5'>INDEX</p>
              <p className='absolute top-2 right-5 text-7xl font-semibold tracking-tight'>01</p>
              <div className='absolute bottom-5 right-5 w-[50%] h-[35%] flex flex-col'>
                <p className='w-full h-[15%] flex items-center justify-end px-2 text-xl font-extrabold tracking-tight'>
                  The Wanting Machine
                </p>
                <p className='w-full h-[70%] font-light tracking-tight text-lg text-justify'>
                  In a letter to Santa I'd ask for my father. I think. I bump into the person I know I can be at the start of every week and also each day that Im up at 7 am. Lorem ipsum dolor sit amet is my favorite placeholder text you know — You can write it once and then simmply copy and paste it the rest of the time 
                </p>
                <div className='w-full h-[15%] flex items-center justify-end px-2'>
                  <img src={arrowImg} className="size-12" />
                </div>
              </div>
            </div>
          </section>
          <section className="panel panelGrow w-[100vw] h-[100vh] flex py-7 px-3">
            <div className='w-[60%] h-full'>
              <div id="poemGrow" className='rounded-[10px] bg-black h-full w-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'></div>
            </div>
            <div className='w-[40%] h-full relative'>
              <p className='absolute top-2 right-5 text-7xl font-semibold tracking-tight'>02</p>
              <div className='absolute bottom-5 right-5 w-[60%] h-[35%] flex flex-col'>
                <p className='w-full h-[15%] flex items-center justify-end gap-x-1 px-2 text-xl font-extrabold tracking-tight'>
                  The Wanting Machine<span className='italic font-light'> ( contd.)</span>
                </p>
                <p className='w-full h-[70%] font-light tracking-tight text-lg text-justify'>
                  In a letter to Santa I'd ask for my father. I think. I bump into the person I know I can be at the start of every week and also each day that Im up at 7 am. Lorem ipsum dolor sit amet is my favorite placeholder text you know — You can write it once and then simmply copy and paste it the rest of the time 
                </p>
              </div>
            </div>
          </section>
          <section className="panel w-[100vw] h-[100vh] flex py-7 px-3">
            <div className='w-[60%] h-full flex items-center justify-evenly'>
              <div className='rounded-[10px] bg-black h-full w-[45%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'></div>
              <div className='rounded-[10px] bg-black h-full w-[45%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'></div>
            </div>
            <div className='w-[40%] h-full relative'>
              <p className='absolute top-2 right-5 text-7xl font-semibold tracking-tight'>03</p>
              <div className='absolute bottom-5 right-5 w-[60%] h-[35%] flex flex-col'>
                <p className='w-full h-[15%] flex items-center justify-end gap-x-1 px-2 text-xl font-extrabold tracking-tight'>
                  The Wanting Machine<span className='italic font-light'> ( contd.)</span>
                </p>
                <p className='w-full h-[70%] font-light tracking-tight text-lg text-justify'>
                  In a letter to Santa I'd ask for my father. I think. I bump into the person I know I can be at the start of every week and also each day that Im up at 7 am. Lorem ipsum dolor sit amet is my favorite placeholder text you know — You can write it once and then simmply copy and paste it the rest of the time 
                </p>
              </div>
            </div>
          </section>
          <section className="panel w-[100vw] h-[100vh] flex py-7 px-3">
            <div className='w-1/2 h-full'>
              <div className='rounded-[10px] bg-black h-full w-[75%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'></div>
            </div>
            <div className='w-1/2 h-full relative'>
              <p className='text-xl font-black tracking-tight absolute top-5 left-5'>END</p>
              <div className='absolute bottom-5 right-5 w-[50%] h-[35%] flex flex-col'>
                <p className='w-full h-[70%] font-light tracking-tight text-lg text-justify'>
                  In a letter to Santa I'd ask for my father. I think. I bump into the person I know I can be at the start of every week and also each day that Im up at 7 am. Lorem ipsum dolor sit amet is my favorite placeholder text you know — You can write it once and then simmply copy and paste it the rest of the time 
                </p>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Slider;
