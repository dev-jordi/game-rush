
import React from 'react';
import type { Task } from './types';
import { SleepIcon, PostIcon, EmailIcon, GamepadIcon, ClipboardIcon, BookIcon } from './components/icons';

const ICON_CLASS = "w-10 h-10 md:w-12 md:h-12 transition-transform duration-300";

export const TASKS: Task[] = [
  // Center Task
  { id: 6, name: "Cochilo de 5 Minutos", duration: 6000, icon: <SleepIcon className={ICON_CLASS} />, position: { top: '50%', left: '50%' }, xpGain: 0, energyCost: -30 },
  
  // Surrounding Tasks
  { id: 1, name: "Criar post", duration: 2500, icon: <PostIcon className={ICON_CLASS} />, position: { top: '25%', left: '50%' }, xpGain: 10, energyCost: 10 },
  { id: 2, name: "Responder E-mails", duration: 3500, icon: <EmailIcon className={ICON_CLASS} />, position: { top: '45%', left: '80%' }, xpGain: 15, energyCost: 15 },
  { id: 3, name: "Distração rápida", duration: 5000, icon: <GamepadIcon className={ICON_CLASS} />, position: { top: '75%', left: '70%' }, xpGain: 30, energyCost: 30 },
  { id: 4, name: "Entregar tarefas", duration: 3000, icon: <ClipboardIcon className={ICON_CLASS} />, position: { top: '75%', left: '30%' }, xpGain: 12, energyCost: 10 },
  { id: 5, name: "Estudar para prova", duration: 4000, icon: <BookIcon className={ICON_CLASS} />, position: { top: '45%', left: '20%' }, xpGain: 20, energyCost: 20 },
];


export const CHARACTER_SIZE = { width: 40, height: 60 };

export const GAME_BOUNDS_PADDING = 20; // in pixels
