import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | api-keys/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:api-keys/index');
    assert.ok(controller);
  });
});
