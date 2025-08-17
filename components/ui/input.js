"use client";

import React from 'react';

/**
 * Input component wraps a native input element. It accepts any standard
 * attributes. Additional Tailwind classes can be passed via the `className`
 * prop for styling.
 */
export function Input({ className = '', ...props }) {
  return (
    <input
      className={`border border-gray-300 rounded-md p-2 ${className}`.trim()}
      {...props}
    />
  );
}
export default Input;