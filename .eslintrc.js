module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ["airbnb", "prettier", "plugin:@typescript-eslint/recommended"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["eslint-config-airbnb"],
    rules: {
        "no-constant-condition": 2,
        "import/prefer-default-export": 0,
        "no-restricted-syntax": 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};