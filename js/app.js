const metroData = {
  city: ['上海', '北京', '广州', '成都', '杭州', '重庆', '武汉', '南京', '深圳', '青岛', '天津', '西安', '郑州', '苏州', '长沙', '大连', '宁波', '昆明', '合肥', '南昌', '南宁', '沈阳', '无锡', '福州', '长春', '厦门', '济南', '佛山', '哈尔滨', '石家庄', '贵阳', '徐州', '常州', '温州', '呼和浩特', '绍兴', '芜湖', '洛阳', '东莞', '乌鲁木齐', '兰州', '太原'],
  mileage: [802.00, 783.00, 621.00, 518.96, 516.00, 478.00, 435.00, 427.10, 419.00, 284.30, 275.38, 259.00, 215.60, 210.37, 209.30, 201.03, 183.00, 172.60, 156.15, 128.45, 128.20, 117.06, 113.50, 111.00, 106.73, 98.40, 84.10, 83.77, 79.61, 76.50, 75.71, 64.28, 54.06, 53.50, 49.03, 47.10, 46.25, 43.50, 37.80, 27.80, 25.97, 23.65,],
  metro: [19, 25, 16, 12, 12, 11, 11, 11, 12, 6, 8, 8, 7, 5, 7, 5, 5, 6, 5, 4, 5, 4, 4, 4, 5, 3, 3, 3, 3, 3, 2, 3, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1,]
}

const total = metroData.mileage.reduce((a, b) => a + b, 0)
metroData.ratio = metroData.mileage.map(item => (item * 100 / total).toFixed(2))

const mileageData = [
  { value: 6280.8, name: '地铁运营线路' },
  { value: 1688.9, name: '其他制式城市轨道交通运营线路' }
]

const passengerFlowData = {
  city: ['上海', '北京', '广州', '深圳', '成都', '重庆', '西安', '武汉', '杭州', '南京', '长沙', '天津', '郑州', '苏州', '沈阳', '南宁', '合肥', '南昌', '宁波', '青岛', '昆明', '长春', '厦门', '大连', '无锡', '福州', '石家庄', '贵阳', '哈尔滨', '徐州', '兰州', '济南', '呼和浩特', '常州', '东莞', '太原', '乌鲁木齐', '洛阳', '温州', '嘉兴', '绍兴', '芜湖', '佛山',],
  footfall: [356957.00, 305994.27, 283397.70, 217934.04, 178576.36, 109334.10, 102062.91, 100205.51, 89839.55, 87935.81, 57945.78, 46306.74, 43069.15, 40419.30, 38379.63, 28875.15, 27072.10, 25967.13, 25826.14, 24678.04, 22149.04, 19513.01, 16993.80, 15640.07, 14528.00, 11853.69, 9200.20, 8975.51, 7219.40, 6637.70, 6402.97, 5603.01, 5378.06, 4803.01, 4077.79, 3915.92, 3058.77, 1337.82, 949.60, 488.24, 413.80, 294.45, 27.10,]
}

const comparations = {
  city: ['成都', '重庆'],
  mileage: [
    {
      value: 518.96,
      name: '成都',
      itemStyle: {
        color: '#FE7334'
      }
    },
    {
      value: 478.00,
      name: '重庆',
      itemStyle: {
        color: '#002060'
      }
    }
  ],
  metro: [
    {
      value: 12,
      name: '成都',
      itemStyle: {
        color: '#FE7334'
      }
    },
    {
      value: 11,
      name: '重庆',
      itemStyle: {
        color: '#002060'
      }
    }
  ],
  ratio: [
    [
      { value: 23.37, name: '日均客流量比例' },
      { value: 76.63, name: '常住人口比例' }
    ],
    [
      { value: 9.6, name: '日均客流量比例' },
      { value: 90.4, name: '常住人口比例' }
    ]
  ]
}

const fossilFuelsData = {
  years: [2020, 2025, 2030],
  ratio: [15, 20, 25]
}

const bar1 = echarts.init(document.getElementById('bar1'))
const bar5 = echarts.init(document.getElementById('bar5'))
const bar6 = echarts.init(document.getElementById('bar6'))
const bar8 = echarts.init(document.getElementById('bar8'))

const pie1 = echarts.init(document.getElementById('pie1'))
const pie5 = echarts.init(document.getElementById('pie5'))
const pie6 = echarts.init(document.getElementById('pie6'))


const mapContainer = echarts.init(document.getElementById('mapContainer'))

