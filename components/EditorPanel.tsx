
import React from 'react';
import { Language } from '../types';
import { LANGUAGE_METADATA } from '../constants';

interface EditorPanelProps {
  language: Language;
  value: string;
  onChange: (value: string) => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ language, value, onChange }) => {
  const { name, icon, color } = LANGUAGE_METADATA[language];

  return (
    <div className="flex flex-col h-full bg-[#1e1e2e] rounded-lg border border-gray-700/50 shadow-lg transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10 animate-fade-in">
      <div className="flex items-center p-2 bg-[#2a2a3e] rounded-t-lg border-b border-gray-700/50">
        <span className={`${color} mr-2`}>{icon}</span>
        <h2 className={`font-semibold text-sm tracking-wider ${color}`}>{name}</h2>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-grow w-full p-3 bg-transparent text-gray-300 font-mono text-sm leading-relaxed focus:outline-none resize-none"
        spellCheck="false"
        wrap="off"
        aria-label={`${name} code editor`}
      />
    </div>
  );
};

export default EditorPanel;
