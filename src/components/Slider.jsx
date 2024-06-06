import { useGSAP } from '@gsap/react';
import { useRef } from 'react'
import gsap from 'gsap';
import { noTriggerToAnimations, triggerToAnimations } from '../utils/animations';

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
        <div ref={slider} className="h-[100vh] w-[500vw] flex flex-wrap">
          <section className="panel w-[100vw] h-[100vh] flex py-7 px-3">
            <div className='w-1/2 h-full'>
              <div className='rounded-[20px] bg-black h-full w-[75%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'></div>
            </div>
            <div className='w-1/2 h-full bg-purple-500'></div>
          </section>
          <section className="panel w-[100vw] h-[100vh] flex py-7 px-3">
            <div className='w-1/2 h-full'>
              <div className='rounded-[20px] bg-black h-full w-[75%] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'></div>
            </div>
            <div className='w-1/2 h-full bg-purple-500'></div>
          </section>
          <section className="panel w-[100vw] h-[100vh] bg-red-500">

          </section>
          <section className="panel w-[100vw] h-[100vh]">

          </section>
          <section className="panel w-[100vw] h-[100vh]">

          </section>
        </div>
    </div>
  )
}

export default Slider;
