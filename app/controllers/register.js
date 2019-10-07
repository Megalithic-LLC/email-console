import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  session: service(),
  
  actions: {
    register(user) {
      user.save().then(() => {
        this.notify.info('Registration saved; check your email and click on the confirmation');
        this.transitionToRoute('login');
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
