import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    const agent = this.modelFor('agent');
    return this.store.createRecord('endpoint', {
      agent: agent,
      protocol: 'imap',
      type: 'tcp'
    });
  },
  deactivate() {
    this.modelFor('agent.endpoints.new').rollbackAttributes();
  }
});