const barOption1 = {
  title: {
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true
      }
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  legend: {
    data: ['线路', '里程数'],
    itemGap: 5,
    right: 180
  },
  grid: {
    top: '12%',
    left: '1%',
    right: '1%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: metroData.city
    }
  ],
  yAxis: [
    {
      type: 'value',
    },
    {
      type: 'value',
      name: '百分比',
      axisLabel: {
        formatter: '{value}%'
      }
    }
  ],
  dataZoom: [
    {
      show: true,
      start: 0,
      end: 35
    },
    {
      type: 'inside',
      start: 0,
      end: 35
    }
  ],
  series: [
    {
      name: '里程数',
      stack: 'total',
      type: 'bar',
      barWidth: 35,
      label: { show: true },
      data: metroData.mileage,
      itemStyle: {
        color: '#002060'
      }
    },
    {
      name: '线路',
      stack: 'total',
      type: 'bar',
      barWidth: 35,
      label: { show: true },
      data: metroData.metro,
      itemStyle: {
        color: '#FE7334'
      }
    },
    {
      name: '百分比',
      type: 'line',
      yAxisIndex: 1,
      label: { show: true },
      symbolOffset: [0, '-50%'],
      tooltip: {
        valueFormatter: function (value) {
          return value + '%'
        }
      },
      data: metroData.ratio
    }
  ]
}
// bar1.setOption(barOption1)

const timer = setInterval(() => {
  const o1 = barOption1.dataZoom[0]
  const o3 = barOption3.dataZoom[0]
  if (o1.start >= 100 || o1.end >= 100) {
    o1.start = 0
    o1.end = 35
  } else {
    o1.start += 3
    o1.end += 3
  }

  if (o3.start >= 100 || o3.end >= 100) {
    o3.start = 0
    o3.end = 20
  } else {
    o3.start += 3
    o3.end += 3
  }

  bar1.setOption(barOption1)
}, 1500)

const pieOption1 = {
  title: {
    text: '城市轨道交通运营线路情况',
    left: 'center'
  },
  toolbox: {
    show: true,
    position: 'left',
    x: 0,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: 'right'
  },
  series: [
    {
      name: '运营线路总长度（km）',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        color(e) { return e.dataIndex ? '#FE7334' : '#002060' }
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold',
          formatter: '{b}\n{c}km\n({d}%)',
        }
      },
      labelLine: {
        show: false
      },
      data: mileageData
    }
  ]
}
// pie1.setOption(pieOption1)

const pieOption5 = {
  title: {
    text: '成都日均客流量占常住人口比例',
    left: 'center'
  },
  toolbox: {
    show: true,
    position: 'left',
    x: 0,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: 'right'
  },
  series: [
    {
      name: '比例',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        color(e) { return e.dataIndex ? '#002060' : '#FE7334' }
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold',
          formatter: '{b}\n({d}%)',
        }
      },
      labelLine: {
        show: false
      },
      data: comparations.ratio[0]
    }
  ]
}

// pie5.setOption(pieOption5)

const pieOption6 = {
  title: {
    text: '重庆日均客流量占常住人口比例',
    left: 'center'
  },
  toolbox: {
    show: true,
    position: 'left',
    x: 0,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: 'right'
  },
  series: [
    {
      name: '比例',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        color(e) { return e.dataIndex ? '#002060' : '#FE7334' }
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold',
          formatter: '{b}\n({d}%)',
        }
      },
      labelLine: {
        show: false
      },
      data: comparations.ratio[1]
    }
  ]
}

// pie6.setOption(pieOption6)

const barOption5 = {
  title: {
    text: '里程数对比',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true
      }
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  legend: {
    data: ['里程数'],
    itemGap: 5,
    right: 180
  },
  xAxis: [
    {
      type: 'category',
      data: comparations.city,

    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 200,
      minInterval: 100
    }
  ],
  series: [
    {
      name: '里程数',
      type: 'bar',
      data: comparations.mileage.map((e, i) => {
        if (i === 1) {
          return ({
            ...e,
            itemStyle: {
              color: '#002060'
            }
          })
        }
        return e
      }),
      label: { show: true, position: 'top' },
      barMaxWidth: 100
    }
  ]
}
// bar5.setOption(barOption5)

const barOption6 = {
  title: {
    text: '线路条数对比',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true
      }
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  legend: {
    data: ['线路数'],
    itemGap: 5,
    right: 180
  },
  xAxis: [
    {
      type: 'category',
      data: comparations.city,

    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 6,
      max: 14
    }
  ],
  series: [
    {
      name: '线路数',
      type: 'bar',
      data: comparations.metro,
      label: { show: true, position: 'top' },
      barMaxWidth: 100
    }
  ]
}
// bar6.setOption(barOption6)

