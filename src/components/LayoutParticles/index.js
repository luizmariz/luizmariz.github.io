import React, { useEffect } from 'react';

import * as S from './styled';

function LayoutParticles() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function () {
        const requestAnimationFrame =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;
      })();

      const particles = {};

      let particleCanvas;
      let context;
      let animationFrameId;
      let particleIndex = 0;
      let settings = {};

      const initializeCanvas = () => {
        particleCanvas = document.getElementById('ParticleCanvas');

        if (!particleCanvas) return;

        context = particleCanvas.getContext('2d');

        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;

        settings = {
          density: 100,
          particleSize: 1,
          startingX: particleCanvas.width,
          startingY: particleCanvas.height
        };

        const createParticle = () => {
          const particle = {
            x: settings.startingX * (Math.random() * 10),
            y: settings.startingY,
            vx: (Math.random() * 2) / 3 - (Math.random() * 3) / 3,
            vy: -((Math.random() * 5) / 3),
            life: 0,
            maxLife: 200,
            alpha: 0.5,
            red: 255,
            green: 255,
            blue: 255,
            id: ++particleIndex
          };
          particles[particle.id] = particle;

          return particle;
        };

        const updateParticle = (particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          particle.life++;
          particle.red += 2;
          particle.alpha -= 0.005;

          if (particle.life >= particle.maxLife) {
            delete particles[particle.id];
          }
        };

        const drawParticle = (particle) => {
          context.beginPath();
          context.fillStyle = `rgba(${particle.red}, ${particle.green}, ${particle.blue}, ${particle.alpha})`;
          context.arc(
            particle.x,
            particle.y,
            settings.particleSize,
            0,
            Math.PI * 2,
            true
          );
          context.closePath();
          context.fill();
        };

        const animateDust = () => {
          context.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

          for (let i = 0; i < settings.density; i++) {
            if (Math.random() > 0.97) {
              createParticle();
            }
          }

          Object.keys(particles).forEach((key) => {
            const particle = particles[key];
            updateParticle(particle);
            drawParticle(particle);
          });

          animationFrameId = window.requestAnimationFrame(animateDust);
        };

        animateDust();
      };

      if (document.readyState === 'complete') {
        initializeCanvas();
      } else {
        window.addEventListener('load', initializeCanvas);
      }

      return () => {
        window.removeEventListener('load', initializeCanvas);
        if (animationFrameId) {
          window.cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, []);

  return <S.Canvas id="ParticleCanvas"></S.Canvas>;
}

export default LayoutParticles;
