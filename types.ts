import type { ReactNode } from 'react';

export interface Task {
  id: number;
  name: string;
  duration: number; // in milliseconds
  icon: ReactNode;
  position: {
    top: string;
    left: string;
  };
  xpGain: number;
  energyCost: number;
}