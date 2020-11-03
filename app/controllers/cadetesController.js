'use strict';

var Cadetes = require('../model/cadetesModel.js');

exports.list_all_Cadetess = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Cadetes successfully' });
  
  Cadetes.getAllCadetes(function(err, Cadetes) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Cadetes);
    res.send(Cadetes);
  });
  
};



exports.create_a_Cadetes = function(req, res) {
  var new_Cadetes = new Cadetes(req.body);

  //handles null error 
  /*
   if(!new_Cadetes.Cadetes || !new_Cadetes.status){

            res.status(400).send({ error:true, message: 'Please provide Cadetes/status' });

        }
else{
  */
  Cadetes.createCadetes(new_Cadetes, function(err, Cadetes) {
    
    if (err)
      res.send(err);
    res.json(Cadetes);
  });
//}
};


exports.read_a_Cadetes = function(req, res) {
  Cadetes.getCadetesById(req.params.CadetesId, function(err, Cadetes) {
    if (err)
      res.send(err);
    res.json(Cadetes);
  });
};
exports.read_a_Cadetes_usuario = function(req, res) {
  Cadetes.getCadetesByUsuario(req.params.legajo, function(err, Cadetes) {
    if (err)
      res.send(err);
      var send={status:'success',
      'code':  200,
      'msg':  'ok',
      'tCadetesal_items':0,
      'pagina_actual' : 1,
      'item_por_pagina' :1,
       'tCadetesal_paginas' :1,      
      'data':Cadetes};  
    res.json(send);
  });
};

exports.update_a_Cadetes = function(req, res) {
  Cadetes.updateById(req.params.CadetesId, new Cadetes(req.body), function(err, Cadetes) {
    if (err)
      res.send(err);
    res.json(Cadetes);
  });
};


exports.delete_a_Cadetes = function(req, res) {


  Cadetes.remove( req.params.CadetesId, function(err, Cadetes) {
    if (err)
      res.send(err);
    res.json({ message: 'Cadetes successfully deleted' });
  });
};
