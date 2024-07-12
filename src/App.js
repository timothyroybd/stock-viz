//styles
import './App.css';

// datasets
import aapl from './datasets/aapl';
import amd from './datasets/amd'
import amzn from './datasets/amzn'
import avgo from './datasets/avgo'
import goog from './datasets/goog'
import ibm from './datasets/ibm'
import meta from './datasets/meta'
import msft from './datasets/msft'
import nvda from './datasets/nvda'
import orcl from './datasets/orcl'
import tsla from './datasets/tsla'

//libraries
import React, { useState } from 'react';

//components
import Chart from './components/Chart';

function App() {
  // variables
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestion ,setSuggestion] = useState([])
  
  const datasets ={
    aapl,
    amzn,
    avgo, 
    goog,
    ibm,
    meta,
    msft,
    nvda, 
    orcl,
    tsla,
    amd
  }

  const tickerSymbols = Object.keys(datasets)
  
  const transformData = (tickerSymbol) => {
    const transformedData = Object.entries(tickerSymbol).map(
      ([timestamp, values]) => ({
        timestamp,
        close: parseFloat(values['4. close']),
      }));
    setData(transformedData);
  };
  // event handlers
  const handleChange = (e) => {
    const value = e.target.value
    setInputValue(value)

    if(value){
      const filteredSuggestions = tickerSymbols.filter((symbol) => 
        // symbol.toLowerCase().startsWith(value.toLowerCase())
        symbol.toLowerCase().startsWith(value.toLowerCase())
      )
      setSuggestion(filteredSuggestions)
    } else {
      setSuggestion([])
    }
  }

  const handleKeyDown = (e) => {
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

   const handleSuggestionClick = (symbol) => {
    const ticker = datasets[symbol];
    setInputValue(symbol);
    setSuggestion([]);
    transformData(ticker); // Pass the actual ticker data
  };


  return (
    <div className="App">
 

     <input 
     type= 'text' 
     placeholder='Search top 10 US companies' 
     name = 'search'
     value={inputValue} 
     onChange={handleChange}
     onKeyDown={handleKeyDown}/>
      
      {suggestion.length > 0 && (
        <ul className = "suggestion-list">
          {suggestion.map((symbol) => (
            <li key ={symbol} onClick={() => handleSuggestionClick(symbol)}>
              {symbol.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
      {data.length > 0 && <Chart stock_data={data} />}
    </div>
  );
}

export default App;
