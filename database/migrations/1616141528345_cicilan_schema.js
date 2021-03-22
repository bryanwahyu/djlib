'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CicilanSchema extends Schema {
  up () {
    this.create('cicilans', (table) => {
      table.increments()
      table.bigInteger('mobil_id').unsigned()
      table.foreign('mobil_id').references('id').inTable('mobils').onDelete('cascade')
      table.string('nama')
      table.integer('pembayaran').default(1)
      table.bigInteger('total_pembayaran')
      table.integer('jumlah_tenor')
      table.bigInteger('jumlah')
      table.timestamps()
    })
  }

  down () {
    this.drop('cicilans')
  }
}

module.exports = CicilanSchema
