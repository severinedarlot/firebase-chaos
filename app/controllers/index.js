import Ember from 'ember';

export default Ember.ArrayController.extend({
  newTodo: '',

  actions: {
    submitTodo: function (label) {
      var todo = this.store.createRecord('todo', {
        label: label
      });
      console.log('Submit', todo.get('label'));
      this.set('newTodo', '')
    }
  }
});
