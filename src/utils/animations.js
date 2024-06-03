import gsap from "gsap";

export const noTriggerToAnimations = (target, animationProps) => {
    gsap.to(target, {
        ...animationProps
    })
}