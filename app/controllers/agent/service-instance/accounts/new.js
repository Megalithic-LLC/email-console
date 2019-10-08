import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  actions: {
    save(account) {
      account.save().then(() => {
        this.notify.info('Account successfully created');
        this.transitionToRoute('agent.service-instance');
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
