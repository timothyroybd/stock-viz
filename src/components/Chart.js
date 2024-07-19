import '../App.css';

//libraries
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from 'recharts';
import { format } from 'date-fns';

function Chart({ stock_data, ticker }) {
  const formatXAxis = (tickItem) => {
    return format(new Date(tickItem), 'yyyy');
  };

  return (
    <>    <LineChart
      width={600}
      height={300}
      data={stock_data}
      margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
    >
      <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} />

      <XAxis dataKey="timestamp" tickFormatter={formatXAxis}>
        <Label value={ticker.toUpperCase()} position="insideTop" offset={50} />
      </XAxis>
      <YAxis></YAxis>
      <Tooltip />

      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    </LineChart>

    <div>{ticker.toUpperCase()}</div>


    </>

    
  );
}

export default Chart;
