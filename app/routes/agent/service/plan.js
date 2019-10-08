import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('agent', this.modelFor('agent'));
  },
  deactivate() {
    this.modelFor('agent.service.plan').rollbackAttributes();
  }
});
