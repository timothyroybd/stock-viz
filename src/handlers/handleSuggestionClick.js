   export const handleSuggestionClick = (symbol, setInputValue, setSuggestion, datasets, transformData) => {
    const ticker = datasets[symbol];
    setInputValue(symbol);
    setSuggestion([]);
    transformData(ticker); // Pass the actual ticker data
  };