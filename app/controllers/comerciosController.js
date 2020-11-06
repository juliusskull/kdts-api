'use strict';

var Comercios = require('../model/comerciosModel.js');

exports.list_all_Comercioss = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Comercios successfully' });
  
  Comercios.getAllComercios(function(err, Comercios) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Comercios);
    res.send(Comercios);
  });
  
};



exports.create_a_Comercios = function(req, res) {
  var new_Comercios = new Comercios(req.body);

  //handles null error 
  /*
   if(!new_Comercios.Comercios || !new_Comercios.status){
            res.status(400).send({ error:true, message: 'Please provide Comercios/status' });
        }
else{
  */
  Comercios.createComercios(new_Comercios, function(err, Comercios) {
    
    if (err)
      res.send(err);
    res.json(Comercios);
  });
//}
};


exports.read_a_Comercios = function(req, res) {
  Comercios.getComerciosById(req.params.id, function(err, Comercios) {
    if (err)
      res.send(err);
    res.json(Comercios);
  });
};
exports.read_a_Comercios_usuario = function(req, res) {
  Comercios.getComerciosByUsuario(req.params.legajo, function(err, Comercios) {
    if (err)
      res.send(err);
      var send={status:'success',
      'code':  200,
      'msg':  'ok',
      'tComerciosal_items':0,
      'pagina_actual' : 1,
      'item_por_pagina' :1,
       'tComerciosal_paginas' :1,      
      'data':Comercios};  
    res.json(send);
  });
};

exports.update_a_Comercios = function(req, res) {
  Comercios.updateById(req.params.id, new Comercios(req.body), function(err, Comercios) {
    if (err)
      res.send(err);
    res.json(Comercios);
  });
};


exports.delete_a_Comercios = function(req, res) {


  Comercios.remove( req.params.ComerciosId, function(err, Comercios) {
    if (err)
      res.send(err);
    res.json({ message: 'Comercios successfully deleted' });
  });
};