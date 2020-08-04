'use strict';

var Sincronizar = require('../model/sincronizarModel.js');
var Ot_finalizada = require('../model/ot_finalizadaModel.js');
var Materiales_ot = require('../model/materiales_otModel.js');
var Ot_finalizada_valor = require('../model/ot_finalizada_valorModel.js');
exports.list_all_Sincronizars = function(req, res) {
  Sincronizar.getAllSincronizar(function(err, Sincronizar) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Sincronizar);
    res.send(Sincronizar);
  });
};

exports.create_a_Sincronizar = function(req, res) {
  var new_Sincronizar = new Sincronizar(req.body);
  //console.log("---usuario:"+newSincronizar.usuario);
  //handles null error 
   if(false/*!new_Sincronizar.Sincronizar || !new_Sincronizar.status*/){
            res.status(400).send({ error:true, message: 'Please provide Sincronizar/status' });
        }
else{
  Sincronizar.createSincronizar(new_Sincronizar, function(err, Sincronizar) {

   if(new_Sincronizar.envio=='OT'){
      var new_Ot_finalizada  = new Ot_finalizada(new_Sincronizar.valor);

       new_Ot_finalizada.OT= new_Sincronizar.envio;
       var obj = JSON.parse(new_Sincronizar.valor);
       new_Ot_finalizada.fechainicio= obj.fechainicio;
       new_Ot_finalizada.fechafinalizo= obj.fechafinalizo;
       new_Ot_finalizada.idmotivofinaliza= obj.idmotivofinaliza;
       new_Ot_finalizada.lat= obj.lat;
       new_Ot_finalizada.lng= obj.lng;
       new_Ot_finalizada.altura= obj.altura;
       new_Ot_finalizada.estado= obj.estado;
       new_Ot_finalizada.t= obj.t;
       new_Ot_finalizada.fch= obj.fch;
    
       Ot_finalizada.createOt_Finalizada(new_Ot_finalizada, function(err, Ot_finalizada) {
          console.log("ot->ok");
       });
   }
   if(new_Sincronizar.tipo=='MATERIALES'){
      var new_Materiales_ot  = new Materiales_ot(new_Sincronizar.valor);
      var obj = JSON.parse(new_Sincronizar.valor);
      new_Materiales_ot.codigo=obj.codigo;
      new_Materiales_ot.ot=obj.ot;
      new_Materiales_ot.cantidad=obj.cantidad;
      new_Materiales_ot.usuario=obj.usuario;
      Materiales_ot.createMateriales_ot(new_Materiales_ot, function(err, Materiales_ot) {
        console.log("materiales->ok");
     });

   }
   if(new_Sincronizar.tipo=='PASOS'){

      var obj = JSON.parse(new_Sincronizar.valor);

      for (var i = 0; i < obj.data.length; i++) {
        var new_Ot_finalizada_valor  = new Ot_finalizada_valor(new_Sincronizar.valor);
        new_Ot_finalizada_valor.OT=new_Sincronizar.envio;
        new_Ot_finalizada_valor.valor=obj.data[i].valor;
        new_Ot_finalizada_valor.paso_id=obj.data[i].id_paso;

        Materiales_ot.createOt_finalizada_valor(new_Ot_finalizada_valor, function(err, Ot_finalizada_valor) {
          console.log("Ot_finalizada_valor->ok");
      
    });
    }
  }
    if (err)
      res.send(err);
    res.json(Sincronizar);
  });
  
}
};


exports.read_a_Sincronizar = function(req, res) {
  Sincronizar.getSincronizarById(req.params.SincronizarId, function(err, Sincronizar) {
    if (err)
      res.send(err);
    res.json(Sincronizar);
  });
};


exports.update_a_Sincronizar = function(req, res) {
  Sincronizar.updateById(req.params.SincronizarId, new Sincronizar(req.body), function(err, Sincronizar) {
    if (err)
      res.send(err);
    res.json(Sincronizar);
  });
};


exports.delete_a_Sincronizar = function(req, res) {


  Sincronizar.remove( req.params.SincronizarId, function(err, Sincronizar) {
    if (err)
      res.send(err);
    res.json({ message: 'Sincronizar successfully deleted' });
  });
};