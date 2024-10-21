/**
 * @param {string} fontType
 * @param {string} value
 * @returns {string}
 */
const removeFont = (fontType, value) => {
	const regex = new RegExp(`(?:,\\s*)?url\\([^\\)]+\\) format\\('${fontType}'\\)`, 'i');
	return value.replace(regex, '').trim();
};

/**
 * A simple PostCSS plugin for removing fonts with specific formats.
 * @param {string | string[]} options - The font types to remove.
 * @returns {import('postcss').Plugin} - A PostCSS plugin.
 */
const plugin = options => {
	if ((typeof options === 'string' && !options.trim()) || (Array.isArray(options) && options.length === 0)) return;

	return {
		postcssPlugin: 'postcss-remove-font-format',

		AtRule(atRule) {
			// Matches rules named `font-face`
			if (atRule.name === 'font-face') {
				(atRule.nodes ?? []).forEach(decl => {
					if (decl.prop === 'src') {
						if (typeof options === 'string') {
							decl.value = removeFont(options, decl.value);
						} else if (Array.isArray(options)) {
							options.forEach(fontType => {
								decl.value = removeFont(fontType, decl.value);
							});
						}

						// If `src` is empty then remove the entire `font-face`
						if (decl.value.trim().length === 0) {
							atRule.remove();
						}
					}
				});
			}
		},
	};
};

export default plugin;
