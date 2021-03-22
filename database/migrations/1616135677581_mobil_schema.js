'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MobilSchema extends Schema {
  up () {
    this.create('mobils', (table) => {
      table.increments()
      table.string('jenis')
      table.string('nama')
      table.integer('merchant_id')
      table.bigInteger('dp_awal')
      table.integer('tenor')
      table.bigInteger('harga')
      table.text('deskripsi')
      table.timestamps()
    })
  }

  down () {
    this.drop('mobils')
  }
}

module.exports = MobilSchema
