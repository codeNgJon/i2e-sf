import Ember from 'ember';
//if I wanted to I could import 3rd party API's here for the service

export default Ember.Service.extend({
  //NOTE: to use a service you call the service in a component
    // servicename: inject.service()
  //HTML audio from HTML5 will be injected in this service
  // will use play, plause, resume

  song: null,
  audioElement: null,
  isPlaying: false,
  currentTime: 0,
// need to setup the service and tear down after it is used in the component
 // i inquire the audio api from html5 with scrict JS to get access to it here in this service
 // i add event listeners that when used will call the components methods (didTimeChange) and keep the component context with bind
  setup: Ember.on('init', function() {
    var el = document.createElement('audio');
    el.addEventListener('play', Ember.run.bind(this, 'didStartPlaying'));
    el.addEventListener('pause', Ember.run.bind(this, 'didPause'));
    el.addEventListener('timeupdate', Ember.run.bind(this, 'didTimeChange'))
    this.set('audioElement', el);
  }),

  didTimeChange: function(){
    this.set('currentTime', Math.floor(this.get('audioElement.currentTime')));
  },

  didStartPlaying: function(){
    this.set('isPlaying', true);
  },

  didPause: function(){
    this.set('isPlaying', false);
  },

  play: function(song){
    this.set('song', song);
    this.set('audioElement.src', song.get('url'));
    this.get('audioElement').play();
  },

  pause: function(){
    this.get('audioElement').pause();
  },

  resume:function(){
    this.get('audioElement').play();
  },

  willDestroy: function(){
    this.get('audioElement').src = '';
  }

});
