export const transformData = (data, tickerDataSet, setData, setTickerSelection) => {
    const transformedData = Object.entries(data)
      .map(([timestamp, values]) => ({
        timestamp,
        close: parseFloat(values['4. close']),
      }))
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    setData(transformedData);
    setTickerSelection(tickerDataSet);
    // getTicketName(tickerDataSet)
  };
