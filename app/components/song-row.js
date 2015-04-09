import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  player: Ember.inject.service(),
  //this component is independent of the service, all it cares about is whether the song in this component is whether a song is playing in the service and whether that song is the same as the one in the component

  //this computed property tests whether there is a song playing (from the service) and whether that song is the current song
  isPlaying: Ember.computed('player.isPlaying', 'isCurrentSong', function(){
    return this.get('player.isPlaying') && this.get('isCurrentSong');
  }),

  classNameBindings: ['isCurrentSong'],
  //this computed property method tests whether the song that is stored in the service player is the same as the one this component is getting as 'current song'
  isCurrentSong: Ember.computed('player.song', function(){
    return this.get('player.song') === this.get('song');
  }),

  actions:{
    toggle: function(){
      var player = this.get('player');
      var song = this.get('song');
      this.get('isPlaying') ? player.pause() : player.play(song);
    }
  }

});
