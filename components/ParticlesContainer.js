import {Particles} from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  // init
  const particlesInt = useCallback(async (engine) => {
    await loadFull(engine);
  },[]);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      classname='w-full h-full absolute translate-z-0'
      id='tsparticles'
      init={particlesInt}
      loaded={particlesLoaded}
      options={{
        fullscreen: {enable: false},
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit:120,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode:'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 98
            },
            repulse: {
              distance: 200,
              duration: 6.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ff90a4',
          },
          links: {
            color: '#409DF0',
            distance: 150,
            enable: true,
            opacity: 8.5,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: 1,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      />
  );
};

export default ParticlesContainer;
