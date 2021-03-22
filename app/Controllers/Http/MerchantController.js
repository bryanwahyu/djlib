'use strict'
const Merchant=use('App/Models/Merchant')

class MerchantController {
  async store({request,response}){
    let req=request.all()
    let penjual= await Merchant.create(req)

    let datajson={}
    datajson.data=penjual
    datajson.kode=200

    return response.status(200).json(datajson)
  }
  async update({request,response,params}){
    let req=request.all()
    const id=params.id

    await Merchant.query().where('id',id).update(req)

    let penjual=await Merchant.find(id)

    let datajson={}
    datajson.data=penjual
    datajson.kode=200

    return response.json(datajson)
  }
  async show({params,response}){
    let id=params.id
    let penjual=await Merchant.find(id)

    let datajson={}
    datajson.data=penjual
    datajson.kode=200

    return response.json(datajson)

  }
  async index({response}){
    let penjual=await Merchant.query().with('mobil.cicilan').fetch()

    let datajson={}
    datajson.data=penjual
    datajson.kode=200

    return response.json(datajson)

  }
  async destroy({params,response}){
    let id=params.id
    let penjual=await Merchant.find(id)
     await penjual.delete()

    let datajson={}
    datajson.kode=200

    return response.json(datajson)

  }
}

module.exports = MerchantController
