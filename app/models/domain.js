import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  agent: DS.belongsTo('agent'),
  serviceInstance: DS.belongsTo('service-instance'),
  name: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
