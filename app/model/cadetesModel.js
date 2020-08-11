'user strict';
var sql = require('../db.js');

//Cadetes object constructor
var Cadetes = function(Cadetes){
    this.usuario = Cadetes.usuario;
    this.id_comercio = Cadetes.id_comercio;
    this.fchalta = Cadetes.fchalta;
};
Cadetes.createCadetes = function (newCadetes, result) {    
        sql.query("INSERT INTO cadetes set ?", newCadetes, function (err, res) {
            console.log("error: -----------");
                if(err) {
                    console.log("error: "+ err.message, err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Cadetes.getCadetesById = function (CadetesId, result) {
        sql.query("Select id from Cadetes where id = ? ", CadetesId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Cadetes.getAllCadetes = function (result) {
        sql.query("Select * from cadetes", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Cadetess : ', res);  

                 result(null, res);
                }
            });   
};
Cadetes.updateById = function(id, Cadetes, result){
  sql.query("UPDATE cadetes SET nro_Cadetes = ? WHERE id = ?", [Cadetes.Cadetes, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Cadetes.remove = function(id, result){
     sql.query("DELETE FROM cadetes WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Cadetes;