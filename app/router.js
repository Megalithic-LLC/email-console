import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('agent', {path:'/agent/:agent_id'}, function() {
    this.route('accounts', function() {
      this.route('new');
    });
    this.route('domains', function() {
      this.route('new');
    });
    this.route('endpoints', function() {
      this.route('new');
    });
    this.route('snapshots');
  });
  this.route('agents', function() {
    this.route('new');
  });
  this.route('api-keys', function() {
    this.route('new');
  });
  this.route('confirm-email', {path:'/confirm-email/:confirm_email_id'});
  this.route('login');
  this.route('register');
  this.route('snapshots');
});

export default Router;
