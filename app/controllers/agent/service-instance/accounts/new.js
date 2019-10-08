import Controller from '@ember/controller';
import { observer } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  
  onFirstOrLastNameChanged: observer('model.first', 'model.last', function() {
    this.updateDisplayName();
  }),
  
  onNameChanged: observer('model.name', function() {
    const name = this.get('model.name');
    let email = this.get('model.email');
    if (!email) {
      email = name + '@';
    } else {
      const atIndex = email.indexOf('@');
      if (atIndex === -1) {
        email = name + '@';
      } else {
        email = name + email.substr(atIndex);
      }
    }
    if (name) {
      this.set('model.email', email);
    }
  }),
  
  updateDisplayName: function() {
    const first = this.get('model.first');
    const last = this.get('model.last');
    if (first && last) {
      this.set('model.displayName', first + ' ' + last);
    } else if (first) {
      this.set('model.displayName', first);
    } else if (last) {
      this.set('model.displayName', last);
    } else {
      this.set('model.displayName', null);
    }
  },
  
  actions: {
    save(account) {
      account.save().then(() => {
        this.notify.info('Account successfully created');
        this.transitionToRoute('agent.service-instance.accounts');
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
