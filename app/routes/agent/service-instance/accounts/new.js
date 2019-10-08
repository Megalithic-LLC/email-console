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
  setupController(controller, model) {
    controller.set('model', model);
    const allDomains = this.store.findAll('domain');
    controller.set('allDomains', allDomains);
    allDomains.then((allDomains) => {
      if (allDomains.get('length') > 0) {
        model.set('email', '@' + allDomains.firstObject.get('name'));
      }
    });
  },
  deactivate() {
    this.modelFor('agent.service-instance.accounts.new').rollbackAttributes();
  }
});
