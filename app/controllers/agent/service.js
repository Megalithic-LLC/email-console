import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  safeLongDescription: computed('model.longDescription', function() {
    return htmlSafe(this.get('model.longDescription'));
  })
});
