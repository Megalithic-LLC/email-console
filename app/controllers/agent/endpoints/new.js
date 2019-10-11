import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  
  actions: {
    save(endpoint) {
      endpoint.save().then(() => {
        this.notify.info('Endpoint successfully created');
        this.transitionToRoute('agent.endpoints');
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
