import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  selectAll: false,
  
  onSelectAllChanged: observer('selectAll', function() {
    const selected = this.get('selectAll');
    this.get('model.accounts').forEach((account) => {
      account.set('_selected', selected);
    });
  }),
  onSelectedChanged: observer('model.accounts.@each._selected', function() {
    const numSelected = this.get('selectedAccounts').length;
    const numTotal = this.get('model.accounts.length');
    if (numSelected == 0) {
      this.set('selectAll', false);
    } else if (numSelected == numTotal) {
      this.set('selectAll', true);
    }
  }),
  selectedAccounts: computed('model.accounts.@each._selected', function() {
    return this.get('model.accounts').filterBy('_selected',true);
  }),
  actions: {
    bulkDelete(accounts) {
      accounts.forEach((account) => {
        account.destroyRecord().then(() => {
          this.notify.info('Account deleted');
        }).catch((reason) => {
          this.notify.error(reason.errors[0].detail);
        });
      });
    }
  }
});
