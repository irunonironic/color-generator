
import React from "react";

export function Button({ className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 ${className}`}
      {...props}
    />
  );
}