const barOption8 = {
  title: {
    text: '非化石能源消费比重',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true
      }
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  legend: {
    data: ['年份', '比例', '百分比'],
    itemGap: 5,
    right: 180
  },
  grid: {
    top: '12%',
    left: '1%',
    right: '10%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: fossilFuelsData.years
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 30,
    },
    {
      type: 'value',
      min: 0,
      max: 30,
      name: '百分比',
      axisLabel: {
        formatter: '{value}%'
      }
    }
  ],
  series: [
    {
      name: '比例',
      type: 'bar',
      label: { show: true },
      barMaxWidth: 50,
      data: fossilFuelsData.ratio,
      itemStyle: {
        color: '#002060'
      },
      markPoint: {
        data: fossilFuelsData.ratio.map((item, index) => ({
          coord: [index, item],
          symbol: 'image://../icons/energy.png',
          symbolSize: 24,
          symbolOffset: [0, '-80%'],
        }))
      },
    },
    {
      name: '百分比',
      type: 'line',
      label: { show: false },
      data: fossilFuelsData.ratio,
    }
  ]
}
// bar8.setOption(barOption8)


const mapData = [
  metroData.city.map((e, i) => ({
    name: e,
    value: metroData.mileage[i]
  })),
  metroData.city.map((e, i) => ({
    name: e,
    value: metroData.metro[i]
  }))
]
const convertData = function (data) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < geoMap.length; j++) {
      if (geoMap[j].name === data[i].name) {
        res.push({
          name: data[i].name,
          value: [...geoMap[j].value, data[i].value]
        })
      }
    }
  }
  return res
}
const mapOption = {
  title: {
    text: '中国内地城市地铁里程数和线路数',
    // subtext: 'data from PM25.in',
    // sublink: 'http://www.pm25.in',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  bmap: {
    center: [113.112348, 28.272865],
    zoom: 5,
    roam: true,
  },
  series: [
    {
      name: '里程数',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: convertData(mapData[0]),
      symbolSize: function (val) {
        return Math.max(15, val[2] / 22)
      },
      encode: {
        value: 2
      },
      label: {
        formatter: '{a}',
        position: 'right',
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontWeight: 'bold',
          fontSize: 15
        }
      }
    },
    {
      name: '线路数',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: convertData(mapData[1]),
      symbolOffset: ['60%', 0],
      symbolSize: function (val) {
        return Math.max(5, val[2])
      },
      encode: {
        value: 2
      },
      label: {
        formatter: '{a}',
        position: 'right',
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontWeight: 'bold',
          fontSize: 15
        }
      }
    }
  ]
}

mapContainer.setOption(mapOption)

window.addEventListener('resize', mapContainer.resize)

!(function defaultSelect() {
  const index = [0, 0, 0, 0]
  const arr = [pie1, pie5, pie6]
  for (const i in arr) {
    arr[i].dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 0 })
    arr[i].on('mouseover', function (e) {
      index[i] = e.dataIndex
      arr[i].dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: 0 })
      arr[i].dispatchAction({ type: 'downplay', seriesIndex: 1, dataIndex: 1 })
      arr[i].dispatchAction({ type: 'highlight', seriesIndex: e.dataIndex, dataIndex: e.dataIndex })
    })
    arr[i].on('mouseout', function (e) {
      index[i] = e.dataIndex
      arr[i].dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 0 })
    })
  }
})()

