import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  actions: {
    save(apiKey) {
      apiKey.save().then(() => {
        this.notify.info('API Key saved');
        this.transitionToRoute('api-keys');
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});
