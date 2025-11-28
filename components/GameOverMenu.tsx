
import React from 'react';

interface GameOverMenuProps {
  onRestart: () => void;
  level: number;
}

const GameOverMenu: React.FC<GameOverMenuProps> = ({ onRestart, level }) => {
  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-50 p-6">
      <div className="text-center bg-gray-900/90 border border-red-500/30 p-8 rounded-2xl shadow-2xl animate-fade-in-up max-w-md w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-2">ESGOTADO</h1>
        <div className="h-1 w-20 bg-red-500 mx-auto mb-6 rounded-full"></div>
        
        <p className="text-xl text-slate-200 mb-4">
          Você chegou ao <span className="font-bold text-teal-400">Nível {level}</span> antes de colapsar.
        </p>
        
        <div className="bg-red-500/10 p-4 rounded-lg mb-8 border border-red-500/20">
          <p className="text-sm md:text-base text-red-200 font-semibold">
            ⚠ ATENÇÃO: A única maneira de vencer a rotina é sabendo a hora de <span className="underline decoration-2 underline-offset-4">PAUSAR</span>.
          </p>
        </div>

        <button
          onClick={onRestart}
          className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold text-lg rounded-xl hover:from-teal-500 hover:to-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-900 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-teal-500/20"
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
