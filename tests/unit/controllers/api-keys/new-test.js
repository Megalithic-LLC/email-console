import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | api-keys/new', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:api-keys/new');
    assert.ok(controller);
  });
});
