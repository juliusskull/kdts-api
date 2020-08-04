'use strict';

var Creador1 = require('../model/creador1Model.js');

exports.list_all_Creador1s = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Creador1 successfully' });
  
  Creador1.getAllCreador1(function(err, Creador1) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Creador1);
    //res.send(Creador1);

    var send={status:'success',     
      'data':Creador1};  
      
    res.send(send);

  });
  
};



exports.create_a_Creador1 = function(req, res) {
  var new_Creador1 = new Creador1(req.body);

  //handles null error 
   if(!new_Creador1.Creador1 || !new_Creador1.status){

            res.status(400).send({ error:true, message: 'Please provide Creador1/status' });

        }
else{
  
  Creador1.createCreador1(new_Creador1, function(err, Creador1) {
    
    if (err)
      res.send(err);
    res.json(Creador1);
  });
}
};


exports.read_a_Creador1 = function(req, res) {
  Creador1.getCreador1ById(req.params.Creador1Id, function(err, Creador1) {
    if (err)
      res.send(err);
    res.json(Creador1);
  });
};


exports.update_a_Creador1 = function(req, res) {
  Creador1.updateById(req.params.Creador1Id, new Creador1(req.body), function(err, Creador1) {
    if (err)
      res.send(err);
    res.json(Creador1);
  });
};


exports.delete_a_Creador1 = function(req, res) {


  Creador1.remove( req.params.Creador1Id, function(err, Creador1) {
    if (err)
      res.send(err);
    res.json({ message: 'Creador1 successfully deleted' });
  });
};
