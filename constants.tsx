import React from 'react';
import type { Task } from './types';
import { CoffeeIcon, EmailIcon, PlantIcon, BookIcon, CodeIcon, SnackIcon } from './components/icons';

const ICON_CLASS = "w-10 h-10 md:w-12 md:h-12 text-slate-500 dark:text-slate-300 group-hover:text-teal-500 transition-colors";

export const TASKS: Task[] = [
  // Center Task
  { id: 6, name: "Cochilo de 5 Minutos", duration: 6000, icon: <SnackIcon className={ICON_CLASS} />, position: { top: '50%', left: '50%' }, xpGain: 0, energyCost: -30 },
  
  // Surrounding Tasks
  { id: 1, name: "Mais um Café", duration: 2500, icon: <CoffeeIcon className={ICON_CLASS} />, position: { top: '25%', left: '50%' }, xpGain: 10, energyCost: 10 },
  { id: 2, name: "Responder E-mails Urgentes", duration: 3500, icon: <EmailIcon className={ICON_CLASS} />, position: { top: '45%', left: '80%' }, xpGain: 15, energyCost: 15 },
  { id: 3, name: "Entregar tarefas", duration: 5000, icon: <CodeIcon className={ICON_CLASS} />, position: { top: '75%', left: '70%' }, xpGain: 30, energyCost: 30 },
  { id: 4, name: "Distração Rápida", duration: 3000, icon: <PlantIcon className={ICON_CLASS} />, position: { top: '75%', left: '30%' }, xpGain: 12, energyCost: 10 },
  { id: 5, name: "Estudar para a Prova", duration: 4000, icon: <BookIcon className={ICON_CLASS} />, position: { top: '45%', left: '20%' }, xpGain: 20, energyCost: 20 },
];


export const CHARACTER_SIZE = { width: 40, height: 60 };

export const GAME_BOUNDS_PADDING = 20; // in pixels