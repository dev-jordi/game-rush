
import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { Task } from './types';
import { TASKS } from './constants';
import Character from './components/Character';
import TaskObject from './components/TaskObject';
import StatsBar from './components/StatsBar';
import GameOverMenu from './components/GameOverMenu';
import PauseMenu from './components/PauseMenu';
import WinMenu from './components/WinMenu';
import Explosion from './components/Explosion';
import StartMenu from './components/StartMenu';
import { soundManager } from './sounds';
import VolumeControl from './components/VolumeControl';

type GameState = 'IDLE' | 'MOVING' | 'WORKING';
type AppState = 'MENU' | 'PLAYING' | 'PAUSED' | 'GAME_OVER' | 'WON';

const INITIAL_STATE = {
  level: 1,
  xp: 0,
  energy: 100,
  maxEnergy: 100,
  // Posição inicial ajustada para 80% (perto da barra inferior) em vez de 100% (fora da tela)
  characterPosition: { top: '80%', left: '50%' },
  gameState: 'IDLE' as GameState,
  currentTaskId: null as number | null,
  volume: 0.5,
};

const getXpToNextLevel = (level: number) => Math.floor(100 * Math.pow(1.5, level - 1));

const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
);

const RestartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"></polyline>
        <polyline points="1 20 1 14 7 14"></polyline>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
);

