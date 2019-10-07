import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  first: DS.attr('string'),
  last: DS.attr('string'),
  email: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr('string')
});
