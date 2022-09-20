window.onload = () => {
  const scrollPage = new ScrollPage('#main-page')
  window.scrollPage = scrollPage
  scrollPage.on('page5', () => {
    document.querySelector('#page5 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page5 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page6', () => {
    window.bar1 && window.bar1.setOption(barOption1)
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
}