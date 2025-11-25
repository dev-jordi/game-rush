
import React from 'react';

// Common classes for sizing are passed in via props

export const SleepIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path className="text-indigo-400 opacity-20" fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    <path className="text-indigo-500" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    <path className="text-indigo-300" d="M16 8h.01" />
    <path className="text-indigo-300" d="M19 5h.01" />
  </svg>
);

export const PostIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect className="text-pink-500 opacity-20" fill="currentColor" x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <rect className="text-pink-500" x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <path className="text-pink-200" d="M12 11.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
    <path className="text-pink-200" d="M12 11.5v-3" />
    <circle className="text-pink-100" cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect className="text-blue-500 opacity-20" fill="currentColor" x="2" y="4" width="20" height="16" rx="2" />
    <rect className="text-blue-400" x="2" y="4" width="20" height="16" rx="2" />
    <path className="text-blue-200" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const GamepadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect className="text-purple-500 opacity-20" fill="currentColor" x="2" y="6" width="20" height="12" rx="4" />
    <rect className="text-purple-400" x="2" y="6" width="20" height="12" rx="4" />
    <path className="text-purple-200" d="M6 12h3" />
    <path className="text-purple-200" d="M7.5 10.5v3" />
    <circle className="text-purple-200" cx="15" cy="12" r="1.5" fill="currentColor" />
    <circle className="text-purple-200" cx="18.5" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

export const ClipboardIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path className="text-emerald-500 opacity-20" fill="currentColor" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path className="text-emerald-400" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect className="text-emerald-300" x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path className="text-emerald-200" d="M9 14l2 2 4-4" />
  </svg>
);

export const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path className="text-orange-500 opacity-20" fill="currentColor" d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z" />
    <path className="text-orange-400" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path className="text-orange-300" d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
