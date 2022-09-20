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
  scrollPage.on('page13', () => {
    cloudjcts.setOption(cloudOptionjcts)
    document.querySelector('#page13 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page13 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page14', () => {
    window.bar5 && window.bar5.setOption(barOption5)
    window.bar6 && window.bar6.setOption(barOption6)
    document.querySelector('#page14 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page14 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page15', () => {
    document.querySelector('#page15 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page15 .rin').classList.add('animate__animated', 'animate__bounceInRight')
    document.querySelector('#page15 .rin2').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page16', () => {
    document.querySelector('#page16 .flin').classList.add('animate__animated', 'animate__fadeInLeft')
    document.querySelector('#page16 .frin').classList.add('animate__animated', 'animate__fadeInRight')
    document.querySelector('#page16 .fin').classList.add('animate__animated', 'animate__fadeInUp')
    document.querySelector('#page16 .bgin').classList.add('animate__animated', 'animate__fadeInUpBig')
  })
  scrollPage.on('page17', () => {
    document.querySelector('#page17 .flin').classList.add('animate__animated', 'animate__fadeInLeft')
    document.querySelector('#page17 .frin').classList.add('animate__animated', 'animate__fadeInRight')
  })
  scrollPage.on('page18', () => {
    document.querySelector('#page18 .flin').classList.add('animate__animated', 'animate__fadeInLeft')
    document.querySelector('#page18 .frin').classList.add('animate__animated', 'animate__fadeInRight')
    document.querySelector('#page18 .fin').classList.add('animate__animated', 'animate__fadeIn')
  })
  scrollPage.on('page19', () => {
    document.querySelector('#page19 .flin').classList.add('animate__animated', 'animate__fadeInLeft')
    document.querySelector('#page19 .frin').classList.add('animate__animated', 'animate__fadeInRight')
    document.querySelector('#page19 .fin').classList.add('animate__animated', 'animate__fadeIn')
  })
  scrollPage.on('page20', () => {
    document.querySelector('#page20 .lin').classList.add('animate__animated', 'animate__fadeInLeft')
    document.querySelector('#page20 .rin').classList.add('animate__animated', 'animate__fadeInRight')
  })
  scrollPage.on('page22', () => {
    document.querySelector('#page22 .tdw').classList.add('animate__animated', 'animate__fadeInDown')
    document.querySelector('#page22 .bup').classList.add('animate__animated', 'animate__fadeInUp')
  })
}