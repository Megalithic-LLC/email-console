import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  selectAll: false,
  
  onSelectAllChanged: observer('selectAll', function() {
    const selected = this.get('selectAll');
    this.get('model.domains').forEach((domain) => {
      domain.set('_selected', selected);
    });
  }),
  
  onSelectedChanged: observer('model.domains.@each._selected', function() {
    const numSelected = this.get('selectedDomains.length');
    const numTotal = this.get('model.domains.length');
    if (numSelected == 0) {
      this.set('selectAll', false);
    } else if (numSelected == numTotal) {
      this.set('selectAll', true);
    }
  }),
  
  selectedDomains: computed('model.domains.@each._selected', function() {
    return this.get('model.domains').filterBy('_selected',true);
  }),
  
  actions: {
    bulkDelete(domains) {
      domains.forEach((domain) => {
        domain.destroyRecord().then(() => {
          this.notify.info('Domain deleted');
        }).catch((reason) => {
          this.notify.error(reason.errors[0].detail);
        });
      });
    }
  }
});
