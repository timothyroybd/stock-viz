import './App.css';
import aapl from './datasets/aapl';
import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const API_KEY_1 = process.env.REACT_APP_API_KEY_1;
const API_KEY_2 = process.env.REACT_APP_API_KEY_2;
const API_KEY_3 = process.env.REACT_APP_API_KEY_3;
//  const [symbol, setSymbol] = useState()

function App() {
  const [data, setData] = useState([]);

  console.log(process.env);

  const showApple = () => {
    const transformedData = Object.entries(aapl).map(([timestamp, values]) => ({
      timestamp,
      close: parseFloat(values['4. close']),
    }));
    setData(transformedData);
  };
  return (
    <div className="App">
      {/* <button onClick={() => fetchData('META')}>Apple</button> */}
      <button onClick={showApple}>Show Apple</button>
     {data.length > 0 && (
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="close" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="timestamp" />
    <YAxis />
  </LineChart>
     )}
    
    </div>
  );
}

export default App;
