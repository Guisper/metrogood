window.onload = () => {
  const scrollPage = new ScrollPage('#main-page')
  window.scrollPage = scrollPage
  scrollPage.on('page3', () => {
    document.querySelector('#page3 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page3 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page4', () => {
    cloud.setOption(cloudOption)
    document.querySelector('#page4 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page4 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page5', () => {
    document.querySelector('#page5 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page5 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page6', () => {
    window.bar1 && window.bar1.setOption(barOption1)
    document.querySelector('#page6 .fin').classList.add('animate__animated', 'animate__fadeInUp')
  })
  scrollPage.on('page7', () => {
    window.bar8 && window.bar8.setOption(barOption8)
    document.querySelector('#page7 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page7 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page8', () => {
    !(function defaultSelect() {
      const index = 0
      pie1.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 0 })
      pie1.on('mouseover', function (e) {
        index = e.dataIndex
        pie1.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: 0 })
        pie1.dispatchAction({ type: 'downplay', seriesIndex: 1, dataIndex: 1 })
        pie1.dispatchAction({ type: 'highlight', seriesIndex: e.dataIndex, dataIndex: e.dataIndex })
      })
      pie1.on('mouseout', function (e) {
        index = e.dataIndex
        pie1.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 0 })
      })
    })()
    window.pie1 && window.pie1.setOption(pieOption1)
    document.querySelector('#page8 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page8 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page9', () => {
    window.initBubbleChart && window.initBubbleChart()
    document.querySelector('#page9 .lfin').classList.add('animate__animated', 'animate__fadeInLeft')
    document.querySelector('#page9 .rfin').classList.add('animate__animated', 'animate__fadeInRight')
  })
  scrollPage.on('page10', () => {
    document.querySelector('#page10 .lin').classList.add('animate__animated', 'animate__fadeInLeft')
    document.querySelector('#page10 .rin').classList.add('animate__animated', 'animate__fadeInRight')
  })
  scrollPage.on('page11', () => {
    cloudigyu.setOption(cloudOptionigyu)
    document.querySelector('#page11 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page11 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page12', () => {
    window.pie5 && window.pie5.setOption(pieOption5)
    window.pie6 && window.pie6.setOption(pieOption6)
    !(function () {
      const index = [0, 0]
      const arr = [pie5, pie6]
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
    document.querySelector('#page12 .fin').classList.add('animate__animated', 'animate__fadeInUp')
    document.querySelector('#page12 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page12 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
}