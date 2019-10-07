import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  notify: service(),
  afterModel() {
    this.notify.info('Email address confirmed!');
    this.transitionTo('login');
    ga('send', 'event', 'account', 'register', 'confirm-email page');
  },
  actions: {
    error() {
      this.notify.error('Link sent via welcome email is expired or has already been used');
      this.transitionTo('login');
    }
  }
});