const cloud = echarts.init(document.getElementById("cloud"))
const cloudOption = {  //指定图表的配置项和数据
  title: {  //配置标题组件
    text: '',
    x: 'center', y: 15,
    textStyle: {
      color: 'green', fontSize: 22,
    }
  },
  tooltip: { show: true },  //配置提示框组件
  series: [{  //数据系列及其配置
    name: '',  //设置名称
    type: 'wordCloud',  //设置图表类型为字云图
    size: ['80%', '80%'],  //设置显示的字云图的大小
    textRotation: [0, 30, 45, 70, 90, 115, -20, -90],  //设置文字倾斜角度
    textPadding: 3,  //设置文字之间的间距
    autoSize: { enable: true, minSize: 5 },  //设置文字的自动大小
    textStyle: {
      color: function () {
        return 'rgb(' + [
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255)
        ].join(',') + ')'
      },
      // color() {
      //   const colors = ['rgb(112,173,71)', 'rgb(22,222,32)', 'rgb(218,0,0)', 'rgb(255,9,9)', 'rgb(255,33,33)', 'rgb(207,35,43)', 'rgb(224,68,75)', 'rgb(143,188,76)']
      //   console.log(colors[Math.random() * colors.length >> 0])
      //   return colors[Math.random() * colors.length >> 0]
      // },
      emphasis: {
        shadowBlur: 26,
        color: '#333',
        shadowColor: '#ccc',
        fontSize: 20
      }
    },
    data: [  //设置具体的数据
      { name: '发展', value: 9 },
      { name: '绿色', value: 6 },
      { name: '排放', value: 6 },
      { name: '促进', value: 6 },
      { name: '推进', value: 5 },
      { name: '碳达峰', value: 5 },
      { name: '节能', value: 5 },
      { name: '再生能源', value: 5 },
      { name: '能源', value: 5 },
      { name: '下降', value: 5 },
      { name: '推动', value: 4 },
      { name: '总量', value: 4 },
      { name: '完善', value: 4 },
      { name: '提高', value: 4 },
      { name: '经济', value: 4 },
      { name: '旨在', value: 4 },
      { name: '减排', value: 4 },
      { name: '单位', value: 4 },
      { name: '国内', value: 4 },
      { name: '生产总值', value: 4 },
      { name: '改造', value: 3 },
      { name: '建设', value: 3 },
      { name: '能力', value: 3 },
      { name: '政策', value: 3 },
      { name: '加快', value: 3 },
      { name: '优化', value: 3 },
      { name: '改善', value: 3 },
      { name: '经济社会', value: 3 },
      { name: '持续', value: 3 },
      { name: '实现', value: 3 },
      { name: '目标', value: 3 },
      { name: '健全', value: 3 },
      { name: '控制', value: 3 },
      { name: '消费', value: 3 },
      { name: '以上', value: 3 },
      { name: '提升', value: 2 },
      { name: '电网', value: 2 },
      { name: '能耗', value: 2 },
      { name: '约束', value: 2 },
      { name: '生产', value: 2 },
      { name: '创新', value: 2 },
      { name: '产业', value: 2 },
      { name: '供给', value: 2 },
      { name: '数字', value: 2 },
      { name: '壮大', value: 2 },
      { name: '社会', value: 2 },
      { name: '利用效率', value: 2 },
      { name: '保护', value: 2 },
      { name: '环境', value: 2 },
      { name: '全面', value: 2 },
      { name: '保障', value: 2 },
      { name: '电力系统', value: 2 },
      { name: '污染物', value: 2 },
      { name: '交通', value: 2 },
      { name: '物流', value: 2 },
      { name: '机制', value: 2 },
      { name: '化石', value: 2 },
      { name: '比重', value: 2 },
      { name: '达到', value: 2 },
      { name: '能源消耗', value: 2 },
      { name: '二氧化碳', value: 2 },
      { name: '行动', value: 1 },
      { name: '方案', value: 1 },
      { name: '煤电', value: 1 },
      { name: '降碳', value: 1 },
      { name: '灵活性', value: 1 },
    ]  //data结束
  }]  //series结束
}  //option结束

