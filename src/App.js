//libraries
import React, { useState } from 'react';

//styles
import './App.css';

//importing functions
import { tickerDataSet } from './datasets/tickerDataSet';
import { transformData } from './handlers/transformData';
//components
import Chart from './components/Chart';
import Footer from './components/Footer';
import CustomDropDown from './components/CustomDropDown';
//importing assets
import img from './resources/stock.gif'


function App() {
  // variables
  const [data, setData] = useState([]);
  const [tickerSelection, setTickerSelection] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const handleSelect = (selectedValue) => {
     setIsClicked(true);
    transformData(
      tickerDataSet[selectedValue],
      selectedValue,
      setData,
      setTickerSelection
    );
   
    console.log(isClicked);
  };

  return (
    <div className="App">
      <h1>Stock Visualization</h1>
      <p>Search top 10 US tech companies' historical stock price.</p>

      <div className="stock_drop_down">
        <CustomDropDown 
          options={Object.keys(tickerDataSet)} 
          onSelect={handleSelect}
        />
      </div>

      {isClicked ? (
        data.length > 0 ? (
          <Chart stock_data={data} ticker={tickerSelection} />
        ) : (
          <div >
            
          </div>
        )
      ) : (
        <div className="img-container">
             <img src = {img } /> 
          </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
