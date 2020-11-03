'use strict';

var Usuario = require('../model/usuarioModel.js');

exports.list_all_Usuarios = function(req, res) {
  Usuario.getAllUsuario(function(err, Usuario) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Usuario);
    res.send(Usuario);
  });
};

exports.create_a_Usuario = function(req, res) {
  var new_Usuario = new Usuario(req.body);

  //handles null error 
   if(!new_Usuario.usuario){

            res.status(400).send({ error:true, message: 'Please provide Usuario/status' });

     }else{
  
  Usuario.createUsuario(new_Usuario, function(err, Usuario) {
    
    if (err)
      res.send(err);
    res.json(Usuario);
  });
}
};

exports.read_a_Usuario = function(req, res) {
  Usuario.getUsuarioById(req.params.UsuarioId, function(err, Usuario) {
    if (err)
      res.send(err);
    res.json(Usuario);
  });
};


exports.update_a_Usuario = function(req, res) {
  Usuario.updateById(req.params.UsuarioId, new Usuario(req.body), function(err, Usuario) {
    if (err)
      res.send(err);
    res.json(Usuario);
  });
};

exports.is_Usuario = function(req, res) {
  Usuario.isUsuario( new Usuario(req.body), function(err, Usuario) {
    if (err)
      res.send(err);
    res.json(Usuario);
  });
};

exports.delete_a_Usuario = function(req, res) {

  Usuario.remove( req.params.UsuarioId, function(err, Usuario) {
    if (err)
      res.send(err);
    res.json({ message: 'Usuario successfully deleted' });
  });
};