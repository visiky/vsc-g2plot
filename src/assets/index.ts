const EXAMPLE_DATA = [
  { type: "Type 1", value: 10 },
  { type: "Type 2", value: 16 },
  { type: "Type 3", value: 23 },
  { type: "Type 4", value: 49 },
];

const WATERFALL_DATA = [
  {
    month: "一月",
    value: 6200000,
  },
  {
    month: "二月",
    value: -600000,
  },
  {
    month: "三月",
    value: -4100000,
  },
  {
    month: "四月",
    value: 3700000,
  },
  {
    month: "五月",
    value: -2100000,
  },
  {
    month: "六月",
    value: 5300000,
  },
  {
    month: "七月",
    value: 3100000,
  },
  {
    month: "八月",
    value: -500000,
  },
  {
    month: "九月",
    value: 4200000,
  },
  {
    month: "十月",
    value: 5300000,
  },
  {
    month: "十一月",
    value: -500000,
  },
  {
    month: "十二月",
    value: 5100000,
  },
];

const SUNBURST_DATA = {
  name: "咖啡产地",
  children: [
    {
      name: "非洲",
      value: 4,
      children: [
        {
          name: "埃塞俄比亚",
          value: 1,
        },
        {
          coffee: "阿拉比加卡豆",
          name: "肯尼亚",
          value: 1,
        },
        {
          coffee: "乞力马扎罗咖啡",
          name: "坦桑尼亚",
          value: 1,
        },
        {
          name: "乌干达",
          value: 1,
        },
      ],
    },
    {
      name: "中南美洲",
      value: 6,
      children: [
        {
          name: "巴西",
          value: 1,
        },
        {
          name: "哥伦比亚",
          value: 1,
        },
        {
          name: "牙买加",
          value: 1,
        },
        {
          name: "巴拿马",
          value: 1,
        },
        {
          name: "危地马拉",
          value: 1,
        },
        {
          name: "哥斯达黎加",
          value: 1,
        },
      ],
    },
    {
      name: "亚洲",
      value: 5,
      children: [
        {
          coffee: "曼特宁咖啡",
          name: "印度尼西亚",
          value: 1,
        },
        {
          name: "印度",
          value: 1,
        },
        {
          name: "越南",
          value: 1,
        },
        {
          name: "也门",
          value: 1,
        },
        {
          name: "中国",
          value: 1,
        },
      ],
    },
  ],
};

const SCATTER_DATA = [
  { x: 1, y: 4.181 },
  { x: 2, y: 4.665 },
  { x: 3, y: 5.296 },
  { x: 4, y: 5.365 },
  { x: 5, y: 5.448 },
  { x: 6, y: 5.744 },
  { x: 7, y: 5.653 },
  { x: 8, y: 5.844 },
  { x: 9, y: 6.362 },
  { x: 10, y: 6.38 },
  { x: 11, y: 6.311 },
  { x: 12, y: 6.457 },
  { x: 13, y: 6.479 },
  { x: 14, y: 6.59 },
  { x: 15, y: 6.74 },
  { x: 16, y: 6.58 },
  { x: 17, y: 6.852 },
  { x: 18, y: 6.531 },
  { x: 19, y: 6.682 },
  { x: 20, y: 7.013 },
  { x: 21, y: 6.82 },
  { x: 22, y: 6.647 },
  { x: 23, y: 6.951 },
  { x: 24, y: 7.121 },
  { x: 25, y: 7.143 },
  { x: 26, y: 6.914 },
  { x: 27, y: 6.941 },
  { x: 28, y: 7.226 },
  { x: 29, y: 6.898 },
  { x: 30, y: 7.392 },
  { x: 31, y: 6.938 },
];

const RADAR_DATA = [
  { name: "Type 1", star: 101.83810681665287 },
  { name: "Type 2", star: 85.90692637965812 },
  { name: "Type 3", star: 86.10458756651704 },
  { name: "Type 4", star: 46.26013402488151 },
  { name: "Type 5", star: 25.69046515733026 },
  { name: "Type 6", star: 29.748949561287034 },
];

const BIDIRECTIONAL_BAR_DATA = [
  { country: "国家 1", "2016年耕地总面积": 13.4, "2016年转基因种植面积": 12.3 },
  { country: "国家 2", "2016年耕地总面积": 14.4, "2016年转基因种植面积": 6.3 },
  { country: "国家 3", "2016年耕地总面积": 18.4, "2016年转基因种植面积": 8.3 },
  { country: "国家 4", "2016年耕地总面积": 44.4, "2016年转基因种植面积": 19.5 },
];

const LINE_DATA = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
];

