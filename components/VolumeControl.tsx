import React, { useState } from 'react';

interface VolumeControlProps {
  initialVolume?: number;
  onVolumeChange: (volume: number) => void;
}

const VolumeIcon: React.FC<{ volume: number; className?: string }> = ({ volume, className }) => {
  if (volume === 0) {
    return <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>;
  }
  if (volume < 0.5) {
    return <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>;
  }
  return <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>;
};

const VolumeControl: React.FC<VolumeControlProps> = ({ initialVolume = 0.5, onVolumeChange }) => {
  const [volume, setVolume] = useState(initialVolume);
  const [isHovering, setIsHovering] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    onVolumeChange(newVolume);
  };

  return (
    <div
      className="absolute top-4 right-4 z-20 flex items-center gap-2 p-2 bg-white/60 dark:bg-slate-800/60 rounded-full shadow-lg backdrop-blur-sm"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <VolumeIcon volume={volume} className="w-6 h-6 text-slate-700 dark:text-slate-300 flex-shrink-0" />
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isHovering ? 'w-24' : 'w-0'}`}>
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24"
            style={{ accentColor: '#4fd1c5' }}
        />
      </div>
    </div>
  );
};

export default VolumeControl;
