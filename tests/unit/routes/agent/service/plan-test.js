import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | agent/service/plan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:agent/service/plan');
    assert.ok(route);
  });
});
