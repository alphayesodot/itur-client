module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    jsxSingleQuote: true,
    eslint: true,
    printWidth: 100,
    endOfLine: 'auto',

    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.yml',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
