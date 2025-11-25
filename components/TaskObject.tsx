
import React from 'react';
import type { Task } from '../types';

interface TaskObjectProps {
  task: Task;
  onClick: (task: Task) => void;
  isWorking: boolean;
  isDisabled: boolean;
}

const TaskObject: React.FC<TaskObjectProps> = ({ task, onClick, isWorking, isDisabled }) => {
  return (
    <div
      className={`absolute flex flex-col items-center gap-3 group transition-all duration-300
        ${isDisabled && !isWorking ? 'cursor-not-allowed opacity-50 grayscale' : 'cursor-pointer'}`}
      style={{ top: task.position.top, left: task.position.left, transform: 'translate(-50%, -50%)' }}
      aria-label={`Iniciar tarefa: ${task.name}`}
      role="button"
      onClick={() => !isDisabled && onClick(task)}
    >
      <div
        className={`
            relative w-24 h-24 md:w-28 md:h-28 
            bg-white/10 dark:bg-black/20 
            backdrop-blur-md border border-white/20 
            rounded-full flex items-center justify-center 
            shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            group-hover:scale-110 group-hover:bg-white/15 
            group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
            transition-all duration-300 ease-out
        `}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 filter drop-shadow-md">
            {task.icon}
        </div>
        
        {/* Working ring effect */}
        {isWorking && (
             <div className="absolute inset-[-4px] border-2 border-teal-400/50 rounded-full animate-ping"></div>
        )}
      </div>
      
      <div className="text-center h-10 flex flex-col items-center">
        <span className="text-xs md:text-sm font-bold text-slate-200 tracking-wide uppercase shadow-black drop-shadow-md whitespace-nowrap bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
            {task.name}
        </span>
        {isWorking && (
            <div className="absolute mt-9 w-24 bg-black/40 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/10">
                <div 
                    className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 h-full rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" 
                    style={{ animation: `progress ${task.duration}ms linear forwards`}}
                ></div>
            </div>
        )}
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default TaskObject;
