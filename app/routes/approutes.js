'use strict';
module.exports = function(app) {
  
  var jwt = require('jsonwebtoken');
  const fileUpload = require('express-fileupload')
  
  var todoList = require('../controllers/appController');
  
  var otList = require('../controllers/otController');
  
  var sincronizarList = require('../controllers/sincronizarController');
  var usuarioList = require('../controllers/usuarioController');
  var comercioList = require('../controllers/comerciosController');
  var seguridad = require('../controllers/seguridadController');
  var upload = require('../controllers/uploadController');
  var creador1 = require('../controllers/creador1Controller');
  
  app.use(fileUpload());
  // todoList Routes
  app.route('/creador1')
    .get(creador1.list_all_Creador1s)
    .post(creador1.create_a_Creador1);

    app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
   
  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
  
    app.route('/ot')
    .get(otList.list_all_OTs)
    .post(otList.list_all_OTs);

    app.route('/ot/legajo/:legajo')
    .get(otList.read_a_OT_usuario)
    
    app.route('/sincronizar')
    .get(sincronizarList.list_all_Sincronizars)
    .post(sincronizarList.create_a_Sincronizar);
    
    app.route('/usuario')
    .get(usuarioList.list_all_Usuarios)
    .post(usuarioList.create_a_Usuario)
    .delete(usuarioList.delete_a_Usuario);

    app.route('/comercios')
    .get(comercioList.list_all_Comercioss)
    .post(comercioList.create_a_Comercios);

    app.route('/usuario/:UsuarioId')
    .get(usuarioList.read_a_Usuario)
    .delete(usuarioList.delete_a_Usuario);

    app.route('/login')
    .post(seguridad.login);

    app.route('/secure')
    .get(seguridad.secure);

    app.route('/upload')
    .post(upload.subir_archivo);
    

    app.post('/upload',(req,res) => {
    let EDFile = req.files.file;
    EDFile.mv(`./files/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
      })
    });
    
  };