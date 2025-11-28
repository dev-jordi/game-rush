
import React from 'react';

interface StatsBarProps {
    level: number;
    xp: number;
    xpToNextLevel: number;
    energy: number;
    maxEnergy: number;
}

const StatsBar: React.FC<StatsBarProps> = ({ level, xp, xpToNextLevel, energy, maxEnergy }) => {
    const xpPercentage = Math.min(100, (xp / xpToNextLevel) * 100);
    const energyPercentage = Math.min(100, (energy / maxEnergy) * 100);

    return (
        // Mudança de bottom-4 para bottom-12/md:bottom-16 para elevar a HUD
        <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 w-[95%] max-w-lg z-10">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl flex flex-col gap-2 relative">
                
                {/* Level Badge */}
                <div className="absolute -top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 rounded-full shadow-lg border border-white/20">
                    <span className="font-bold text-xs text-white tracking-wider">NÍVEL {level}</span>
                </div>

                <div className="flex flex-col gap-3">
                    {/* Energy Bar (Prioridade Visual) */}
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-end px-1">
                            <span className="font-bold text-xs text-emerald-400">ENERGIA</span>
                            <span className="text-[10px] text-slate-400">{Math.floor(energy)}/{maxEnergy}</span>
                        </div>
                         <div className="w-full bg-black/50 rounded-full h-4 relative overflow-hidden border border-white/5">
                            <div 
                                className={`h-full rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(16,185,129,0.3)] ${energy < 30 ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-r from-emerald-500 to-teal-500'}`}
                                style={{ width: `${energyPercentage}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* XP Bar */}
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-end px-1">
                             <span className="font-bold text-xs text-yellow-400">PROGRESSO</span>
                             <span className="text-[10px] text-slate-400">{Math.floor(xp)}/{xpToNextLevel} xp</span>
                        </div>
                        <div className="w-full bg-black/50 rounded-full h-2 relative overflow-hidden border border-white/5">
                            <div 
                                className="bg-gradient-to-r from-yellow-500 to-amber-600 h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                                style={{ width: `${xpPercentage}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
