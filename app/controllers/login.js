import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  session: service(),
  
  actions: {
    authenticate() {
      const credentials = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:jwt', credentials).catch((reason) => {
        this.notify.error(reason.statusText);
      });
    }
  }
});
