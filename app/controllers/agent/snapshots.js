import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  selectAll: false,
  
  onSelectAllChanged: observer('selectAll', function() {
    const selected = this.get('selectAll');
    this.get('agent.snapshots').filterBy('isNew', false).forEach((snapshot) => {
      snapshot.set('_selected', selected);
    });
  }),
  
  onSelectedChanged: observer('agent.snapshots.@each._selected', function() {
    const numSelected = this.get('selectedSnapshots.length');
    const numTotal = this.get('snapshotCount');
    if (numSelected == 0) {
      this.set('selectAll', false);
    } else if (numSelected == numTotal) {
      this.set('selectAll', true);
    }
  }),
  
  selectedSnapshots: computed('agent.snapshots.@each._selected', function() {
    return this.get('agent.snapshots').filterBy('_selected',true);
  }),
    
  snapshotCount: computed('agent.snapshots.@each.isNew', function() {
    return this.get('agent.snapshots').filterBy('isNew', false).length;
  }),
  
  actions: {
    bulkDelete(snapshots) {
      snapshots.forEach((snapshot) => {
        if (snapshot.isNew) {
          return;
        }
        snapshot.destroyRecord().then(() => {
          this.notify.info('Snapshot deleted');
        }).catch((reason) => {
          this.notify.error(reason.errors[0].detail);
        });
      });
    },
    takeSnapshot(agent) {
      agent.save().then(() => {
        this.notify.info('Snapshot started');
        
        // Reload "new snapshot" model
        this.transitionToRoute('agent').then(() => this.transitionToRoute('agent.snapshots'));
        
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
