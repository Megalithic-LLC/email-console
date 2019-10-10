import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  agent: DS.belongsTo('agent'),
  serviceInstance: DS.belongsTo('service-instance'),
  protocol: DS.attr('string'),
  type: DS.attr('string'),
  port: DS.attr('number'),
  path: DS.attr('string'),
  enabled: DS.attr('boolean'),
  createdBy: DS.belongsTo('user', {inverse:null}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
