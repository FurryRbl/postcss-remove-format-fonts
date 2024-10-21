import { Plugin } from 'postcss';

/**
 * A simple PostCSS plugin for removing fonts with specific formats.
 */
declare function plugin(options: string | string[]): Plugin;

export default plugin;
