import fs from 'node:fs';
import chalk from 'chalk';
import path from 'node:path';
import postcss from 'postcss';
import postcssRemoveFormatFonts from '../src/main.js';

(async () => {
	try {
		const cssFilePath = path.resolve(import.meta.dirname, './test.css');
		const cssContent = await fs.promises.readFile(cssFilePath, 'utf-8');

		console.log(chalk.cyan(`Before:\n${cssContent}`));

		const processor = postcss([postcssRemoveFormatFonts(['woff', 'opentype'])]);
		const { css } = await processor.process(cssContent, { from: cssFilePath });

		console.log(chalk.greenBright(`After:\n${css}`));
	} catch (error) {
		console.error(chalk.red(`Processing failed with error:\n${error.stack || error}`));
		process.exit(1);
	}
})();
