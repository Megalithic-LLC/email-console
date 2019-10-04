import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  afterModel(model) {
    if (model.get('plans.length') > 0) {
      this.transitionTo('agent.service.plan', model.get('plans.firstObject'));
    }
  }
});
