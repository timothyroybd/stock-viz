import '../App.css';

//libraries
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label} from 'recharts';
import {format} from 'date-fns'

function Chart(props) {
const formatXAxis = (tickItem) => {
  return format(new Date(tickItem), 'yyyy')
}

const everySixMonth = (data) => {
  return data.filter((item, index) => index %6 === 0 )
}

// const dataArray = Object.entries(props.stock_data).map(([date, value]) => ({date, value}) )

// const sortedData = dataArray.sort((a,b) => new Date(a.timestamp) -  Date(b.timestamp))

const filteredData = everySixMonth(props.stock_data)
    return(
        <LineChart width={600} height={300} data={props.stock_data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
    <Line type="monotone" dataKey="close" stroke="#8884d8" dot = {false}/>
    
    
    <XAxis dataKey="timestamp" tickFormatter={formatXAxis}>
        
        </XAxis>
        <YAxis>
         
        </YAxis>
    <Tooltip />
    <Legend />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  </LineChart>
    )

}

export default Chart;