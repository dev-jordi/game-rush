import React from 'react';

interface StatsBarProps {
    level: number;
    xp: number;
    xpToNextLevel: number;
    energy: number;
    maxEnergy: number;
}

const StatsBar: React.FC<StatsBarProps> = ({ level, xp, xpToNextLevel, energy, maxEnergy }) => {
    const xpPercentage = (xp / xpToNextLevel) * 100;
    const energyPercentage = (energy / maxEnergy) * 100;

    return (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-11/12 max-w-md z-10 p-2 bg-white/60 dark:bg-slate-800/60 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="flex flex-col gap-2">
                {/* Level Display */}
                <div className="text-center">
                    <span className="font-bold text-xl text-teal-600 dark:text-teal-400">Nível {level}</span>
                </div>

                {/* XP Bar */}
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-yellow-600 dark:text-yellow-400">XP</span>
                    <div className="w-full bg-slate-200/80 dark:bg-slate-700/80 rounded-full h-4 relative overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-yellow-400 to-amber-500 h-full rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${xpPercentage}%` }}
                        ></div>
                         <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white text-shadow-sm">{Math.floor(xp)} / {xpToNextLevel}</span>
                    </div>
                </div>

                {/* Energy Bar */}
                <div className="flex items-center gap-2">
                     <span className="font-semibold text-sm text-lime-600 dark:text-lime-400">⚡</span>
                     <div className="w-full bg-slate-200/80 dark:bg-slate-700/80 rounded-full h-4 relative overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-lime-400 to-green-500 h-full rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${energyPercentage}%` }}
                        ></div>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white text-shadow-sm">{Math.floor(energy)} / {maxEnergy}</span>
                    </div>
                </div>
            </div>
            <style>{`
                .text-shadow-sm {
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
                }
            `}</style>
        </div>
    );
};

export default StatsBar;