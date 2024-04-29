/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"@vue/eslint-config-airbnb-with-typescript",
		"@vue/eslint-config-prettier",
		"@vue/typescript/recommended",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint",
	],
	// parser: "vue-eslint-parser",
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
		ecmaVersion: "latest",
		vueFeatures: {
			filter: true,
			interpolationAsNonHTML: false,
		},
	},
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		"vue/component-tags-order": [
			"error",
			{
				order: ["script", "template", "style"],
			},
		],
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/typedef": [
			"error",
			{
				variableDeclaration: true,
				memberVariableDeclaration: true,
				propertyDeclaration: true,
				variableDeclarationIgnoreFunction: true,
				arrayDestructuring: true,
				objectDestructuring: true,
				parameter: true,
				arrowParameter: true,
			},
		],
	},
};
