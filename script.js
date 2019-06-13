"use strict";

var messageTimeline = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000
});

messageTimeline
  .add({
    targets: '.messages #message1',
    translateX: 1000,
  })
  .add({
    targets: '.messages #message2',
    translateX: 1000,
    offset: '+=200'
  })
  .add({
    targets: '.messages #message3',
    translateX: 1000,
    offset: '+=600'
  })
  .add({
    targets: '.messages #message4',
    translateX: 1000,
    offset: '+=600'
  })
  .add({
    targets: '.messages #message5',
    translateX: 1000
  })
  .add({
    targets: '.messages #message6',
    translateX: 1000,
    offset: '+=400'
  })
  .add({
    targets: '.messages #message7',
    translateX: 1000
  })
  .add({
    targets: '.messages #message8',
    translateX: 1000
  })