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
  if (o1.start >= 100 || o1.end >= 100) {
    o1.start = 0
    o1.end = 35
  } else {
    o1.start += 3
    o1.end += 3
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
          symbol: 'image://./img/energy.png',
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


var iconDom = document.getElementById('icon');
var iconChart = echarts.init(iconDom);

let xData = [];
let yData = [];
let iconData = [];
for (let y = 0; y < 8; y++) {
  yData.push(y);
  for (let x = 0; x < 8; x++) {
    iconData.push([x, y, 8]);
  }
}
for (let x = 0; x < 8; x++) {
  xData.push(x);
}
const iconOptions = [
  {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    xAxis: {
      show: false,
      type: 'category',
      data: xData
    },
    yAxis: {
      show: false,
      type: 'category',
      data: yData
    },
    series: [
      {
        type: 'scatter',
        data: iconData,
        symbol: `path://M660.068 775H368.9l20.346-43h-74.209L209.153 960h74.209l14.118-31h434.008l14.118 31h74.209L713.931 732h-74.209l20.346 43z m-334.352 93l14.948-32h347.639l14.948 32H325.716z M823 667.191V125.374C823 89.821 794.57 61 759.017 61H266.374C230.821 61 202 89.821 202 125.374v541.817C202 702.744 230.821 732 266.374 732h492.642C794.57 732 823 702.744 823 667.191z m-465.159-26.97c-28.89 0-52.309-23.42-52.309-52.309s23.42-52.309 52.309-52.309c28.89 0 52.309 23.42 52.309 52.309s-23.419 52.309-52.309 52.309z m324.554 0c-28.89 0-52.309-23.42-52.309-52.309s23.42-52.309 52.309-52.309 52.309 23.42 52.309 52.309-23.419 52.309-52.309 52.309zM735 348.626C735 384.179 706.179 413 670.626 413H356.374C320.821 413 292 384.179 292 348.626V227.374C292 191.821 320.821 163 356.374 163h314.251C706.179 163 735 191.821 735 227.374v121.252z M735 227.374C735 191.821 706.179 163 670.626 163H356.374C320.821 163 292 191.821 292 227.374v121.251C292 384.179 320.821 413 356.374 413h314.251C706.179 413 735 384.179 735 348.626V227.374z`,
        symbolKeepAspect: true,
        universalTransition: true,
        symbolSize: 50
      }
    ]
  },
  {
    series: [
      {
        type: 'scatter',
        symbol: `path://M586.7024 209.2016h-58.8576c-9.8688 0-17.88 7.8432-17.88 17.52V286.256c0 9.6768 8.0112 17.52 17.88 17.52h58.8576c9.864 0 17.8752-7.8432 17.8752-17.52V226.7264c-0.0144-9.6768-8.0112-17.5248-17.8752-17.5248z M586.7024 398.5856h-58.8576c-9.8688 0-17.88 7.9248-17.88 17.7072V475.328c0 9.7824 8.0112 17.7072 17.88 17.7072h58.8576c9.864 0 17.8752-7.9248 17.8752-17.7072V416.2928c-0.0144-9.7824-8.0112-17.7072-17.8752-17.7072z M36.7376 943.4672l0.0096-0.1968-0.0096-0.1968v0.3936zM970.1072 918.7328h-57.9552v-267.7488c0-48.2352-43.4304-87.3264-92.3472-87.3264H770.144V123.9344c0-44.5296-36.6192-80.6256-81.7584-80.6256H213.4592c-45.1392 0-81.7584 36.1056-81.7584 80.6256v794.7984H70.808c-18.7488 0-33.9456 6.1296-34.0608 24.5328 0.1104 18.3792 15.3072 23.0544 34.0608 23.0544h899.2992c18.4848 0 33.4944-7.4064 34.0128-25.2768-0.5184-17.7504-15.528-22.3104-34.0128-22.3104z m-285.2016 0.8064h-90.408c-7.512 0-13.608-6.0096-13.608-13.4448v-116.1072c0-7.4256 6.1056-13.4352 13.608-13.4352h90.3936c7.5216 0 13.6176 6.0096 13.6176 13.4352v116.1072h0.0096c0 7.4352-6.1008 13.4448-13.6128 13.4448z m0-189.8976h-90.408c-7.512 0-13.608-6.0192-13.608-13.4352v-90.7008c0-7.4352 6.1056-14.1744 13.608-14.1744h90.3936c7.5216 0 13.6176 6.0096 13.6176 13.4352v91.4448h0.0096c0 7.4112-6.1008 13.4304-13.6128 13.4304z m-65.2176-165.984c-48.9168 0-85.6128 39.096-85.6128 87.3264v267.7488H178.8848V144.3392c0-29.6832 24.4032-53.7456 54.4896-53.7456h434.8992c30.1056 0 54.4992 24.0624 54.4992 53.7456v419.3136h-103.0848z m245.1216 342.4416c0 7.4352-6.1056 13.4448-13.6272 13.4448h-91.1328c-7.5312 0-13.6272-6.0096-13.6272-13.4448v-116.1072c0-7.4256 6.1056-13.4352 13.6272-13.4352h91.1328c7.5312 0 13.6272 6.0096 13.6272 13.4352v116.1072z m0-189.8928c0 7.416-6.1056 13.4352-13.6272 13.4352h-91.1328c-7.5312 0-13.6272-6.0192-13.6272-13.4352v-91.4448c0-7.4256 6.1056-13.4352 13.6272-13.4352h91.1328c7.5312 0 13.6272 6.0096 13.6272 13.4352v91.4448z M1004.168 940.1072c0 0.3264-0.0384 0.6192-0.048 0.936 0.0096 0.312 0.048 0.6 0.048 0.9264v-1.8624z M373.9088 398.5856h-59.28a17.7408 17.7408 0 0 0-17.7696 17.7072V475.328a17.7408 17.7408 0 0 0 17.7696 17.7072h59.28a17.7408 17.7408 0 0 0 17.7696-17.7072V416.2928a17.736 17.736 0 0 0-17.7696-17.7072z M373.9088 209.2016h-59.28c-9.8064 0-17.7696 7.8432-17.7696 17.52V286.256c0 9.6768 7.9632 17.52 17.7696 17.52h59.28c9.8064 0 17.7696-7.8432 17.7696-17.52V226.7264c0.0048-9.6768-7.9632-17.5248-17.7696-17.5248z M373.9088 588.0608h-59.28c-9.8064 0-17.7696 7.8384-17.7696 17.52v59.52c0 9.6864 7.9632 17.52 17.7696 17.52h59.28c9.8064 0 17.7696-7.8384 17.7696-17.52v-59.52c0.0048-9.6816-7.9632-17.52-17.7696-17.52z`
      }
    ]
  },
  {
    series: [
      {
        symbol: `path://M492.102134 181.571283c130.913741-82.40574 274.075029-152.901463 429.001677-173.587281 45.084474-3.182433 90.12073-10.222362 135.446297-7.281022 31.872553 5.88268 64.516606 4.77365 96.437379 10.270581 183.231019 25.0255 354.696677 97.594627 530.791329 150.249435-17.696259 3.278871-35.730049 2.989559-53.619182 3.664621-128.068838 7.281022-256.523426 28.738339-376.346869 75.75156-183.857861 68.03657-350.212339 195.719659-444.769188 369.596252-33.897738 63.696888-59.164332 135.060548-55.113961 208.208299 1.350123 45.566661 22.373472 90.410042 57.524896 119.630568 47.350753 40.600136 107.816989 61.961015 167.945694 75.076499 19.14282 4.580775 39.250013 4.002151 57.862427 10.849205-174.696311-1.494779-349.681933 2.459153-523.896057-13.115483-87.950889-7.425678-176.094653-18.130227-261.586388-40.889449-73.244189-20.444724-145.572222-52.172622-202.084526-104.200587-25.073718-23.91647-47.157878-54.921087-49.375938-90.554698 1.157249-25.555905-3.66462-51.835091 4.966525-76.619497 25.941655-90.072511 85.105986-165.727634 146.874127-234.391048 99.475156-109.408206 215.971508-202.422057 339.941758-282.657955zM2514.586829 478.694845c14.079857 3.423527 27.484653 9.306207 40.937667 14.851356-21.071567-2.700247-41.709166-8.004302-62.587858-11.620704 7.184585-1.060811 14.369169-2.314497 21.650191-3.230652z M1133.651792 322.56273c176.239309-99.860905 380.204363-152.178183 582.867514-144.414974 33.560208 4.436119 64.130856 20.058975 96.582034 28.786557 51.738653 18.515977 103.477307 37.031953 154.878429 56.608741 10.800986 3.712839 50.147437 19.432132 59.308988 23.096753 95.955191 36.887297 190.89779 76.233747 286.563669 113.796106 66.107823 28.111496 135.253423 48.749095 200.734403 78.258932 23.665733 8.433449 75.717807 23.829676 42.895346 15.164778-0.202518 0.024109-79.975518-12.464531-87.449415-13.911092-173.153312-33.319114-347.512092-65.336324-524.13715-71.315441-45.759536-3.616402-91.663728-3.66462-137.519701-4.002151-60.996642-5.641587-122.089721 1.494779-183.134582 0.433968-83.948738 4.002151-168.235006 7.907865-250.930058 24.205782-159.073455 29.509838-319.352378 83.900519-443.708376 190.849571-58.392832 50.967154-108.202738 113.313919-136.410672 186.075921l-6.268429 3.809277c-1.687654-75.221155 23.096752-148.706437 60.514454-213.223043 64.661262-117.70182 170.597722-207.147488 285.213546-274.219685z M1504.983917 436.841023c150.345873-17.214072 302.186524-18.949945 453.014584-8.679364 203.579305 14.128076 406.43533 39.34645 607.169733 75.944435 12.102891 2.073404 24.157563 4.725432 35.68183 9.20977 381.554487 156.807177 768.654123 303.729523 1169.737178 402.674272 24.109345 5.88268 48.025814 12.922609 72.810221 15.4782v2.073403c-122.86122-0.048219-244.999159-15.429981-366.751349-30.618867-434.643263-60.562673-859.642789-172.333595-1286.329969-272.290938-175.901778-41.082323-351.948212-82.550396-530.212705-112.15667-66.011385-8.582927-131.974552-19.239257-198.612781-21.457317-91.567291-7.71499-184.388267-1.350123-274.02681 18.805289-21.650191 4.243245-41.709166 13.886982-63.311139 18.178446 120.064536-54.390681 250.351434-82.502177 380.831207-97.160659z`
      }
    ]
  },
  {
    series: [
      {
        symbol: `path://M255.329 231.83C212.739 142.273 153.359 65.132 77.148 0.386L267.84 0a686.133 686.133 0 0 1 149.188 218.117 685.707 685.707 0 0 1 56.011 267.446v538.418H321.49V525.925c0-103.384-22.06-201.422-66.18-294.096zM550.955 1024V485.583a685.688 685.688 0 0 1 55.991-267.466C642.466 135.883 692.183 63.177 756.154 0l190.693 0.387C870.616 65.133 811.235 142.274 768.665 231.83a677.418 677.418 0 0 0-66.16 294.077V1024h-151.55z`
      }
    ]
  },
  {
    series: [
      {
        symbol: `path://M617.259 3.325c16.483 2.842 33.283 4.498 49.407 8.717 123.907 32.442 201.158 110.997 230.718 235.784 3.105 13.113 4.329 26.784 5.263 40.279 1.27 18.388 0.774 18.578 19.39 20.5 64.055 6.605 120.867 30.62 168.523 73.727 83.937 75.928 117.995 171 98.336 282.323-19.615 111.09-85.224 187.43-189.156 229.96-55.781 22.823-113.98 26.35-173.081 13.99-8.15-1.706-11.8-5.037-12.252-14.24-1.446-29.483-4.166-58.9-6.566-90.573 5.682 1.612 10.06 2.646 14.3 4.092 124.617 42.373 254.97-36.997 274.333-167.06 16.936-113.773-63.973-222.147-177.347-236.313-40.773-5.094-81.404-1.31-121.443 8.049-1.503 0.352-3.045 0.528-6.682 1.143 0.691-4.205 1.107-7.36 1.738-10.469 4.771-23.426 10.46-46.711 14.177-70.303 5.203-33.054-5.004-63.089-20.434-91.937-22.012-41.162-50.684-76.5-88.03-104.78-53.31-40.37-111.359-45.624-172.37-22.129-42.951 16.537-77.524 45.628-100.71 81.88-26.774 41.86-38.377 93.273-30.178 145.952 3.059 19.672 8.185 39.028 12.344 58.528 0.798 3.74 1.523 7.49 2.663 13.112-10.918-2.121-20.054-4.342-29.316-5.619-50.658-6.998-100.844-9.844-149.962 10.12-74.871 30.431-126.483 105.868-129.07 186.447-3.165 98.696 65.014 189.08 164.863 210.364 34.992 7.454 69.967 5.995 104.354-4.548 6.374-1.958 12.707-4.036 19.516-6.2 0 11.965 0.525 22.607-0.11 33.18-1.223 20.35-2.503 40.743-5.216 60.927-0.525 3.91-7.245 8.974-11.896 10.024-47.276 10.686-94.792 10.14-141.208-3.394C117.497 871.435 43.716 796.56 14.396 680.713c-42.2-166.758 71.041-339.248 240.538-368.807 10.234-1.786 20.557-3.544 30.903-4.066 8.269-0.416 10.705-3.867 11.104-11.68 2.9-56.692 18.838-109.331 51.107-156.338C401.595 61.815 475.505 17.152 569.623 6.137c4.71-0.552 9.332-1.858 13.993-2.809l33.643-0.003z M780.23 1017.643c-25.68-11.294-49.315-21.663-72.923-32.08-10.596-4.667-20.84-10.405-31.807-13.886-10.898-3.448-13.551-10.762-14.037-20.593-2.483-50.349-4.927-100.707-7.647-151.05-4.767-88.276-9.7-176.545-14.615-264.811a64252.192 64252.192 0 0 0-9.518-167.732c-0.532-9.137-1.722-18.23-2.86-29.909-5.957 4.625-10.788 7.727-14.814 11.65-6.822 6.652-13.026 8.142-20.553 0.824-4.455-4.329-10.09-7.437-17.953-13.072-1.68 22.265-3.458 41.854-4.582 61.489a87989.854 87989.854 0 0 0-14.362 256.43c-3.567 65.506-6.736 131.035-10.313 196.537a5577.858 5577.858 0 0 1-6.73 105.362c-0.299 4.06-2.789 10.057-5.937 11.5-36.239 16.577-72.803 32.455-110.176 48.916 0-13.326-0.828-25.833 0.146-38.194a8327.759 8327.759 0 0 1 11.338-130.163c4.74-50.136 9.295-100.302 15.143-150.311 6.217-53.148 12.98-106.26 21.095-159.145 10.41-67.846 21.338-135.729 47.124-199.968 4.13-10.29 9.9-20.028 15.752-29.503 7.793-12.61 19.556-17.547 34.5-17.55 10.882 0 16.926 6.266 22.824 13.281 6.952 8.262 12.457 9.532 20.985 0.871 21.258-21.597 45.318-20.017 59.561 6.853a402.476 402.476 0 0 1 32.778 83.076c22.391 83.053 34.21 168.16 43.845 253.511 8.249 73.053 16.238 146.139 23.383 219.301 4.385 44.94 6.985 90.052 10.32 135.084 0.275 3.774 0.033 7.587 0.033 13.282z`
      }
    ]
  },
  {
    series: [
      {
        symbol: `path://M337.708 21.039c34.038-1.058 68.2-0.56 102.3-0.498-23.397 163.53-51.15 326.501-76.725 489.72-7.218 34.412-8.462 69.819-18.48 103.67-33.914 0.249-67.89 0.186-101.803 0 29.869-197.818 61.355-395.635 94.708-592.892z m509.316 0.435c38.58-3.235 77.285-0.31 115.928-1.058 36.713 0.623 73.676-2.053 110.265 2.552-1.867 1.493-5.6 4.418-7.467 5.911-5.725 23.522-10.392 47.292-15.806 70.876-16.365 52.955-41.07 103.047-69.071 150.712-58.866 92.842-132.915 176.91-222.397 241.314-80.085 55.319-169.753 96.7-264.648 119.1 3.733 1.68 11.2 5.165 14.934 6.846-34.038-5.414-68.573-3.236-102.86-3.734C429.486 457.121 453.63 300.31 477.276 143.5c5.476-40.696 14.125-81.019 17.05-122.026 17.05-0.746 34.037-1.12 51.087-1.12-9.396 91.535-27.628 181.95-40.758 273.111-13.69 99.562-33.975 198.253-44.305 298.189 43.994-14.623 82.325-41.63 122.213-64.716 50.59-37.086 97.695-79.214 139.946-125.759 83.135-106.967 135.592-242.807 124.515-379.705z m-613.296 647.21c34.971 0.31 70.005-0.187 104.976 0.56-18.606 111.26-36.9 222.583-52.395 334.28-35.033 0.497-70.129 0.373-105.224 0.31 14.685-112.007 35.282-223.392 52.643-335.15z m162.473 0.87c15.93-0.31 31.922-0.56 47.852 0.436-14.125 111.759-33.167 222.957-51.523 334.093-14.624-0.124-29.247-0.248-43.87-0.31 1.182-36.092 9.707-71.312 14.499-106.968 10.578-75.791 24.081-151.21 33.042-227.25z M19.919 668.248a222.647 222.647 0 0 1 6.471-54.759c72.183 0.996 144.427 0.124 216.61 0.436 33.913 0.186 67.889 0.248 101.802 0 20.348-0.187 40.758-0.125 61.106 0.062 34.287 0.498 68.823-1.68 102.86 3.733 54.262 6.285 108.274 15.495 160.606 31.674 62.102 14.25 122.648 37.646 175.665 73.427 63.72 41.94 126.32 88.299 173.55 148.907 31.486 38.83 59.363 81.517 74.235 129.617-70.066 5.165-140.507 1.058-210.76 2.365-29.558-1.12-59.613 3.174-88.735-3.485-0.186-13.938-0.684-27.94-4.542-41.318-12.57-47.354-26.695-95.953-57.746-134.844-43.683-53.826-105.723-87.553-166.829-117.732-38.518-16.49-78.032-32.545-120.159-36.34-15.93-0.996-31.922-0.747-47.852-0.436-19.166 0.498-38.331 0.187-57.497-0.311-34.971-0.747-70.005-0.25-104.976-0.56-71.249-1.12-142.56-0.871-213.81-0.436z`
      }
    ]
  },
  {
    series: [
      {
        symbol: `path://M603.635 0h24.273c44.358 1.344 88.575 8.295 131.043 21.223 72.62 21.89 139.896 61.112 194.822 113.405 48.884 46.304 87.91 102.553 116.258 163.512 13.89 29.726 25.267 60.599 34.49 92.084 6.065 17.409 11.114 35.299 13.235 53.659-4-17.781-8.098-35.573-13.377-53.036-5.563-15.606-12.48-30.71-20.207-45.354-21.638-40.643-49.932-77.625-82.696-109.907-51.713-50.894-115.667-90.28-186.057-108.958-49.036-13.125-100.816-15.704-150.912-7.628-10.327 1.76-20.731 3.388-30.72 6.623-22.61 6.885-44.938 14.754-66.686 24.01-43.757 18.688-85.8 43.19-119.514 77.155-19.103 18.84-34.741 40.85-48.708 63.68-1.202 1.563-1.901 4.066-4.196 4.263-75.724 17.726-151.437 35.506-227.16 53.232 8.896-56.74 36.501-108.979 71.45-153.928C286.818 133.022 349.034 83.69 418.244 48.982 475.838 20.338 539.135 2.065 603.635 0z M410.911 340.903c26.633-5.048 53.801-6.917 80.882-6.786 23.234 2.24 45.769 8.852 68.27 14.786 66.861 18.71 132.749 40.676 198.462 63.036 44.698 15.354 88.958 31.976 133.459 47.932 86.543 31.409 173.107 62.773 259.573 94.422 1.618 0.437 2.612 1.793 3.585 3.082v1.333c-61.047-8.84-121.656-20.403-182.31-31.594-103.689-19.518-207.214-39.9-310.653-60.686-9.016-1.694-17.944-3.945-27.08-4.907-39.605-4.961-79.341-9.464-119.274-10.524-13.956 0.077-28.469-0.71-41.714 4.47-33.802 12.218-66.828 26.939-97.58 45.615-15.825 9.89-31.398 20.776-43.583 35.07-4.58 5.431-8.874 12.633-6.7 20 2.722 8.01 10.787 12.337 18.087 15.485 16.819 6.688 35.026 9.016 52.992 9.912 238.93 15.475 477.86 30.982 716.8 46.424-15.66 74.98-48.752 146.245-95.93 206.592-49.757 63.888-115.296 115.482-189.413 148.19-59.658 26.513-124.748 40.404-189.992 41.245H627.82c-64.871-0.841-129.6-14.557-188.986-40.774-65.976-28.96-125.252-72.85-172.605-127.11-39.047-44.61-70.095-96.203-91.231-151.6 63.8 0.011 127.601 0.011 191.402 0.011a542.165 542.165 0 0 0 71.133 89.494c28.02 28.294 59.397 53.462 94.04 73.188 28.02 16.054 58.26 28.206 89.614 35.933 70.926 18.425 147.075 16.666 216.897-5.727 39.332-12.6 76.675-31.758 109.264-57.189 28.435-22.108 53.156-49.069 72.248-79.625 19.496-31.058 32.993-65.811 39.943-101.81-85.417 0.383-170.845 0.58-256.273 0.744-104.585-0.623-209.171-1.279-313.757-1.913-92.488-0.776-184.986-0.35-277.485-0.459-48.5-0.273-97.58 2.12-145.35-7.978-17.288-3.825-34.85-8.994-49.287-19.605C8.022 622.804 0.93 612.378 0 600.652v-5.858c1.322-6.327 4.874-11.868 8.47-17.125 6.24-8.84 13.43-16.96 20.807-24.862 15.967-16.83 32.96-32.665 50.457-47.9 21.234-18.349 42.906-36.315 66.03-52.249 28.895-17.573 58.84-33.364 89.111-48.424 56.107-27.365 114.454-51.637 176.036-63.33z`
      }
    ]
  },
  {
    series: [
      {
        symbol: `path://M379.935 750.65c0 32.408-2.348 61.527 0.47 90.177 3.287 31.938 25.832 48.846 56.36 54.483 141.372 27.24 261.608-11.273 359.77-116.95 41.801-45.088 69.042-98.16 84.072-157.81 9.863-39.922 39.922-60.118 75.617-51.194 33.817 8.924 51.195 40.392 39.922 80.314-55.89 195.854-182.703 317.97-381.374 363.528-76.087 17.377-152.644 12.68-227.792-7.515-81.253-21.605-125.403-74.678-126.812-158.75-1.878-111.312-2.348-222.155 0-333.468 2.818-119.297 99.571-223.564 218.868-240.003 125.403-17.848 244.7 56.36 283.213 175.188 31.938 99.57 2.348 209.005-75.148 275.698-80.784 69.982-191.626 83.602-287.44 35.696-5.166-2.818-10.802-5.167-19.726-9.394zM515.2 668.457c78.905 0.47 140.902-61.057 140.902-139.023 0-76.087-62.467-138.554-139.493-138.554-76.087 0-138.554 62.937-138.554 139.493 0.47 75.148 61.997 137.615 137.145 138.084z M378.996 48.958c53.073-4.227 102.858-12.211 152.643-11.742 214.171 2.818 403.92 152.175 460.28 358.83 1.879 7.516 3.758 15.03 5.167 23.015 6.105 36.634-10.803 63.875-43.68 71.86-33.347 7.984-63.406-10.803-72.33-46.498-14.09-58.24-39.922-109.903-78.435-155.462-107.555-127.75-283.213-168.143-436.327-101.45-13.62 6.107-27.71 11.743-42.27 12.682-30.999 2.348-56.361-18.787-60.588-53.543-4.227-32.407-4.227-65.284-2.818-98.161 0.94-23.954 22.075-43.21 45.558-47.437 25.832-4.697 51.664 6.575 63.876 29.12 4.227 7.044 6.575 14.09 8.924 18.786zM183.142 891.082c-10.333-9.393-17.378-15.03-23.484-21.135-163.916-170.491-180.824-442.902-40.392-632.65l4.227-5.636c23.954-30.059 59.18-36.634 86.89-15.969 26.302 19.726 31.468 55.422 9.863 85.48-32.407 45.09-56.83 93.466-68.572 147.948-16.909 77.966-8.924 153.583 21.605 227.791 6.575 15.97 9.863 34.287 10.332 51.664 1.41 44.62 0.47 89.238 0.47 133.857 0.47 7.515-0.47 15.03-0.94 28.65z`
      }
    ]
  },
  {
    series: [
      {
        symbol: `path://M496.299 22.777c-259.652 0-470.14 210.487-470.14 470.14 0 148.592 71.091 282.027 171.384 359.782-35.89 22.07-109.352 77.4-130.834 117.24 41.128-26.356 130.375-49.408 179.934-50.43 162.119-3.35 217.313 71.364 390.315 75.201 229.605-2.618 297.557-158.672 306.857-255.203-61.341 103.578-139.514 116.744-180.677 128.142-128.63 25.502-228.508-17.504-315.046-42.918-37.873-7.96-72.322-13.504-123.476-11.973 38.865-20.24 38.38-20.346 77.655-29.578V492.916c0-51.93 42.098-94.028 94.028-94.028 51.93 0 94.027 42.098 94.027 94.028v329.097l-0.92 0.277c47.426 8.43 81.629 14.524 112.393 10.901 65.282-7.687 128.002-24.653 178.847-72.096 56.564-77.617 85.792-164.795 85.792-268.179 0-259.652-210.49-470.139-470.14-470.139z m0 117.535c194.737 0 352.604 157.867 352.604 352.604 0 116.68-56.66 220.107-143.98 284.287V492.916c0-115.22-93.405-208.624-208.624-208.624s-208.625 93.405-208.625 208.624v284.287c-87.32-64.18-143.98-167.607-143.98-284.287 0-194.737 157.867-352.604 352.605-352.604z`
      }
    ]
  },
];
let optionIndex = 0;
let iconOption = iconOptions[optionIndex];
setInterval(function () {
  optionIndex = (optionIndex + 1) % iconOptions.length;
  iconChart.setOption(iconOptions[optionIndex]);
}, 1200);
iconChart.setOption(iconOption);

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