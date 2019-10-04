import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  agent: DS.belongsTo('agent'),
  name: DS.attr('string'),
  createdAt: DS.attr('date')
});
