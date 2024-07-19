//styles
import './App.css';
//importing functions
import { handleChange } from './handlers/handleChange';
import { handleKeyDown } from './handlers/handleKeyDown';
import { handleSuggestionClick } from './handlers/handleSuggestionClick';

// datasets
import aapl from './datasets/aapl';
import amd from './datasets/amd';
import amzn from './datasets/amzn';
import avgo from './datasets/avgo';
import goog from './datasets/goog';
import ibm from './datasets/ibm';
import meta from './datasets/meta';
import msft from './datasets/msft';
import nvda from './datasets/nvda';
import orcl from './datasets/orcl';
import tsla from './datasets/tsla';
//libraries
import React, { useState, useEffect, useRef } from 'react';



//components
import Chart from './components/Chart';

function App() {
  // variables
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestion, setSuggestion] = useState([]);

  const [tickerSelection, setTickerSelection] = useState();

  const [showSuggestions, setShowSuggestions] = useState(false)

  

  const datasets = {
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
    amd,
  };

  const tickerSymbols = Object.keys(datasets);

  const getTicketName = (ticker) => {
    return Object.keys(datasets).find(key => datasets[key] === ticker )
  }
  const transformData = (tickerSymbol) => {
    const transformedData = Object.entries(tickerSymbol).map(
      ([timestamp, values]) => ({
        timestamp,
        close: parseFloat(values['4. close']),
      })
    ).sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp) )

    setData(transformedData);
    setTickerSelection(getTicketName(tickerSymbol))
   
  };

  const handleFocus = () => {
  setShowSuggestions(true); 

  handleChange({ target: { value: inputValue } }, setInputValue, setSuggestion, tickerSymbols); 
};
const handleBlur = () => {
  setTimeout(() => {
    setShowSuggestions(false); 
  }, 200); 
};



  return (
    <div className="App">
      <input
        className="search_bar"
        type="search"
        placeholder="Search top 10 US companies"
        name="search"
        value={inputValue}
        onChange={(e) =>
          handleChange(e, setInputValue, setSuggestion, tickerSymbols)
        }
        onKeyDown={(e) =>
          handleKeyDown(e, inputValue, datasets, transformData, setSuggestion)
        }
         onFocus={handleFocus}
  onBlur={handleBlur}
      />

      {suggestion.length > 0 && (
        <ul className="suggestion-list">
          {suggestion.map((symbol) => (
            <li
              key={symbol}
              onClick={() =>
                handleSuggestionClick(
                  symbol,
                  setInputValue,
                  setSuggestion,
                  datasets,
                  transformData
                )
              }
            >
              {symbol.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
      {data.length > 0 && <Chart stock_data={data} ticker = {tickerSelection} />}
    </div>
  );
}

export default App;
