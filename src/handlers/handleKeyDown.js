 export const handleKeyDown = (e, inputValue, datasets, transformData, setSuggestion) => {

    if(e.key === 'Enter'){
       
      const ticker = datasets[inputValue.toLowerCase()]
      if(ticker){
   
        transformData(ticker)
        setSuggestion([])
        console.log(inputValue)
        console.log(typeof(inputValue));
      } else {
        console.error('Ticker doesn\'t exist')
      }
      
    }
  }
