import React from 'react';

interface PauseMenuProps {
  onResume: () => void;
}

const PauseMenu: React.FC<PauseMenuProps> = ({ onResume }) => {
  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center z-10 p-4">
      <div className="text-center bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-2xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-700 dark:text-slate-200 mb-4">Pausado</h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-md">
          A vida não tem botão de pausa, mas o seu jogo sim. Aproveite!
        </p>
        <button
          onClick={onResume}
          className="px-8 py-3 bg-teal-500 text-white font-bold text-lg rounded-full hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-700 transition-transform transform hover:scale-105"
        >
          Continuar
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

export default PauseMenu;