import DS from 'ember-data';
var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: hasMany('song'),
//ember uses get and set to retrieve object property values in this case from the album which has many songs
//ember computed has properties we can use like @each, mapBy, sum ,etc
  totalDuration: Ember.computed('songs.@each.duration',function(){
    return this.get('songs').reduce(function(sum, song){
      return sum + song.get('duration');
    }, 0);
  }),

  songCount: Ember.computed('songs.@each',function(){
    return this.get('songs').length;
  })

  // this is the equivalent of the totalDuration code above using ember computed methods
  // duration: Ember.computed.mapBy('songs', 'duration'),
  // totalDuration: Ember.computed.sum('duration')
});



