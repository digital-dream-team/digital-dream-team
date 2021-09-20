'use strict';
document.addEventListener('DOMContentLoaded', () => {

	//start parallax animatons for sections (NOT FOR MAIN SCREEN)
	gsap.registerPlugin(ScrollTrigger);

	gsap.to('.show__bg', {
		scrollTrigger: {
			trigger: ".show__bg",
			start: "top top",
			end: "+=800",
			scrub: 1,
			markers: false,
		},
			y: "-10%",
			rotation: 0,
			duration: 1,

		}
	);

	gsap.to('.procedure__bg', {
		scrollTrigger: {
			trigger: ".procedure__bg",
			start: "top 70%",
			end: "+=1200",
			scrub: 1,
			markers: false,
		},
			y: "-20%",
			rotation: 0,
			duration: 1,

		}
	);

	gsap.to('.advantages__bg', {
		scrollTrigger: {
			trigger: ".advantages__bg",
			start: "top 70%",
			end: "+=1200",
			scrub: 1,
			markers: false,
		},
			y: "-20%",
			rotation: 0,
			duration: 1,

		}
	);

	gsap.to('.blog__bg', {
		scrollTrigger: {
			trigger: ".blog__bg",
			start: "top 70%",
			end: "+=2000",
			scrub: 1,
			markers: false,
		},
			y: "-20%",
			rotation: 0,
			duration: 1,

		}
	);

	gsap.to('.contacts__bg', {
		scrollTrigger: {
			trigger: ".contacts__bg",
			start: "top",
			end: "+=500",
			scrub: 1,
			markers: false,
		},
			y: "-20%",
			rotation: 0,
			duration: 1,

		}
	);

	//end parallax animatons for sections (NOT FOR MAIN SCREEN)

});