import Ember from 'ember';

export default Ember.Component.extend({
  player: Ember.inject.service(),


  actions:{
    play: function(){
      // var current = this.get('player').song
      // this.get('player').play(current);
      this.get('player').resume();
    },
    // Ember.computed.alias('player.play'),
    pause: function(){
      this.get('player').pause();
    }
   // Ember.computed.alias('player.pause')
 }

});
