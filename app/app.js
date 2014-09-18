import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'firebase-chaos', // TODO: loaded via config
  Resolver: Resolver
});

//App.ApplicationAdapter = DS.FirebaseAdapter.extend({
//	firebase: new Firebase('https://docs-examples.firebaseio.com/web/bindings/ember/blog')
//});

loadInitializers(App, 'firebase-chaos');

export default App;
