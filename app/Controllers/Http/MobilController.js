'use strict'
const Mobil=use('App/Models/Mobil')

class MobilController {
  async index({response}){
    let mobil=await Mobil.query().with('merchant','cicilan').fetch()

    let datajson={}
    datajson.data=mobil
    datajson.kode=200

    return response.json(datajson)
  }
  async store({request,response}){
    let req=request.all()

    let mobil=await Mobil.create(req)


    let datajson={}
    datajson.data=mobil
    datajson.kode=200

    return response.json(datajson)
  }
  async show({params,response}){
    let id=params.id
    let mobil=await Mobil.query().with('merchant','cicilan').where('id',id).fetch()

    let datajson={}
    datajson.data=mobil
    datajson.kode=200

    return response.json(datajson)

  }
  async update({params,request,response}){
    let id=params.id
    let req=request.all()
    await Mobil.query().where('id',id).update(req)
    let mobil=await Mobil.find(id)

    let datajson={}
    datajson.data=mobil
    datajson.kode=200

    return response.json(datajson)

  }
  async delete({params,response}){
    let id=params.id
    let req=request.all()
    await Mobil.query().where('id',id).update(req)
    let mobil=await Mobil.find(id)

    let datajson={}
    datajson.data=mobil
    datajson.kode=200

    return response.json(datajson)

}


module.exports = MobilController

