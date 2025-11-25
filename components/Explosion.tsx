import React, { useEffect, useMemo } from 'react';

interface ExplosionProps {
  id: number;
  position: { top: string; left: string };
  onComplete: (id: number) => void;
}

const PARTICLE_COUNT = 15;
const DURATION = 600;

const Explosion: React.FC<ExplosionProps> = ({ id, position, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(id);
    }, DURATION);
    return () => clearTimeout(timer);
  }, [id, onComplete]);

  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const angle = (360 / PARTICLE_COUNT) * i;
      const distance = 40 + Math.random() * 40;
      const size = 5 + Math.random() * 5;
      const delay = Math.random() * 100;

      return {
        style: {
          '--angle': `${angle}deg`,
          '--distance': `${distance}px`,
          '--size': `${size}px`,
          '--delay': `${delay}ms`,
          '--duration': `${DURATION}ms`,
        } as React.CSSProperties,
      };
    });
  }, []);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)',
        width: '1px',
        height: '1px',
      }}
    >
      {particles.map((p, i) => (
        <div key={i} className="particle" style={p.style} />
      ))}
      <style>{`
        .particle {
          position: absolute;
          background-color: #4fd1c5; /* teal-400 */
          border-radius: 50%;
          width: var(--size);
          height: var(--size);
          animation: explode var(--duration) ease-out forwards;
          animation-delay: var(--delay);
        }
        @keyframes explode {
          0% {
            transform: rotate(var(--angle)) translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--angle)) translateX(var(--distance)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Explosion;
