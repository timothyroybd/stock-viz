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
      <div className='chart'>
      <LineChart
      width={650}
      height={330}
      data={stock_data}
      // margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    >
      <Line type="monotone" dataKey="close" stroke="#285943" dot={false} />

      <XAxis dataKey="timestamp" tickFormatter={formatXAxis}>
        <Label value={ticker.toUpperCase()} position="insideTop" offset={50} />
      </XAxis>
      <YAxis></YAxis>
      <Tooltip />

      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    </LineChart>

    <div>{ticker.toUpperCase()}</div>

</div>
  

    
  );
}

export default Chart;
