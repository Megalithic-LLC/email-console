import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  selectAll: false,
  
  onSelectAllChanged: observer('selectAll', function() {
    const selected = this.get('selectAll');
    this.get('model.serviceInstances').forEach((serviceInstance) => {
      serviceInstance.set('_selected', selected);
    });
  }),
  
  onSelectedChanged: observer('model.serviceInstances.@each._selected', function() {
    const numSelected = this.get('selectedServiceInstances.length');
    const numTotal = this.get('model.serviceInstances.length');
    if (numSelected == 0) {
      this.set('selectAll', false);
    } else if (numSelected == numTotal) {
      this.set('selectAll', true);
    }
  }),
  
  selectedServiceInstances: computed('model.serviceInstances.@each._selected', function() {
    return this.get('model.serviceInstances').filterBy('_selected',true);
  }),
  
  actions: {
    bulkDelete(serviceInstances) {
      serviceInstances.forEach((serviceInstance) => {
        serviceInstance.destroyRecord().then(() => {
          this.notify.info('Service instance de-provisioned');
        }).catch((reason) => {
          this.notify.error(reason.errors[0].detail);
        });
      });
    }
  }
});
