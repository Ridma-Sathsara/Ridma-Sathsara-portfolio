import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const SparklesWrapper = styled.div`
  position: fixed;  // Fixing the position globally
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
`;



const SparklesCore = ({
  background = 'transparent',
  minSize = 2,
  maxSize = 6,
  particleDensity = 100,
  particleColor = '#FFD700',
  className,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particles = [];

    for (let i = 0; i < particleDensity; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * (maxSize - minSize) + minSize;

      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = particleColor;
      particle.style.borderRadius = '50%';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.opacity = 0;
      particle.style.animation = `sparkle ${Math.random() * 2 + 1}s ease-out infinite`;

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((particle) => container.removeChild(particle));
    };
  }, [particleDensity, minSize, maxSize, particleColor]);

  return (
    <SparklesWrapper
      ref={containerRef}
      className={className}
      style={{ background }}
    ></SparklesWrapper>
  );
};

export default SparklesCore;
