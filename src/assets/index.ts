export const PLOTS = [
  {
    type: "line",
    name: "Line",
    schema: `{
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        tickCount: 5,
      },
    }`
  },
  {
    type: "column",
    name: "Column",
    schema: `{
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        tickCount: 5,
      },
    }`
  },
];
