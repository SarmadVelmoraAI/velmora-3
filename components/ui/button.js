"use client";

import React from 'react';

/**
 * A simple button component that forwards all props to a <button> element. This
 * implementation is intentionally lightweight and does not include styling
 * definitions; instead it relies on Tailwind classes passed via the
 * `className` prop. Supported props include `variant`, `size`, and any
 * standard button attributes.
 */
export function Button({ children, className = '', variant, size, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;