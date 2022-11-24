/** @format */

const path = require("path");

const handleFiles = (filenames) =>
  filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${handleFiles(filenames)}`;

const prettierCommand = (filenames) =>
  `npx prettier --write ${handleFiles(filenames)}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, prettierCommand],
  "*.{md,json}": [prettierCommand],
};
