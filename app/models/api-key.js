import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  key: DS.attr('string'),
  description: DS.attr('string'),
  createdBy: DS.belongsTo('user', {inverse:null}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
