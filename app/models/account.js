import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  agent: DS.belongsTo('agent'),
  serviceInstance: DS.belongsTo('service-instance'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  first: DS.attr('string'),
  last: DS.attr('string'),
  displayName: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