const cloudigyu = echarts.init(document.getElementById("cloudigyu"))
const cloudOptionigyu = {  //指定图表的配置项和数据
  title: {  //配置标题组件
    text: '',
    x: 'center', y: 15,
    textStyle: {
      color: 'green', fontSize: 22,
    }
  },
  tooltip: { show: true },  //配置提示框组件
  series: [{  //数据系列及其配置
    name: '',  //设置名称
    type: 'wordCloud',  //设置图表类型为字云图
    size: ['80%', '80%'],  //设置显示的字云图的大小
    textRotation: [0, 30, 45, 70, 90, 115, -20, -90],  //设置文字倾斜角度
    textPadding: 3,  //设置文字之间的间距
    autoSize: { enable: true, minSize: 5 },  //设置文字的自动大小
    textStyle: {
      color: function () {
        return 'rgb(' + [
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255)
        ].join(',') + ')'
      },
      emphasis: {
        shadowBlur: 26,
        color: '#333',
        shadowColor: '#ccc',
        fontSize: 20
      }
    },
    data: [
      { name: '发展', value: 4 },
      { name: '共建', value: 3 },
      { name: '经济圈', value: 3 },
      { name: '区域', value: 3 },
      { name: '发挥', value: 3 },
      { name: '统筹', value: 2 },
      { name: '协调', value: 2 },
      { name: '推进', value: 2 },
      { name: '作用', value: 2 },
      { name: '成渝', value: 2 },
      { name: '地区', value: 2 },
      { name: '双城', value: 2 },
      { name: '建设', value: 2 },
      { name: '便捷', value: 2 },
      { name: '加强', value: 1 },
      { name: '顶层', value: 1 },
      { name: '设计', value: 1 },
      { name: '牢固', value: 1 },
      { name: '树立', value: 1 },
      { name: '一体化', value: 1 },
      { name: '理念', value: 1 },
      { name: '双城记', value: 1 },
      { name: '合力', value: 1 },
      { name: '打造', value: 1 },
      { name: '协作', value: 1 },
      { name: '高水平', value: 1 },
      { name: '样板', value: 1 },
      { name: '时代', value: 1 },
      { name: '西部', value: 1 },
      { name: '开发', value: 1 },
      { name: '支撑', value: 1 },
      { name: '一带', value: 1 },
      { name: '一路', value: 1 },
      { name: '带动', value: 1 },
      { name: '长江', value: 1 },
      { name: '经济带', value: 1 },
      { name: '绿色', value: 1 },
      { name: '示范作用', value: 1 },
      { name: '启动', value: 1 },
      { name: '碳达峰', value: 1 },
      { name: '联合行动', value: 1 },
      { name: '建立', value: 1 },
      { name: '财税', value: 1 },
      { name: '协同', value: 1 },
      { name: '机制', value: 1 },
      { name: '全面', value: 1 },
      { name: '提速', value: 1 },
      { name: '推动', value: 1 },
      { name: '合作', value: 1 },
      { name: '深化', value: 1 },
      { name: '实施', value: 1 },
      { name: '一批', value: 1 },
      { name: '生活', value: 1 },
      { name: '行动', value: 1 },
      { name: '通办', value: 1 },
      { name: '事项', value: 1 },
      { name: '提升', value: 1 },
      { name: '群众', value: 1 },
      { name: '办事', value: 1 },
      { name: '一区', value: 1 },
      { name: '两群', value: 1 },
      { name: '持续', value: 1 },
      { name: '释放', value: 1 },
      { name: '经济', value: 1 },
      { name: '布局', value: 1 },
      { name: '优化', value: 1 },
      { name: '效应', value: 1 },
    ] //data结束
  }]  //series结束
}  //option结束

const cloudjcts = echarts.init(document.getElementById("cloudjcts"))
const cloudOptionjcts = {  //指定图表的配置项和数据
  title: {  //配置标题组件
    text: '',
    x: 'center', y: 15,
    textStyle: {
      color: 'green', fontSize: 22,
    }
  },
  tooltip: { show: true },  //配置提示框组件
  series: [{  //数据系列及其配置
    name: '',  //设置名称
    type: 'wordCloud',  //设置图表类型为字云图
    size: ['80%', '80%'],  //设置显示的字云图的大小
    textRotation: [0, 30, 45, 70, 90, 115, -20, -90],  //设置文字倾斜角度
    textPadding: 3,  //设置文字之间的间距
    autoSize: { enable: true, minSize: 5 },  //设置文字的自动大小
    textStyle: {
      color: function () {
        return 'rgb(' + [
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255)
        ].join(',') + ')'
      },
      emphasis: {
        shadowBlur: 26,
        color: '#333',
        shadowColor: '#ccc',
        fontSize: 20
      }
    },
    data: [
      { name: '推动', value: 5 },
      { name: '优化', value: 5 },
      { name: '着力', value: 4 },
      { name: '调整', value: 4 },
      { name: '碳达峰', value: 3 },
      { name: '排放', value: 3 },
      { name: '结构', value: 3 },
      { name: '实施', value: 2 },
      { name: '行动', value: 2 },
      { name: '加快', value: 2 },
      { name: '公共', value: 2 },
      { name: '机构', value: 2 },
      { name: '绿色', value: 2 },
      { name: '有序', value: 1 },
      { name: '推进', value: 1 },
      { name: '严格', value: 1 },
      { name: '落实', value: 1 },
      { name: '国家', value: 1 },
      { name: '政策', value: 1 },
      { name: '十大', value: 1 },
      { name: '试点', value: 1 },
      { name: '建设', value: 1 },
      { name: '健全', value: 1 },
      { name: '统计', value: 1 },
      { name: '核算', value: 1 },
      { name: '体系', value: 1 },
      { name: '创造条件', value: 1 },
      { name: '实现', value: 1 },
      { name: '能耗', value: 1 },
      { name: '总量', value: 1 },
      { name: '强度', value: 1 },
      { name: '转变', value: 1 },
      { name: '形成', value: 1 },
      { name: '减污', value: 1 },
      { name: '降碳', value: 1 },
      { name: '激励', value: 1 },
      { name: '约束', value: 1 },
      { name: '机制', value: 1 },
      { name: '开展', value: 1 },
      { name: '节约型', value: 1 },
      { name: '机关', value: 1 },
      { name: '创建', value: 1 },
      { name: '倡导', value: 1 },
      { name: '适度', value: 1 },
      { name: '生活', value: 1 },
      { name: '方式', value: 1 },
      { name: '节约', value: 1 },
      { name: '一张', value: 1 },
      { name: '一度', value: 1 },
      { name: '一滴水', value: 1 },
      { name: '坚持', value: 1 },
      { name: '引领', value: 1 },
      { name: '四大', value: 1 },
      { name: '促进', value: 1 },
      { name: '经济社会', value: 1 },
      { name: '发展', value: 1 },
      { name: '全面', value: 1 },
      { name: '转型', value: 1 },
      { name: '空间结构', value: 1 },
      { name: '产业结构', value: 1 },
      { name: '交通', value: 1 },
      { name: '能源', value: 1 },
    ]//data结束
  }]  //series结束
}  //option结束

