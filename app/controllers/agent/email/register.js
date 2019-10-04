import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  actions: {
    register(emailAccount) {
      emailAccount.save().then(() => {
        this.notify.info('Email account successfully created');
        this.transitionToRoute('agent.email');
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
