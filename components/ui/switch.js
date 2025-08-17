"use client";

import React from 'react';

/**
 * Switch component wraps a checkbox input. It accepts an id, checked state,
 * and an onCheckedChange callback that receives the new boolean state.
 */
export function Switch({ id, checked, onCheckedChange }) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className="switch-input"
    />
  );
}
export default Switch;