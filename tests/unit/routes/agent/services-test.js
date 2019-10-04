import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | agent/services', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:agent/services');
    assert.ok(route);
  });
});
