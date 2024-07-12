import '../App.css';

//libraries
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Chart(props) {

    return(
        <LineChart width={600} height={300} data={props.stock_data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="close" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="timestamp" />
    <YAxis />
  </LineChart>
    )

}

export default Chart;