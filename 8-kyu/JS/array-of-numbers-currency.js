const formatCurrency = (numbers, currency, lang = undefined) => {
    return numbers.map((number) =>
        Intl.NumberFormat(lang, { style: 'currency', currency }).format(number)
    );
};

console.log(
    formatCurrency(
        [
            29764, 1984.01, 1.001, 331.58, 1, 0.408411, 1.001, 0.519312, 48.98,
            10,
        ],
        'CNY'
    )
);
