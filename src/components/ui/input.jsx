
import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 ${className}`}
      {...props}
    />
  );
}
