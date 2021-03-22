'use strict'

const Mobil=use('App/Models/Mobil')
const Cicilan=use('App/Models/Cicilan')
class CicilanController {
  async store({request,params,response}){
      let id=params.id
      let req=request.all()
      let mobil=await Mobil.find(id)

      let cicilan=new Cicilan
      cicilan.nama=req.nama
      cicilan.mobil_id=mobil.id
      cicilan.total_pembayaran=mobil.harga
      cicilan.jumlah_tenor=mobil.tenor
      cicilan.jumlah=mobil.harga
      await  cicilan.save()

      let datajson={}
      datajson.data=cicilan
      datajson.kode=200

      return response.json(datajson)

    }
  async index({response}){
    let cicilan = await Cicilan.query().with('mobil.merchant').fetch()

    let datajson={}
    datajson.data=cicilan
    datajson.kode=200

    return response.json(datajson)

  }
  async bayarCicilan({params,response}){
    let id=params.id
    let jumlah=params.jumlah
    let cicilan= await Cicilan.find(id)
    let jumlahcicilan=(cicilan.jumlah-cicilan.total_pembayaran)/(cicilan.jumlah_tenor-cicilan.pembayaran)
    let bayar=jumlahcicilan*jumlah
    cicilan.total_pembayaran=cicilan.total_pembayaran+jumlah
    cicilan.pembayaran=cicilan.pembayaran+bayar
    await cicilan.save()

    let datajson={}
    datajson.data=cicilan
    datajson.kode=200

    return response.json(datajson)
  }

  async update({response,request,params}){
    let id=params.id
    let req=request.all()
    await Cicilan.query().where('id',id).update(req)
    let cicilan=await Cicilan.find(id)

    let datajson={}
    datajson.data=cicilan
    datajson.kode=200

    return response.json(datajson)

  }
  async delete({response,params}){
    let id=params.id
    let cicilan=await cicilan.find(id)
    await cicilan.delete()

    let datajson={}
    datajson.kode=200

    return response.json(datajson)
  }
}

module.exports = CicilanController
