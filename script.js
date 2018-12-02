"use strict";

var messageTimeline = anime.timeline();
var typingTimeline = anime.timeline();

var bubblesMoving = anime({
  targets: 'span.bubble',
  translateY: [
      { value: "-0.4em", duration: 200 },
      { value: 0, duration: 400 },
  ],
  easing: 'easeInOutCubic',
  delay: function(element, iteration, totalTargets) {
      return iteration * 100
  },
  loop: true
});


typingTimeline
  .add({
    targets: '.messages .bubbles',
    scale: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
  ],
    opacity: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
      { value: 0, duration: 600 },
  ],
    translateY: [
      { value: 0, duration: 900 },
      { value: "2.1em", duration: 600 },
  ]})
  .add({
    targets: '.messages .bubbles',
    scale: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
  ],
    opacity: [
      { value: 0, duration: 300 },
      { value: 1, duration: 800 },
      { value: 0, duration: 600 },
  ],
    translateY: [
      { value: "2.1em", duration: 1100 },
      { value: "4.2em", duration: 600 },
  ]})
  .add({
    targets: '.messages .bubbles',
    scale: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
  ],
    opacity: [
      { value: 0, duration: 300 },
      { value: 1, duration: 1500 },
      { value: 0, duration: 600 },
  ],
    translateY: [
      { value: "4.1em", duration: 1800 },
      { value: "8em", duration: 600 },
  ]})
  .add({
    targets: '.messages .bubbles',
    scale: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
  ],
    opacity: [
      { value: 0, duration: 300 },
      { value: 1, duration: 1900 },
      { value: 0, duration: 600 },
  ],
    translateY: [
      { value: "7.6em", duration: 2200 },
      { value: "9.8em", duration: 600 },
  ],
    elasticity: 300
  })
  .add({
    targets: '.messages .bubbles',
    scale: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
  ],
    opacity: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
      { value: 0, duration: 600 },
  ],
    translateY: [
      { value: "9.6em", duration: 900 },
      { value: "11.3em", duration: 600 },
  ],
    elasticity: 300
  })
  .add({
    targets: '.messages .bubbles',
    scale: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
  ],
    opacity: [
      { value: 0, duration: 300 },
      { value: 1, duration: 1000 },
      { value: 0, duration: 600 },
  ],
    translateY: [
      { value: "11.6em", duration: 1300 },
      { value: "13.6em", duration: 600 },
  ],
    elasticity: 300
  })
  .add({
    targets: '.messages .bubbles',
    scale: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
  ],
    opacity: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
      { value: 0, duration: 600 },
  ],
    translateY: [
      { value: "15.2em", duration: 900 },
      { value: "17.1em", duration: 600 },
  ],
    elasticity: 300
  })
  .add({
    targets: '.messages .bubbles',
    scale: [
      { value: 0, duration: 300 },
      { value: 1, duration: 600 },
  ],
    opacity: [
      { value: 0, duration: 300 },
      { value: 1, duration: 500 },
      { value: 0, duration: 600 },
  ],
    translateY: [
      { value: "17.1em", duration: 800 },
      { value: "20em", duration: 600 },
  ],
    elasticity: 200
  })

  
  

messageTimeline
  .add({
    targets: '.messages #message1',
    translateX: 1000,
    easing: 'easeOutExpo',
    offset: '+=800'
  })
  .add({
    targets: '.messages #message2',
    translateX: 1000,
    easing: 'easeOutExpo',
    offset: '+=800'
  })
  .add({
    targets: '.messages #message3',
    translateX: 1000,
    easing: 'easeOutExpo',
    offset: '+=1500'
  })
  .add({
    targets: '.messages #message4',
    translateX: 1000,
    easing: 'easeOutExpo',
    offset: '+=2000'
  })
  .add({
    targets: '.messages #message5',
    translateX: 1000,
    easing: 'easeOutExpo',
    offset: '+=500'
  })
  .add({
    targets: '.messages #message6',
    translateX: 1000,
    easing: 'easeOutExpo',
    offset: '+=1000'
  })
  .add({
    targets: '.messages #message7',
    translateX: 1000,
    easing: 'easeOutExpo',
    offset: '+=500'
  })
  .add({
    targets: '.messages #message8',
    translateX: 1000,
    easing: 'easeOutExpo'
  });