import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  agent: DS.belongsTo('agent'),
  name: DS.attr('string'),
  progress: DS.attr('number'),
  size: DS.attr('number'),
  createdBy: DS.belongsTo('user', {inverse:null}),
  createdAt: DS.attr('date')
});
