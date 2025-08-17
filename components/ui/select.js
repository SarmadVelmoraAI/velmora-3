"use client";

import React from 'react';

/**
 * These select components are simplified placeholders to mimic the API of a
 * headless select library. They provide structure only and do not implement
 * accessible keyboard navigation or popovers. You can replace them with a
 * proper implementation or a library when building a production app.
 */
export function Select({ children, value, onValueChange }) {
  return <div>{children}</div>;
}
export function SelectTrigger({ children, ...props }) {
  return <button type="button" {...props}>{children}</button>;
}
export function SelectValue({ placeholder, children }) {
  return <span>{children || placeholder}</span>;
}
export function SelectContent({ children }) {
  return <div>{children}</div>;
}
export function SelectItem({ children, value }) {
  return <div data-value={value}>{children}</div>;
}
export default Select;