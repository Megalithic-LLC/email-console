import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | snapshot-status', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SnapshotStatus />`);
    assert.expect(0)

    //assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <SnapshotStatus>
        template block text
      </SnapshotStatus>
    `);

    //assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
