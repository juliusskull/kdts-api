'use strict';

var Productos = require('../model/productosModel.js');

exports.list_all_Productoss = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Productos successfully' });
  
  Productos.getAllProductos(function(err, Productos) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Productos);
    res.send(Productos);
  });
  
};

exports.list_all_ProductossApp = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Productos successfully' });
  
  Productos.getAllProductosApp(req.params.app,function(err, Productos) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Productos);
    res.send(Productos);
  });
  
};



exports.create_a_Productos = function(req, res) {
  var new_Productos = new Productos(req.body);

  //handles null error 
  /*
   if(!new_Productos.Productos || !new_Productos.status){

            res.status(400).send({ error:true, message: 'Please provide Productos/status' });

        }
else{
  */
  Productos.createProductos(new_Productos, function(err, Productos) {
    
    if (err)
      res.send(err);
    res.json(Productos);
  });
//}
};


exports.read_a_Productos = function(req, res) {
  Productos.getProductosById(req.params.ProductosId, function(err, Productos) {
    if (err)
      res.send(err);
    res.json(Productos);
  });
};
exports.read_a_Productos_usuario = function(req, res) {
  Productos.getProductosByUsuario(req.params.legajo, function(err, Productos) {
    if (err)
      res.send(err);
      var send={status:'success',
      'code':  200,
      'msg':  'ok',
      'tProductosal_items':0,
      'pagina_actual' : 1,
      'item_por_pagina' :1,
       'tProductosal_paginas' :1,      
      'data':Productos};  
    res.json(send);
  });
};

exports.update_a_Productos = function(req, res) {
  Productos.updateById(req.params.id, new Productos(req.body), function(err, Productos) {
    if (err)
      res.send(err);
    res.json(Productos);
  });
};


exports.delete_a_Productos = function(req, res) {


  Productos.remove( req.params.ProductosId, function(err, Productos) {
    if (err)
      res.send(err);
    res.json({ message: 'Productos successfully deleted' });
  });
};
