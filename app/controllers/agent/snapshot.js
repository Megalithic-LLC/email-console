import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  snapshotCount: computed('agent.snapshots.@each.isNew', function() {
    return this.get('agent.snapshots').filterBy('isNew', false).length;
  }),
  actions: {
    takeSnapshot(agent) {
      agent.save().then(() => {
        this.notify.info('Snapshot started');
        
        // Reload "new snapshot" model
        this.transitionToRoute('agent').then(() => this.transitionToRoute('agent.snapshot'));
        
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
