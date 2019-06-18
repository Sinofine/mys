module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"parser": "@typescript-eslint/parser",
	"extends": "plugin:@typescript-eslint/recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"rules": {
		"indent": [
			"error",
			4
		],
		"@typescript-eslint/explicit-function-return-type": ["off", {
			"allowTypedFunctionExpressions": true
		}],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		/*"semi": [
			"error",
			"always"
		]*/
	}
};