import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('agent', {path:'/agent/:agent_id'}, function() {
    this.route('service-instance', {path:'/service-instance/:service_instance_id'}, function() {
        this.route('accounts', function() {
          this.route('new');
        });
      }
    );
    this.route('service', {path:'/service/:service_id'}, function() {
      this.route('plan', {path:'/plan/:plan_id'});
    });
    this.route('services');
    this.route('snapshot');
  });
  this.route('agents', function() {
    this.route('new');
  });
  this.route('confirm-email', {path:'/confirm-email/:confirm_email_id'});
  this.route('login');
  this.route('register');
  this.route('services');
});

export default Router;
