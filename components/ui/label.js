"use client";

import React from 'react';

/**
 * Label wraps a native <label> element and forwards children. It accepts a
 * htmlFor prop to bind to input ids.
 */
export function Label({ children, htmlFor, className = '', ...props }) {
  return (
    <label htmlFor={htmlFor} className={className} {...props}>
      {children}
    </label>
  );
}
export default Label;