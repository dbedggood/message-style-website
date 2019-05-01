"use strict";

var messageTimeline = anime.timeline();

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