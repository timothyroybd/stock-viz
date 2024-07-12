 export const handleKeyDown = (e, inputValue, datasets, transformData, setSuggestion) => {
    console.log('I am at the top level of handle key down')
    if(e.key === 'Enter'){
       console.log('I am at first layer of it in handle key down')
      const ticker = datasets[inputValue.toLowerCase()]
      if(ticker){
        console.log('I am at second layer of it in handle key down')
        console.log(ticker)
        transformData(ticker)
        setSuggestion([])
        console.log(inputValue)
        console.log(typeof(inputValue));
      } else {
        console.error('Ticker doesn\'t exist')
      }
      
    }
  }
