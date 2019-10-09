import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    const agent = this.modelFor('agent');
    return this.store.createRecord('snapshot', {
      agent: agent,
      name: "snapshot-" + new Date().getTime()
    });
  },
  deactivate() {
    this.modelFor('agent.snapshots').rollbackAttributes();
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('agent', this.modelFor('agent'));
  }
});
