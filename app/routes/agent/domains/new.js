import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    const agent = this.modelFor('agent');
    return this.store.createRecord('domain', {
      agent: agent,
    });
  },
  deactivate() {
    this.modelFor('agent.domains.new').rollbackAttributes();
  }
});
