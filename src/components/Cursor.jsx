import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heartIcon } from "../lib";

import { noTriggerToAnimations } from "../utils/animations";

const isTouchDevice = "ontouchstart" in window;

const Cursor = () => {
    useGSAP(() => {

        if(isTouchDevice) {
            return;
        }

        gsap.set("#cursor", {xPercent: -50, yPercent: -50})

        window.addEventListener("mousemove", (e) => {
            noTriggerToAnimations("#cursor", {
                duration: 0.7,
                x: e.clientX,
                y: e.clientY,
                opacity: 1,
                ease: "power4",
                overwrite: "auto",
            });
        })

        document.addEventListener("mouseleave", () => {
            noTriggerToAnimations("#cursor", {
                duration: 0.7,
                opacity: 0,
                ease: "power4"
            })
        })
    }, [])

  return (
    <>
        <div id="cursor" className="w-40 h-40 bg-white fixed top-0 left-0 rounded-full z-[120] opacity-0 select-none pointer-events-none flex items-center justify-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <img src={heartIcon} className="size-20" alt="heart Icon"/>
        </div>
    </>
  )
}

export default Cursor;
