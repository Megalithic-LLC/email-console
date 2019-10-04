import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('agent', {});
  },
  deactivate() {
    this.modelFor('agents.new').rollbackAttributes();
  }
});
