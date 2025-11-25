import React from 'react';

interface GameOverMenuProps {
  onRestart: () => void;
  level: number;
}

const GameOverMenu: React.FC<GameOverMenuProps> = ({ onRestart, level }) => {
  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center z-20 p-4">
      <div className="text-center bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-2xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-red-500 mb-4">Fim de Jogo</h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-2">
          Sua energia acabou! Você alcançou o nível <span className="font-bold text-teal-500">{level}</span>.
        </p>
        <p className="text-md text-slate-500 dark:text-slate-400 mb-8">Lembre-se de fazer pausas para recarregar as energias.</p>
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-teal-500 text-white font-bold text-lg rounded-full hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-700 transition-transform transform hover:scale-105"
        >
          Tentar Novamente
        </button>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GameOverMenu;
