'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Merchant extends Model {
  mobil(){
    return this.hasMany('App/Models/Mobil')
  }
}

module.exports = Merchant
