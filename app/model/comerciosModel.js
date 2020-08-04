'user strict';
var sql = require('../db.js');

//Comercios object constructor
var Comercios = function(Comercios){
    this.usuario = Comercios.usuario;
    this.descripcion = Comercios.descripcion;
    this.fchalta = Comercios.fchalta;
};
Comercios.createComercios = function (newComercios, result) {    
        sql.query("INSERT INTO comercios set ?", newComercios, function (err, res) {
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
Comercios.getComerciosById = function (ComerciosId, result) {
        sql.query("Select id from comercios where id = ? ", ComerciosId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Comercios.getAllComercios = function (result) {
        sql.query("Select * from comercios", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Comercioss : ', res);  

                 result(null, res);
                }
            });   
};
Comercios.updateById = function(id, Comercios, result){
  sql.query("UPDATE comercios SET nro_Comercios = ? WHERE id = ?", [Comercios.Comercios, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Comercios.remove = function(id, result){
     sql.query("DELETE FROM comercios WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Comercios;