import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let agent = this.store.createRecord('agent', {});
    this.store.findRecord('plan', 'bkitl52ck4q0017oe4qg').then((freePlan) => {
      agent.set('plan', freePlan);
    });
    return agent;
  },
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('allPlans', this.store.findAll('plan'));
  },
  deactivate() {
    this.modelFor('agents.new').rollbackAttributes();
  }
});
