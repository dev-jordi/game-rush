
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
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-11/12 max-w-lg z-10">
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl flex flex-col gap-3">
                
                {/* Level Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1 rounded-full shadow-lg border border-white/20">
                    <span className="font-bold text-sm text-white tracking-wider">NÍVEL {level}</span>
                </div>

                <div className="mt-2 flex flex-col gap-3">
                    {/* XP Bar */}
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-xs text-yellow-400 w-6">XP</span>
                        <div className="flex-1 bg-black/50 rounded-full h-3 relative overflow-hidden border border-white/5">
                            <div 
                                className="bg-gradient-to-r from-yellow-500 to-amber-600 h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                                style={{ width: `${xpPercentage}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Energy Bar */}
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-xs text-emerald-400 w-6">ENE</span>
                         <div className="flex-1 bg-black/50 rounded-full h-3 relative overflow-hidden border border-white/5">
                            <div 
                                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                                style={{ width: `${energyPercentage}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
