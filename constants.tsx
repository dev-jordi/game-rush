
import React from 'react';
import type { Task } from './types';
import { PostIcon, EmailIcon, GamepadIcon, ClipboardIcon, BookIcon } from './components/icons';

const ICON_CLASS = "w-10 h-10 md:w-12 md:h-12 transition-transform duration-300";

// Ajuste de posições para evitar colisão com HUD que foi elevada
// Aumentei o espaço na base para garantir que os ícones inferiores não fiquem atrás da stats bar

export const TASKS: Task[] = [
  // Surrounding Tasks
  { id: 1, name: "Criar post", duration: 1200, icon: <PostIcon className={ICON_CLASS} />, position: { top: '15%', left: '50%' }, xpGain: 15, energyCost: 12 },
  { id: 2, name: "Responder E-mails", duration: 1500, icon: <EmailIcon className={ICON_CLASS} />, position: { top: '30%', left: '85%' }, xpGain: 20, energyCost: 18 },
  { id: 3, name: "Distração rápida", duration: 2000, icon: <GamepadIcon className={ICON_CLASS} />, position: { top: '55%', left: '80%' }, xpGain: 35, energyCost: 35 }, 
  { id: 4, name: "Entregar tarefas", duration: 1400, icon: <ClipboardIcon className={ICON_CLASS} />, position: { top: '55%', left: '20%' }, xpGain: 18, energyCost: 15 },
  { id: 5, name: "Estudar para prova", duration: 1800, icon: <BookIcon className={ICON_CLASS} />, position: { top: '30%', left: '15%' }, xpGain: 25, energyCost: 22 },
];


export const CHARACTER_SIZE = { width: 40, height: 60 };

export const GAME_BOUNDS_PADDING = 20; // in pixels
