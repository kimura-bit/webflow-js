console.log('This is working')

const text = new SplitType('.heading-xlarge, #text', {
  types: 'lines',
})

// On Page Load
function pageLoad() {
  let tl = gsap.timeline({ delay: 0.2 })
  tl.from(
    '.heading-xlarge .line',
    {
      duration: 1,
      y: '20%',
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
    },
    0.4
  )
}
pageLoad()

// section title
$('#text .line').each(function (index) {
  let triggerElement = $(this)
  let targetElement = $(this)

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top 80%',
      scrub: 1,
    },
  })
  tl.from(targetElement, {
    duration: 1,
    y: '20%',
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out',
  })
})

// graph
$('#graphFirst, #graphSecond, #graphThird').each(function (index) {
  let triggerElement = $(this)
  let targetElement = $('.graph-col')

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      delay: 0.5,
      start: 'bottom 95%',
      end: 'center 60%',
      scrub: 2,
    },
  })
  tl.from(targetElement, {
    duration: 2,
    height: 0,
    opacity: 0,
    stagger: 0.6,
    ease: 'power4.inOut',
  })
})

// image layout img2
$('.img2').each(function (index) {
  let triggerElement = $(this)
  let targetElement = $(this)

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 4,
    },
  })
  tl.to(targetElement, {
    duration: 2,
    y: '-20%',
    ease: 'power4.out',
  })
})

// image layout img3
$('.img3').each(function (index) {
  let triggerElement = $(this)
  let targetElement = $(this)

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top 80%',
      end: 'bottom top',
      scrub: 4,
    },
  })
  tl.to(targetElement, {
    duration: 2,
    y: '-30%',
    ease: 'power4.out',
  })
})

// image full width
$('.img3').each(function (index) {
  let triggerElement = $(this)
  let targetElement = $(this)

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top 80%',
      end: 'bottom top',
      scrub: 4,
    },
  })
  tl.to(targetElement, {
    duration: 2,
    y: '-30%',
    ease: 'power4.out',
  })
})
