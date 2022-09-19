window.onload = () => {
  const scrollPage = new ScrollPage('#main-page')
  scrollPage.on('page4', () => {
    document.querySelector('#page4 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page4 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page6', () => {
    document.querySelector('#page6 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page6 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page7', () => {
    document.querySelector('#page7 .lin').classList.add('animate__animated', 'animate__bounceInLeft')
    document.querySelector('#page7 .rin').classList.add('animate__animated', 'animate__bounceInRight')
  })
  scrollPage.on('page8', () => {
    document.querySelector('#page8 .lfin').classList.add('animate__animated', 'animate__fadeInLeft')
    document.querySelector('#page8 .rfin').classList.add('animate__animated', 'animate__fadeInRight')
  })
   
}