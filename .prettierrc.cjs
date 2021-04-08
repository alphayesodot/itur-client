module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    jsxSingleQuote: true,
    eslint: true,
    printWidth: 150,
    endOfLine: 'auto',
    tabWidth: 2,

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
