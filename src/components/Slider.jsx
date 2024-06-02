import { useGSAP } from '@gsap/react';
import { useRef } from 'react'
import gsap from 'gsap';

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
        <div ref={slider} className="h-[100vh] w-[1000vw] flex flex-wrap">
          <section className="panel w-[100vw] h-[100vh]">

          </section>
          <section className="panel w-[100vw] h-[100vh] bg-blue-500">

          </section>
          <section className="panel w-[100vw] h-[100vh] bg-pink-500">

          </section>
          <section className="panel w-[100vw] h-[100vh] bg-blue-500">

          </section>
          <section className="panel w-[100vw] h-[100vh] bg-purple-500">

          </section>
          <section className="panel w-[100vw] h-[100vh] bg-black">

          </section>
          <section className="panel w-[100vw] h-[100vh] bg-white">

          </section>
          <section className="panel w-[100vw] h-[100vh] bg-teal-500">

          </section>
          <section className="panel w-[100vw] h-[100vh] bg-slate-500">

          </section>
          <section className="panel w-[100vw] h-[100vh] bg-neutral-700">

          </section>
        </div>
    </div>
  )
}

export default Slider;
