"use client";

import React from 'react';

/**
 * Textarea component wraps a native textarea element. It forwards all props and
 * applies sensible default styling. Additional Tailwind classes can be
 * provided via `className`.
 */
export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`border border-gray-300 rounded-md p-2 w-full ${className}`.trim()}
      {...props}
    />
  );
}
export default Textarea;