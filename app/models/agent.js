import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  serviceInstances: DS.hasMany('service-instance'),
  snapshots: DS.hasMany('snapshot'),
  createdBy: DS.belongsTo('user', {inverse:null}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
