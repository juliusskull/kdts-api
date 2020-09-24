'use strict';

var OT = require('../model/otModel.js');

exports.list_all_OTs = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'OT successfully' });
  
  OT.getAllOT(function(err, OT) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', OT);
    res.send(OT);
  });
  
};



exports.create_a_OT = function(req, res) {
  var new_OT = new OT(req.body);

  //handles null error 
  /*
   if(!new_OT.OT || !new_OT.status){

            res.status(400).send({ error:true, message: 'Please provide OT/status' });

        }
else{
  */
  OT.createOT(new_OT, function(err, OT) {
    
    if (err)
      res.send(err);
    res.json(OT);
  });
//}
};


exports.read_a_OT = function(req, res) {
  OT.getOTById(req.params.OTId, function(err, OT) {
    if (err)
      res.send(err);
    res.json(OT);
  });
};
exports.read_a_OT_usuario = function(req, res) {
  OT.getOTByUsuario(req.params.legajo, function(err, OT) {
    if (err)
      res.send(err);
      var send={status:'success',
      'code':  200,
      'msg':  'ok',
      'total_items':0,
      'pagina_actual' : 1,
      'item_por_pagina' :1,
       'total_paginas' :1,      
      'data':OT};  
    res.json(send);
  });
};

exports.update_a_OT = function(req, res) {
  OT.updateById(req.params.OTId, new OT(req.body), function(err, OT) {
    if (err)
      res.send(err);
    res.json(OT);
  });
};


exports.delete_a_OT = function(req, res) {


  OT.remove( req.params.OTId, function(err, OT) {
    if (err)
      res.send(err);
    res.json({ message: 'OT successfully deleted' });
  });
};
