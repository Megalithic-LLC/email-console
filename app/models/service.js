import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  displayName: DS.attr('string'),
  description: DS.attr('string'),
  longDescription: DS.attr('string'),
  imageUrl: DS.attr('string'),
  plans: DS.hasMany('plan')
});
