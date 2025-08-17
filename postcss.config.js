/**
 * PostCSS configuration
 *
 * Tailwind CSS v4.0+ moved its PostCSS plugin into the `@tailwindcss/postcss` package. Without
 * updating this configuration you'll encounter errors at build time like:
 * "It looks like you're trying to use 'tailwindcss' directly as a PostCSS plugin"
 * as described in the Tailwind migration guide【593305534131404†screenshot】. To fix this, install
 * `@tailwindcss/postcss` and replace the `tailwindcss` plugin reference below. This ensures
 * Tailwind's PostCSS plugin is correctly registered and compatible with the latest
 * version of Tailwind CSS.
 */
module.exports = {
  plugins: {
    // Use the new Tailwind PostCSS plugin instead of the deprecated tailwindcss plugin.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};