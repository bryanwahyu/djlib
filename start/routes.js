'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.put('penjual/:id','MerchantController.update')
  Route.post('penjual', 'MerchantController.store')
  Route.get('penjual','MerchantController.index')
  Route.get('penjual/:id','MerchantController.show')
  Route.delete('penjual/:id','MerchantController.destroy')

  Route.post('mobil','MobilController.store')
  Route.get('mobil','MobilController.index')
  Route.put('mobil/:id','MobilController.update')
  Route.get('mobil/:id','MobilController.show')
  Route.delete('mobil/:id','MobilController.delete')

  Route.post('cicilan/:id','CicilanController.store')
  Route.get('cicilan','CicilanController.index')
  Route.put('cicilan/:id','CicilanController.update')
  Route.delete('cicilan/:id','CicilanController.delete')
  Route.get('cicilan/bayar/:id/:jumlah','CicilanController.bayarCicilan')

}).prefix('api/v1')
