import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  selectAll: false,
  
  onSelectAllChanged: observer('selectAll', function() {
    const selected = this.get('selectAll');
    this.get('model').forEach((apiKey) => {
      apiKey.set('_selected', selected);
    });
  }),
  
  onSelectedChanged: observer('model.@each._selected', function() {
    const numSelected = this.get('selectedApiKeys.length');
    const numTotal = this.get('model.length');
    if (numSelected == 0) {
      this.set('selectAll', false);
    } else if (numSelected == numTotal) {
      this.set('selectAll', true);
    }
  }),
  
  selectedApiKeys: computed('model.@each._selected', function() {
    return this.get('model').filterBy('_selected',true);
  }),
  
  actions: {
    bulkDelete(apiKeys) {
      apiKeys.forEach((apiKey) => {
        apiKey.destroyRecord().then(() => {
          this.notify.info('API Key deleted');
        }).catch((reason) => {
          this.notify.error(reason.errors[0].detail);
        });
      });
    }
  }
});
