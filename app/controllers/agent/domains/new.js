import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),

  actions: {
    save(domain) {
      domain.save().then(() => {
        this.notify.info('Domain successfully created');
        this.transitionToRoute('agent.domains');
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
