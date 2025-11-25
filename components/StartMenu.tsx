import React from 'react';

interface StartMenuProps {
  onStart: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onStart }) => {
  return (
    <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-md flex flex-col items-center justify-center z-30 p-4 animate-fade-in">
      <div className="text-center bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-2xl max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-teal-500 mb-4">Rushline</h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
          Antes de começar, respire — talvez você vá precisar disso.

Você terá três chances. Não para acertar, mas para perceber.
O objetivo? Quem sabe você descubra no caminho.

Este é um jogo em movimento constante. As regras existem, mas nenhuma será explicada aqui. Cabe a você interpretar sinais, sentir o ritmo e entender quando agir… ou não. 

Seu desafio é simples: acompanhe. Observe. Entenda por conta própria.
Cada tentativa revela algo novo. Cada nível diz mais do que parece. 

Quando estiver pronto(a), pressione Iniciar.
        </p>
        <button
          onClick={onStart}
          className="px-10 py-4 bg-teal-500 text-white font-bold text-xl rounded-full hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-700 transition-transform transform hover:scale-105"
        >
          Iniciar
        </button>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default StartMenu;
