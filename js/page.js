const ani = (query, dire = 0, delay = 0) => {
  const direction = ['animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeInUp', 'animate__fadeInUpBig', 'animate__fadeIn']
  setTimeout(() => document.querySelector(query).classList.add('animate__animated', direction[dire], 'active'), delay)
}
window.onload = () => {
  const scrollPage = new ScrollPage('#main-page',{
    
  })
  window.scrollPage = scrollPage
  scrollPage.on('page2', () => {
    ani('#page2 .lin', 0, 200)
    ani('#page2 .rin1', 1, 200)
    ani('#page2 .rin2', 1, 400)
    ani('#page2 .rin3', 1, 600)
  })
  scrollPage.on('page3', () => {
    ani('#page3 .lin', 0, 200)
    ani('#page3 .rin1', 1, 200)
    ani('#page3 .rin2', 1, 400)
  })
  scrollPage.on('page4', () => {
    cloud.setOption(cloudOption)
    ani('#page4 .lin', 0, 200)
    ani('#page4 .rin', 1, 200)
  })
  scrollPage.on('page5', () => {
    ani('#page5 .lin', 0, 200)
    ani('#page5 .rin', 1, 200)
  })
  scrollPage.on('page6', () => {
    window.bar1 && window.bar1.setOption(barOption1)
    ani('#page6 .fin', 2, 0)
  })
  scrollPage.on('page7', () => {
    window.bar8 && window.bar8.setOption(barOption8)
    ani('#page7 .lin1', 0, 200)
    ani('#page7 .lin2', 0, 400)
    ani('#page7 .rin', 1, 200)
  })
  scrollPage.on('page8', () => {
    window.pie1 && window.pie1.setOption(pieOption1)
    ani('#page8 .lin', 0, 200)
    ani('#page8 .rin', 1, 200)
  })
  scrollPage.on('page9', () => {
    window.initBubbleChart && window.initBubbleChart()
    ani('#page9 .lin', 0, 200)
    ani('#page9 .rin', 1, 200)
  })
  scrollPage.on('page10', () => {
    ani('#page10 .lin', 0, 200)
    ani('#page10 .rin', 1, 200)
  })
  scrollPage.on('page11', () => {
    cloudigyu.setOption(cloudOptionigyu)
    ani('#page11 .lin', 0, 200)
    ani('#page11 .rin', 1, 200)
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
    ani('#page12 .fin', 2, 200)
    ani('#page12 .lin', 0, 200)
    ani('#page12 .rin', 1, 200)
  })
  scrollPage.on('page13', () => {
    cloudjcts.setOption(cloudOptionjcts)
    ani('#page13 .lin', 0, 200)
    ani('#page13 .rin', 1, 200)
  })
  scrollPage.on('page14', () => {
    window.bar5 && window.bar5.setOption(barOption5)
    window.bar6 && window.bar6.setOption(barOption6)
    ani('#page14 .lin1', 0, 200)
    ani('#page14 .rin1', 1, 200)
    ani('#page14 .lin2', 0, 400)
    ani('#page14 .rin2', 1, 400)
  })
  scrollPage.on('page15', () => {
    ani('#page15 .lin', 0, 200)
    ani('#page15 .rin1', 1, 200)
    ani('#page15 .rin2', 1, 200)
  })
  scrollPage.on('page16', () => {
    ani('#page16 .flin', 0, 200)
    ani('#page16 .frin', 1, 200)
    ani('#page16 .fin', 2, 200)
    ani('#page16 .bgin', 3, 100)
  })
  scrollPage.on('page17', () => {
    ani('#page17 .rin', 1, 200)
    ani('#page17 .flin', 4, 200)
    ani('#page17 .frin', 4, 200)
  })
  scrollPage.on('page18', () => {
    ani('#page18 .flin', 4, 200)
    ani('#page18 .frin', 4, 200)
    ani('#page18 .fin', 4, 200)
  })
  scrollPage.on('page19', () => {
    ani('#page19 .flin', 4, 200)
    ani('#page19 .frin', 4, 200)
    ani('#page19 .fin', 4, 200)
  })
  scrollPage.on('page20', () => {
    ani('#page20 .lin', 0, 100)
    ani('#page20 .rin', 1, 100)
    ani('#page20 .rin1', 1, 200)
    ani('#page20 .rin2', 1, 300)
    ani('#page20 .rin3', 1, 400)
  })
  scrollPage.on('page22', () => {
    document.querySelector('#page22 .tdw').classList.add('animate__animated', 'animate__fadeInDown')
    document.querySelector('#page22 .bup').classList.add('animate__animated', 'animate__fadeInUp')
  })
  scrollPage.on('page23', () => {
    ani('#page23 .lin1', 0, 200)
    ani('#page23 .lin2', 0, 400)
    ani('#page23 .rin', 1, 200)
  })
}