const EXAMPLE_DATA = [
  { type: 'Type 1', value: 10 },
  { type: 'Type 2', value: 16 },
  { type: 'Type 3', value: 23 },
  { type: 'Type 4', value: 49 },
]

export const PLOTS = [
  {
    type: "line",
    name: "Line",
    schema: `{
      data: ${JSON.stringify(EXAMPLE_DATA)},
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
      data: ${JSON.stringify(EXAMPLE_DATA)},
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        tickCount: 5,
      },
    }`
  },
];
