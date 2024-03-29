import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | main-navbar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MainNavbar />`);
    assert.expect(0)

    // Template block usage:
    await render(hbs`
      <MainNavbar>
        template block text
      </MainNavbar>
    `);

    //assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