const App: React.FC = () => {
  const [level, setLevel] = useState(INITIAL_STATE.level);
  const [xp, setXp] = useState(INITIAL_STATE.xp);
  const [energy, setEnergy] = useState(INITIAL_STATE.energy);
  const [maxEnergy, setMaxEnergy] = useState(INITIAL_STATE.maxEnergy);
  const [characterPosition, setCharacterPosition] = useState(INITIAL_STATE.characterPosition);
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE.gameState);
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(INITIAL_STATE.currentTaskId);
  const [volume, setVolume] = useState(INITIAL_STATE.volume);
  
  const [appState, setAppState] = useState<AppState>('MENU');

  type ExplosionState = { id: number; position: { top: string; left: string } };
  const [explosions, setExplosions] = useState<ExplosionState[]>([]);
  const explosionIdCounter = useRef(0);

  const xpToNextLevel = getXpToNextLevel(level);

  useEffect(() => {
    soundManager.setVolume(volume);
  }, []);

  useEffect(() => {
    if (appState === 'PLAYING') {
      soundManager.playBgm();
    } else {
      soundManager.stopBgm();
    }
  }, [appState]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
    soundManager.setVolume(newVolume);
  }, []);

  const addExplosion = useCallback((position: { top: string; left: string }) => {
    const newId = explosionIdCounter.current++;
    setExplosions(prev => [...prev, { id: newId, position }]);
  }, []);
  
  const removeExplosion = useCallback((id: number) => {
    setExplosions(prev => prev.filter(exp => exp.id !== id));
  }, []);

  const handleTaskClick = useCallback((task: Task) => {
    if (gameState !== 'IDLE' || appState !== 'PLAYING') return;

    const energyCost = task.energyCost;
    if (energy < energyCost) {
      // Not enough energy - Feedback visual could be added here
      return;
    }
    
    soundManager.play('move');
    setGameState('MOVING');
    setCharacterPosition(task.position);

    // Movimento mais rápido (de 1000ms para 600ms)
    const travelTime = 600;

    setTimeout(() => {
      setGameState('WORKING');
      setCurrentTaskId(task.id);
      
      const newEnergy = Math.min(maxEnergy, Math.max(0, energy - energyCost));
      setEnergy(newEnergy);

      setTimeout(() => {
        setXp(prevXp => prevXp + task.xpGain);
        setGameState('IDLE');
        setCurrentTaskId(null);
        soundManager.play('complete');
        addExplosion(task.position);
      }, task.duration);
    }, travelTime);
  }, [gameState, appState, energy, maxEnergy, addExplosion]);

  // Level up check
  useEffect(() => {
    if (appState !== 'PLAYING') return;
    if (xp >= xpToNextLevel) {
      soundManager.play('levelUp');
      setLevel(prevLevel => {
        const newLevel = prevLevel + 1;
        if (newLevel === 10) { // Aumentei o nível máximo para dar mais tempo de jogo
          setAppState('WON');
        }
        return newLevel;
      });
      setXp(prevXp => prevXp - xpToNextLevel);
      const newMaxEnergy = Math.floor(maxEnergy * 1.1);
      setMaxEnergy(newMaxEnergy);
      setEnergy(newMaxEnergy); // Full heal on level up
      addExplosion({ top: '50%', left: '50%' });
    }
  }, [xp, xpToNextLevel, addExplosion, appState, maxEnergy]);

  // Game over and win check
  useEffect(() => {
    if (appState === 'GAME_OVER') {
      soundManager.play('gameOver');
    } else if (appState === 'WON') {
      soundManager.play('win');
    }
  }, [appState]);

  useEffect(() => {
    // Game Over imediato se a energia acabar
    if (energy <= 0 && appState === 'PLAYING') {
      setAppState('GAME_OVER');
    }
  }, [energy, appState]);
  
  const handleStart = () => {
    soundManager.play('start');
    setAppState('PLAYING');
  };
  
  const handleRestart = () => {
    setLevel(INITIAL_STATE.level);
    setXp(INITIAL_STATE.xp);
    setEnergy(INITIAL_STATE.energy);
    setMaxEnergy(INITIAL_STATE.maxEnergy);
    setCharacterPosition(INITIAL_STATE.characterPosition);
    setGameState(INITIAL_STATE.gameState);
    setCurrentTaskId(INITIAL_STATE.currentTaskId);
    setExplosions([]);
    soundManager.play('start');
    setAppState('PLAYING');
  };

  const handlePause = () => {
    // Ao pausar, o jogador vence o jogo (a verdadeira vitória é parar)
    setAppState('WON');
  };

  const handleResume = () => {
    setAppState('PLAYING');
  };

  return (
    <main className="w-screen h-screen overflow-hidden relative font-sans select-none touch-none">
      <VolumeControl onVolumeChange={handleVolumeChange} initialVolume={volume} />
       {appState === 'PLAYING' && (
        <div className="absolute top-4 left-4 z-20 flex gap-3">
            <button 
              onClick={handlePause} 
              className="p-3 bg-white/10 dark:bg-black/30 border border-white/20 rounded-full shadow-lg backdrop-blur-md hover:scale-110 hover:bg-white/20 transition-all active:scale-95"
              aria-label="Pausar o jogo"
              title="Pausar (Vencer)"
            >
              <PauseIcon className="w-6 h-6 text-slate-200" />
            </button>
            <button 
              onClick={handleRestart} 
              className="p-3 bg-white/10 dark:bg-black/30 border border-white/20 rounded-full shadow-lg backdrop-blur-md hover:scale-110 hover:bg-white/20 transition-all active:scale-95"
              aria-label="Reiniciar o jogo"
              title="Reiniciar"
            >
              <RestartIcon className="w-6 h-6 text-slate-200" />
            </button>
        </div>
      )}
      
      {appState === 'MENU' && <StartMenu onStart={handleStart} />}

      {appState !== 'MENU' && (
        <>
          <div id="game-area" className="absolute inset-0 w-full h-full">
            {TASKS.map(task => (
              <TaskObject 
                key={task.id}
                task={task}
                onClick={handleTaskClick}
                isWorking={currentTaskId === task.id}
                isDisabled={gameState !== 'IDLE' || energy < task.energyCost}
              />
            ))}

            <Character 
              position={characterPosition}
              gameState={gameState}
              energy={energy}
              maxEnergy={maxEnergy}
            />

            {explosions.map(exp => (
              <Explosion 
                key={exp.id}
                id={exp.id}
                position={exp.position}
                onComplete={removeExplosion}
              />
            ))}
          </div>

          <StatsBar 
            level={level}
            xp={xp}
            xpToNextLevel={xpToNextLevel}
            energy={energy}
            maxEnergy={maxEnergy}
          />
        </>
      )}
      
      {appState === 'GAME_OVER' && <GameOverMenu onRestart={handleRestart} level={level} />}
      {appState === 'PAUSED' && <PauseMenu onResume={handleResume} />}
      {appState === 'WON' && <WinMenu onRestart={handleRestart} />}
    </main>
  );
};

export default App;
