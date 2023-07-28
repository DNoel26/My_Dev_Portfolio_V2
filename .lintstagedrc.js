/** @format */

const path = require('path');

const handleFiles = (filenames, separator = ' --file ') =>
    filenames.map((file) => path.relative(process.cwd(), file)).join(separator);

const buildEslintCommand = (filenames) =>
    `next lint --fix --file ${handleFiles(filenames)}`;

const prettierCommand = (filenames) =>
    `npx prettier --write ${handleFiles(filenames, ' ')}`;

module.exports = {
    '*.{js,jsx,ts,tsx}': [prettierCommand, buildEslintCommand],
    '*.{md,json}': [prettierCommand],
};
