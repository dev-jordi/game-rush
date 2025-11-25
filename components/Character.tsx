import React from 'react';

type GameState = 'IDLE' | 'MOVING' | 'WORKING';

interface CharacterProps {
  position: { top: string; left: string; };
  gameState: GameState;
  energy: number;
  maxEnergy: number;
}

const Character: React.FC<CharacterProps> = ({ position, gameState, energy, maxEnergy }) => {
  const isTired = energy / maxEnergy <= 0.3;

  const animationClass = {
    'IDLE': isTired ? 'animate-tired-human' : 'animate-breathing-human',
    'WORKING': 'animate-working-human',
    'MOVING': ''
  }[gameState];

  return (
    <div
      className={`absolute transition-all ${isTired ? 'duration-[2000ms]' : 'duration-1000'}`}
      style={{
        ...position,
        width: '40px',
        height: '60px',
        transform: 'translateX(-50%) translateY(-100%)',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <svg viewBox="0 0 40 60" className={`w-full h-full ${animationClass}`} style={{ transformOrigin: 'bottom center' }}>
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2" />
          </filter>
        </defs>
        <g filter="url(#shadow)">
          {/* Sombra do Chão */}
          <ellipse cx="20" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />

          {/* Pernas */}
          <rect x="12" y="42" width="6" height="15" rx="3" fill="#4A5568" />
          <rect x="22" y="42" width="6" height="15" rx="3" fill="#4A5568" />
          
          {/* Corpo */}
          <rect x="10" y="25" width="20" height="20" rx="10" fill="#4fd1c5" />

          {/* Cabeça */}
          <g>
            <circle cx="20" cy="15" r="10" fill="#f6ad55" />
            
            {/* Cabelo */}
            <path d="M12 15 A 8 8 0 0 1 28 15 A 10 10 0 0 1 12 15 Z" fill="#4A5568" />
            
            {/* Olhos */}
            <g className={isTired ? 'eyes-tired' : 'eyes-normal'}>
              <circle cx="17" cy="15" r="1.5" fill="#2D3748" />
              <circle cx="23" cy="15" r="1.5" fill="#2D3748" />
            </g>
          </g>
        </g>
      </svg>

      <style>{`
          @keyframes breathing-human {
              0%, 100% { transform: scaleY(1) translateY(0); }
              50% { transform: scaleY(1.02) translateY(-1px); }
          }
          .animate-breathing-human { animation: breathing-human 4s ease-in-out infinite; }
          
          @keyframes tired-human {
              0%, 100% { transform: scaleY(0.98) translateY(0); }
              50% { transform: scaleY(1) translateY(1px); }
          }
          .animate-tired-human { animation: tired-human 6s ease-in-out infinite; }

          @keyframes working-human {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              25% { transform: translateY(-2px) rotate(-1deg); }
              75% { transform: translateY(1px) rotate(1deg); }
          }
          .animate-working-human { animation: working-human 0.8s ease-in-out infinite; }
          
          .eyes-normal {
            transform-origin: center;
            animation: blink 5s ease-in-out infinite 1s;
          }
          .eyes-tired > circle {
              transform: scaleY(0.1);
              transform-origin: center;
              transition: transform 0.5s;
          }

          @keyframes blink {
              0%, 95%, 100% { transform: scaleY(1); }
              97% { transform: scaleY(0.1); }
          }
      `}</style>
    </div>
  );
};

export default Character;