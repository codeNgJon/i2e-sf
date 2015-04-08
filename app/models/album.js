import DS from 'ember-data';
var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: hasMany('song'),

  // totalDuration: function(){
  //   var songs = this.get('songs');
  //   var total = 0;
  //   songs.forEach(function(song){
  //     total += songs.get("duration");
  //   })
  //   return total;
  // }.property('songs.@each.duration')
  duration: Ember.computed.mapBy('songs', 'duration'),
  totalDuration: Ember.computed.sum('duration')
  // songCount: Ember.computed.sum('songs')
});



