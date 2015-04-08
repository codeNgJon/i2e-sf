import Ember from 'ember';
import DS from 'ember-data';
var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: hasMany('song'),


//you can use ember computed properties for these functions

//ember uses get and set to retrieve object property values in this case from the album which has many songs
//ember computed has properties we can use like @each, mapBy, sum ,etc

  // totalDuration: Ember.computed('songs.@each.duration',function(){
  //   return this.get('songs').reduce(function(sum, song){
  //     return sum + song.get('duration');
  //   }, 0);
  // }),

  // this is the equivalent of the totalDuration code above using ember computed methods mapBy and sum
  duration: Ember.computed.mapBy('songs', 'duration'),
  totalDuration: Ember.computed.sum('duration'),

  // songCount: Ember.computed('songs.length',function(){
  //   return this.get('songs').length;
  // })

  //this is the equivalent to the above songCount by using the Ember computed property alias
  songCount: Ember.computed.alias('songs.length')


});



