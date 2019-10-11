import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  selectAll: false,
  
  onSelectAllChanged: observer('selectAll', function() {
    const selected = this.get('selectAll');
    this.get('model.endpoints').forEach((endpoint) => {
      endpoint.set('_selected', selected);
    });
  }),
  
  onSelectedChanged: observer('model.endpoints.@each._selected', function() {
    const numSelected = this.get('selectedEndpoints.length');
    const numTotal = this.get('model.endpoints.length');
    if (numSelected == 0) {
      this.set('selectAll', false);
    } else if (numSelected == numTotal) {
      this.set('selectAll', true);
    }
  }),
  
  selectedEndpoints: computed('model.endpoints.@each._selected', function() {
    return this.get('model.endpoints').filterBy('_selected',true);
  }),
  
  actions: {
    bulkDelete(endpoints) {
      endpoints.forEach((endpoint) => {
        endpoint.destroyRecord().then(() => {
          this.notify.info('Endpoint deleted');
        }).catch((reason) => {
          this.notify.error(reason.errors[0].detail);
        });
      });
    }
  }
});
