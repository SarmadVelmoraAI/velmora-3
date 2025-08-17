"use client";

/**
 * Utility function to build page URLs. For now, it simply prefixes the page
 * name with a leading slash. For query parameters, include them in the
 * provided string (e.g. "Solution?id=appointment-scheduling").
 *
 * @param {string} page - The page string, optionally including query params
 * @returns {string} A URL path beginning with '/'
 */
export function createPageUrl(page) {
  return `/${page}`;
}