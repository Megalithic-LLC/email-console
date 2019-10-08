import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    const serviceInstance = this.modelFor('agent.service-instance');
    const agent = this.modelFor('agent');
    return this.store.createRecord('account', {
      agent: agent,
      serviceInstance: serviceInstance
    });
  },
  deactivate() {
    this.modelFor('agent.service-instance.accounts.new').rollbackAttributes();
  }
});
