import { ScrollTrigger } from 'gsap/all';
import { gsap, Power4 } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

export const animTo = (el, properties, trigger, start, end, scrub, toggleActions, container) => {
    gsap.to(el, {
        ...properties,
        scrollTrigger: {
            trigger : trigger,
            start : start,
            end : end.length ? end : '',
            scrub : scrub || false,
            toggleActions: toggleActions.length ? toggleActions : '',
            containerAnimation: container || ''
        }
    })
}

export const animFrom = (el, properties, trigger, start, end, scrub, toggleActions, container) => {
    gsap.from(el, {
        ...properties,
        scrollTrigger: {
            trigger : trigger,
            start : start,
            end : end.length ? end : '',
            scrub : scrub || false,
            toggleActions: toggleActions.length ? toggleActions : '',
            containerAnimation: container || ''
        }
    })
}