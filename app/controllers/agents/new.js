import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  actions: {
    claimAgent(agent) {
      agent.save().then(() => {
        this.notify.info('Agent claimed');
        this.transitionToRoute('agent', agent);
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
