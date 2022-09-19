const metroData = {
  city: ['上海', '北京', '广州', '成都', '杭州', '重庆', '武汉', '南京', '深圳', '青岛', '天津', '西安', '郑州', '苏州', '长沙', '大连', '宁波', '昆明', '合肥', '南昌', '南宁', '沈阳', '无锡', '福州', '长春', '厦门', '济南', '佛山', '哈尔滨', '石家庄', '贵阳', '徐州', '常州', '温州', '呼和浩特', '绍兴', '芜湖', '洛阳', '东莞', '乌鲁木齐', '兰州', '太原'],
  mileage: [802.00, 783.00, 621.00, 518.96, 516.00, 478.00, 435.00, 427.10, 419.00, 284.30, 275.38, 259.00, 215.60, 210.37, 209.30, 201.03, 183.00, 172.60, 156.15, 128.45, 128.20, 117.06, 113.50, 111.00, 106.73, 98.40, 84.10, 83.77, 79.61, 76.50, 75.71, 64.28, 54.06, 53.50, 49.03, 47.10, 46.25, 43.50, 37.80, 27.80, 25.97, 23.65,],
  metro: [19, 25, 16, 12, 12, 11, 11, 11, 12, 6, 8, 8, 7, 5, 7, 5, 5, 6, 5, 4, 5, 4, 4, 4, 5, 3, 3, 3, 3, 3, 2, 3, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1,]
}

var total = metroData.mileage.reduce((a, b) => a + b, 0)
metroData.ratio = metroData.mileage.map(item => (item * 100 / total).toFixed(2))

const mileageData = [
  { value: 6280.8, name: '地铁运营线路' },
  { value: 1688.9, name: '其他制式城市轨道交通运营线路' }
]

const passengerFlowData = {
  city: ['上海', '北京', '广州', '深圳', '成都', '重庆', '西安', '武汉', '杭州', '南京', '长沙', '天津', '郑州', '苏州', '沈阳', '南宁', '合肥', '南昌', '宁波', '青岛', '昆明', '长春', '厦门', '大连', '无锡', '福州', '石家庄', '贵阳', '哈尔滨', '徐州', '兰州', '济南', '呼和浩特', '常州', '东莞', '太原', '乌鲁木齐', '洛阳', '温州', '嘉兴（海宁）', '绍兴', '芜湖', '佛山',],
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

var bar1 = echarts.init(document.getElementById('bar1'))
var bar3 = echarts.init(document.getElementById('bar3'))
var bar5 = echarts.init(document.getElementById('bar5'))
var bar6 = echarts.init(document.getElementById('bar6'))
var bar7 = echarts.init(document.getElementById('bar7'))
var bar8 = echarts.init(document.getElementById('bar8'))

var pie1 = echarts.init(document.getElementById('pie1'))
var pie3 = echarts.init(document.getElementById('pie3'))
var pie5 = echarts.init(document.getElementById('pie5'))
var pie6 = echarts.init(document.getElementById('pie6'))


var mapContainer = echarts.init(document.getElementById('mapContainer'))

var barOption1 = {
  title: {
    text: '中国内地城市地铁里程数和线路数',
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
bar1.setOption(barOption1)

var barOption3 = {
  title: {
    text: '中国主要城市地铁客流量排行榜',
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
    data: ['客运量'],
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
      data: passengerFlowData.city
    }
  ],
  yAxis: [
    {
      type: 'value',
    }
  ],
  dataZoom: [
    {
      show: true,
      start: 0,
      end: 20
    },
    {
      type: 'inside',
      start: 0,
      end: 20
    }
  ],
  series: [
    {
      name: '客运量',
      type: 'bar',
      data: passengerFlowData.footfall,
      barWidth: 35,
      label: { show: true },
      itemStyle: {
        color: '#002060'
      }
    }
  ]
}
bar3.setOption(barOption3)


var timer = setInterval(() => {
  var o1 = barOption1.dataZoom[0]
  o1.start = o1.start >= 100 ? 0 : o1.start + 3
  o1.end = o1.end >= 100 ? 0 : o1.end + 3

  var o3 = barOption3.dataZoom[0]
  o3.start = o3.start >= 100 ? 0 : o3.start + 3
  o3.end = o3.end >= 100 ? 0 : o3.end + 3

  bar1.setOption(barOption1)
  bar3.setOption(barOption3)
}, 1500)

var pieOption1 = {
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
pie1.setOption(pieOption1)

var pieOption3 = {
  title: {
    text: '成都与重庆地铁里程数对比',
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
      name: '地铁里程数（km）',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        color(e) { return e.dataIndex ? '#002060' : '#5470c6' }
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
      data: comparations.mileage
    }
  ]
}

pie3.setOption(pieOption3)

var pieOption5 = {
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

pie5.setOption(pieOption5)

var pieOption6 = {
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

pie6.setOption(pieOption6)

var barOption5 = {
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
bar5.setOption(barOption5)

var barOption6 = {
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
bar6.setOption(barOption6)

var barOption7 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // type: 'cross'
    }
  },
  grid: {
    right: '10%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['里程数', '线路数']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      data: comparations.city
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 600,
      name: '里程数',
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
        }
      },
      axisLabel: {
        formatter: '{value} (千米)'
      }
    },
    {
      type: 'value',
      min: 0,
      name: '线路数',
      position: 'left',
      alignTicks: true,
      offset: 0,
      axisLine: {
        show: true,
        lineStyle: {
        }
      },
      axisLabel: {
        formatter: '{value} (条)'
      }
    }
  ],
  series: [
    {
      name: '里程数',
      type: 'bar',
      barMaxWidth: 50,
      data: comparations.mileage,
      itemStyle: {
        color: '#FE7334'
      }
    },
    {
      name: '线路数',
      type: 'bar',
      yAxisIndex: 1,
      barMaxWidth: 50,
      data: comparations.metro,
      itemStyle: {
        color: '#002060'
      }
    }
  ]
}
bar7.setOption(barOption7)

var barOption8 = {
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
bar8.setOption(barOption8)


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
    center: [104.114129, 30.550339],
    zoom: 6,
    roam: true,
  },
  series: [
    {
      name: '里程数',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: convertData(mapData[0]),
      symbolSize: function (val) {
        return Math.max(15, val[2] / 8)
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

window.addEventListener('resize', mapContainer.resize);

(function defaultSelect() {
  var index = [0, 0, 0, 0]
  var arr = [pie1, pie3, pie5, pie6]
  for (const i in arr) {
    arr[i].dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 0 });
    arr[i].on('mouseover', function (e) {
      index[i] = e.dataIndex;
      arr[i].dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: 0 });
      arr[i].dispatchAction({ type: 'downplay', seriesIndex: 1, dataIndex: 1 });
      arr[i].dispatchAction({ type: 'highlight', seriesIndex: e.dataIndex, dataIndex: e.dataIndex });
    });
    arr[i].on('mouseout', function (e) {
      index[i] = e.dataIndex;
      arr[i].dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 0 });
    });
  }
})()
