import gsap from "gsap";

export const noTriggerToAnimations = (target, animationProps) => {
    gsap.to(target, {
        ...animationProps
    })
}

export const triggerToAnimations = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            ...scrollProps
        }
    })
}