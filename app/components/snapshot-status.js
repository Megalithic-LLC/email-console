import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  reloadModel: task(function * () {
    let snapshot = this.get('snapshot');
    if (!snapshot) {
      return;
    }
    while (true) {
      if (snapshot.get('progress') == 100) {
        break;
      }
      if (snapshot.isLoaded) {
        snapshot.reload();
      }
      yield timeout(1000);
    }
  }).on('init').restartable()
});
