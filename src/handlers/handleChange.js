 export const handleChange = (e, setInputValue, setSuggestion, tickerSymbols) => {
    const value = e.target.value
    setInputValue(value)

    if(value){
      const filteredSuggestions = tickerSymbols.filter((symbol) => 
       symbol.toLowerCase().startsWith(value.toLowerCase())
      )
      setSuggestion(filteredSuggestions)
    } else {
      setSuggestion([])
    }
  }