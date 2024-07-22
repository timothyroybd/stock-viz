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
import CustomDropDown
 from './components/CustomDropDown';
function App() {
  // variables
  const [data, setData] = useState([]);
  const [tickerSelection, setTickerSelection] = useState();
  const selectHandler = (e) => {
    const selectedValue = e.target.value;

    transformData(
      tickerDataSet[selectedValue],
      selectedValue,
      setData,
      setTickerSelection
    );
  };
   const handleSelect = (selectedValue) => {
    transformData(
      tickerDataSet[selectedValue],
      selectedValue,
      setData,
      setTickerSelection
    );
  };

  return (
    <div className="App">
              <h1> Stock Vizualization</h1>
              <p>Search top 10 US tech companies'historical stock price. </p>

        {/* <div className="stock_drop_down">
          <select onChange={selectHandler}>
            {Object.entries(tickerDataSet).map(([key, value]) => (
              <option value={key} key = {key}>{key}</option>
            ))}
          </select>
        </div> */}
        <div className='stock_drop_down'>
          <CustomDropDown 
          options={Object.keys(tickerDataSet)} 
          onSelect={handleSelect}
        />
        </div>
         

     
            {data.length > 0 && (
          <Chart stock_data={data} ticker={tickerSelection} />
        )}

        <Footer />
       

        
      
    </div>
  );
}

export default App;
