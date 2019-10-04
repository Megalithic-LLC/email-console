import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | agents/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:agents/new');
    assert.ok(route);
  });
});
