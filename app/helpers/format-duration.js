import Ember from 'ember';

export function formatDuration(seconds){
  var minutes = Math.floor(seconds/60);
  var remaining = seconds % 60;
  if(remaining < 10){
    remaining = '0' + remaining;
  }
  return minutes + ':' + remaining;
};

export default Ember.HTMLBars.makeBoundHelper(formatDuration);

