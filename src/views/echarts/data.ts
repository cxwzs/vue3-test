export const echartsData = [
    {
        id: 'echart-1',
        data: {
            title: {
                text: '条形图'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        }
    },
    {
        id: 'echart-2',
        data: {
            title: {
                text: '饼状图'
            },
            series: [
                {
                  type: 'pie',
                  data: [
                    {
                      value: 335,
                      name: '直接访问'
                    },
                    {
                      value: 234,
                      name: '联盟广告'
                    },
                    {
                      value: 1548,
                      name: '搜索引擎'
                    }
                  ]
                }
              ]
        }
    }
]