import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | agent/snapshot', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:agent/snapshot');
    assert.ok(route);
  });
});
