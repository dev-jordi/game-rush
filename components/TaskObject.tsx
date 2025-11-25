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
      className={`absolute flex flex-col items-center gap-2 group transition-opacity duration-300
        ${isDisabled && !isWorking ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
      style={{ top: task.position.top, left: task.position.left, transform: 'translate(-50%, -50%)' }}
      aria-label={`Iniciar tarefa: ${task.name}`}
      role="button"
      onClick={() => !isDisabled && onClick(task)}
    >
      <div
        className="relative w-24 h-24 md:w-28 md:h-28 bg-white/60 dark:bg-slate-800/60 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ease-out backdrop-blur-sm"
      >
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-teal-400/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
            {task.icon}
        </div>
      </div>
      
      <div className="text-center h-10 flex flex-col items-center">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">{task.name}</span>
        {isWorking && (
            <div className="absolute mt-7 w-20 bg-slate-200/80 dark:bg-slate-700/80 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                <div 
                    className="bg-gradient-to-r from-teal-400 to-emerald-500 h-2.5 rounded-full" 
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