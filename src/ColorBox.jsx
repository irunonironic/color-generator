import React, { useState } from 'react';

const ColorBox = ({ color }) => {
  const [copied, setCopied] = useState(false);   

  return (
   <div className="flex flex-col items-center gap-3">
 
  <div
    className="w-32 h-32 rounded-md shadow-md flex items-center justify-center"
    style={{ backgroundColor: color }}
  >
    <p className="text-white font-mono">{color}</p>
  </div>

  <button
    className="min-w-[120px] rounded-full border border-slate-400 py-2 px-6 text-sm text-center
               text-slate-500 bg-slate-100 shadow-sm transition-all hover:shadow-lg
               hover:bg-slate-700 hover:border-slate-700 hover:text-white
               focus:bg-slate-700 focus:border-slate-700 focus:text-white
               active:bg-slate-700 active:border-slate-700 active:text-white
               disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    onClick={() => {
      navigator.clipboard.writeText(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }}
  >
    {copied ? 'Copied!' : 'Copy'}
  </button>
</div>

  );
};

export default ColorBox;
