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
 * @description A simple postcss plugin for removing fonts with specific formats.
 * @param {string | string[]} options
 * @returns {import('postcss').Plugin}
 */
const plugin = options => {
	return {
		postcssPlugin: 'postcss-remove-font-format',

		AtRule(atRule) {
			if (
				(typeof options === 'string' && options.trim().length === 0) ||
				(Array.isArray(options) && options.length === 0)
			) {
				return;
			}

			// Matches rules named `font-face`
			if (atRule.name === 'font-face') {
				(atRule.nodes ?? []).forEach(node => {
					if (node.prop === 'src') {
						if (typeof options === 'string') {
							node.value = removeFont(options, node.value);
						} else if (Array.isArray(options)) {
							options.forEach(fontType => {
								node.value = removeFont(fontType, node.value);
							});
						}

						// If `src` is empty then remove the entire `font-face`
						if (node.value.trim().length === 0) {
							atRule.remove();
						}
					}
				});
			}
		},
	};
};

export default plugin;