const initBubbleChart = () => {
  let data = passengerFlowData.city.map((item, index) => ({
    label: item,
    value: passengerFlowData.footfall[index]
  }))
  let format = ['label', 'value']
  let [maxValue, temp] = [0, []]
  data.forEach(item => {
    temp.push(item[format[1]])
  })
  maxValue = Math.max.apply(null, temp)
  // 气泡颜色数组
  let color = [
    '#FFB600', '#886CFF', '#0084FF',
    '#4CB690', '#58B458', '#6C6C6C',
    '#F56161', '#FC754C', '#5F5EEC'
  ]
  // 气泡颜色备份
  let bakeColor = [...color]
  // 气泡数据
  let bubbleData = []
  // 气泡基础大小
  let basicSize = 70
  // 节点之间的斥力因子,值越大,气泡间距越大
  let repulsion = 380
  basicSize = 40
  repulsion = 120

  // 填充气泡数据数组bubbleData
  for (let item of data) {
    // 确保气泡数据条数少于或等于气泡颜色数组大小时，气泡颜色不重复
    if (!bakeColor.length) bakeColor = [...color]
    let colorSet = new Set(bakeColor)
    let curIndex = Math.round(Math.random() * (colorSet.size - 1))
    let curColor = bakeColor[curIndex]
    colorSet.delete(curColor)
    bakeColor = [...colorSet]
    // 气泡大小设置
    let size = (item[format[1]] * basicSize * 2) / maxValue
    if (size < basicSize) size = basicSize

    bubbleData.push({
      "name": item[format[0]],
      "value": item[format[1]],
      "symbolSize": size,
      "draggable": true,
      "itemStyle": {
        "normal": { "color": curColor }
      }
    })
  }
  let bubbleChart = echarts.init(document.getElementById('bubble'))
  let bubbleOptions = {
    tooltip: {
      trigger: 'item'
    },
    backgroundColor: '#fff',
    animationEasingUpdate: 'bounceIn',
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: repulsion,
        edgeLength: 10
      },
      // 是否开启鼠标缩放和平移漫游
      roam: false,
      label: { normal: { show: true } },
      data: bubbleData,
    }]
  }
  bubbleChart.setOption(bubbleOptions)
}

window.bar1 = bar1
window.barOption1 = barOption1
window.bar5 = bar5
window.barOption5 = barOption5
window.bar6 = bar6
window.barOption6 = barOption6
window.bar8 = bar8
window.barOption8 = barOption8
window.pie1 = pie1
window.pieOption1 = pieOption1
window.pie5 = pie5
window.pieOption5 = pieOption5
window.pie6 = pie6
window.pieOption6 = pieOption6
window.cloud = cloud
window.cloudOption = cloudOption
window.cloudigyu = cloudigyu
window.cloudOptionigyu = cloudOptionigyu
window.cloudjcts = cloudjcts
window.cloudOptionjcts = cloudOptionjcts
window.initBubbleChart = initBubbleChart