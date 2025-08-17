"use client";

import React from 'react';

/**
 * Card component wraps content with a styled container. It simply renders a
 * <div> with any provided className, along with Tailwind defaults for
 * rounded corners and background.
 */
export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-lg bg-white ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
/**
 * CardContent provides padding to its children and resets text styles. It
 * renders a simple <div>.
 */
export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`text-base ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
/**
 * CardHeader can be used to wrap headings. For now, it simply renders a <div>.
 */
export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`pb-4 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
/**
 * CardTitle renders its children as a heading. It uses a <h3> tag by default.
 */
export function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={`text-lg font-semibold ${className}`.trim()} {...props}>
      {children}
    </h3>
  );
}
export default Card;