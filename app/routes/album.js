import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // the album route specified which album model to use from the route that was chosen by setting a property on the params object which ember has available
    return this.store.find('album', params.album_id);
  }
});
