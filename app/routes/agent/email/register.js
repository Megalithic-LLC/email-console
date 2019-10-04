import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    const serviceInstance = this.modelFor('agent.email');
    const agent = this.modelFor('agent');
    return this.store.createRecord('email-account', {
      agent: agent,
      serviceInstance: serviceInstance
    });
  },
  deactivate() {
    this.modelFor('agent.email.register').rollbackAttributes();
  }
});
