'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Mobil extends Model {

  merchant(){
    return this.belongsTo("App/Models/Merchant")
  }
  cicilan(){
    return this.hasMany('App/Models/Cicilan')
  }
}

module.exports = Mobil