export const PLOTS = [
  {
    type: "line",
    name: "Line",
    schema: `{
      data: ${JSON.stringify(LINE_DATA)},
      padding: 'auto',
      xField: 'year',
      yField: 'value',
      xAxis: {
        tickCount: 5,
      },
    }`,
  },
  {
    type: "area",
    name: "Area",
    schema: `{
      data: ${JSON.stringify(LINE_DATA)},
      padding: 'auto',
      xField: 'year',
      yField: 'value',
    }`,
  },
  {
    type: "pie",
    name: "Pie",
    schema: `{
      data: ${JSON.stringify(EXAMPLE_DATA)},
      padding: 'auto',
      colorField: 'type',
      angleField: 'value',
      xAxis: {
        tickCount: 5,
      },
    }`,
  },
  {
    type: "rose",
    name: "Rose",
    schema: `{
      data: ${JSON.stringify(EXAMPLE_DATA)},
      padding: 'auto',
      xField: 'type',
      yField: 'value',
      xAxis: {
        tickCount: 5,
      },
    }`,
  },
  {
    type: "column",
    name: "Column",
    schema: `{
      data: ${JSON.stringify(EXAMPLE_DATA)},
      padding: 'auto',
      xField: 'type',
      yField: 'value',
    }`,
  },
  {
    type: "bar",
    name: "Bar",
    schema: `{
      data: ${JSON.stringify(EXAMPLE_DATA)},
      padding: 'auto',
      yField: 'type',
      xField: 'value',
    }`,
  },
  {
    type: "liquid",
    name: "Liquid",
    schema: `{
      percent: 0.25,
      outline: {
        border: 4,
        distance: 8,
      },
      wave: { length: 128 },
    }`,
  },
  {
    type: "waterfall",
    name: "Waterfall",
    schema: `{
      data: ${JSON.stringify(WATERFALL_DATA)},
      padding: 'auto',
      xField: 'month',
      yField: 'value',
    }`,
  },
  {
    type: "sunburst",
    name: "Sunburst",
    schema: `{
      data: ${JSON.stringify(SUNBURST_DATA)},
      innerRadius: 0.3,
      interactions: [{ type: 'element-active' }],
    }`,
  },
  {
    type: "scatter",
    name: "Scatter",
    schema: `{
      data: ${JSON.stringify(SCATTER_DATA)},
      xField: 'x',
      yField: 'y',
      size: 5,
      regressionLine: {
        type: 'quad', // linear, exp, loess, log, poly, pow, quad
      },
    }`,
  },
  {
    type: "chord",
    name: "Chord",
    schema: `{
      data: ${JSON.stringify([
        { source: "北京", target: "天津", value: 30 },
        { source: "北京", target: "上海", value: 80 },
        { source: "北京", target: "河北", value: 46 },
        { source: "北京", target: "辽宁", value: 49 },
        { source: "北京", target: "黑龙江", value: 69 },
        { source: "北京", target: "吉林", value: 19 },
        { source: "天津", target: "河北", value: 62 },
        { source: "天津", target: "辽宁", value: 82 },
        { source: "天津", target: "上海", value: 16 },
        { source: "上海", target: "黑龙江", value: 16 },
        { source: "河北", target: "黑龙江", value: 76 },
        { source: "河北", target: "内蒙古", value: 24 },
        { source: "内蒙古", target: "北京", value: 32 },
      ])},
      sourceField: 'source',
      targetField: 'target',
      weightField: 'value',
    }`,
  },
  {
    type: "funnel",
    name: "Funnel",
    schema: `{
      data: ${JSON.stringify([
        { stage: "简历筛选", number: 253 },
        { stage: "初试人数", number: 151 },
        { stage: "复试人数", number: 113 },
        { stage: "录取人数", number: 87 },
        { stage: "入职人数", number: 59 },
      ])},
      xField: 'stage',
      yField: 'number',
      legend: false,
    }`,
  },
  {
    type: "radar",
    name: "Radar",
    schema: `{
      data: ${JSON.stringify(RADAR_DATA)},
      xField: 'name',
      yField: 'star',
      meta: {
        star: {
          min: 0,
        },
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
    }`,
  },
  {
    type: "bidirectionalBar",
    name: "BidirectionalBar",
    schema: `{
      data: ${JSON.stringify(BIDIRECTIONAL_BAR_DATA)},
      xField: 'country',
      xAxis: {
        position: 'bottom',
      },
      yField: ['2016年耕地总面积', '2016年转基因种植面积'],
      tooltip: {
        shared: true,
        showMarkers: false,
      },
    }`,
  },
];
