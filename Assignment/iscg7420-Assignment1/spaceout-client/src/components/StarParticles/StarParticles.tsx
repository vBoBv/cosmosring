import React from 'react';
import Particles from 'react-particles-js';
import { useStyles } from './StarParticlesCSS';

const StarParticles = () => {
	const { starParticles } = useStyles();

	return (
		<Particles
			className={starParticles}
			params={{
				particles: {
					number: { value: 300, density: { enable: true, value_area: 1000 } },
					color: { value: '#ffffff' },
					opacity: { value: 1, random: false, anim: { enable: true, speed: 1, opacity_min: 0, sync: false } },
					size: { value: 1, random: true, anim: { enable: false, speed: 4, size_min: 0.3, sync: false } },
					line_linked: { enable: false, distance: 10, color: '#ffffff', opacity: 0.4, width: 1 },
					move: {
						enable: true,
						speed: 3,
						direction: 'none',
						random: true,
						straight: false,
						out_mode: 'out',
						bounce: false,
						attract: { enable: false, rotateX: 600, rotateY: 1200 }
					}
				},
				interactivity: {
					detect_on: 'canvas',
					events: {
						onhover: { enable: true, mode: 'repulse' },
						onclick: { enable: true, mode: 'push' },
						resize: true
					},
					modes: {
						grab: { distance: 400, line_linked: { opacity: 1 } },
						bubble: { distance: 250, size: 0, duration: 2, opacity: 0 },
						repulse: { distance: 100, duration: 0.4 },
						push: { particles_nb: 100 },
						remove: { particles_nb: 2 }
					}
				},
				retina_detect: true
			}}
		/>
	);
};

export default StarParticles;
