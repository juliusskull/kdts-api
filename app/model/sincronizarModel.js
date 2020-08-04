'user strict';
var sql = require('../db.js');

//Sincronizar object constructor
var Sincronizar = function(Sincronizar){
    /*
    this.Sincronizar = Sincronizar.Sincronizar;
    this.status = Sincronizar.status;
    this.created_at = new Date();
*/
    this.envio= Sincronizar.envio;
    this.tipo= Sincronizar.tipo;
    this.valor= Sincronizar.valor;
    this.lat= Sincronizar.lat;
    this.lng= Sincronizar.lng;
    this.fchalta= Sincronizar.fchalta;
    this.usuario= Sincronizar.usuario;
    this.imei= Sincronizar.imei;
    this.precision= Sincronizar.precision;
    this.gps= Sincronizar.gps;
    this.red= Sincronizar.red;
    this.version= Sincronizar.version;
    this.aplicacion= Sincronizar.aplicacion;
    this.actualizada= Sincronizar.actualizada;


};
Sincronizar.createSincronizar = function (newSincronizar, result) {
     
        sql.query("INSERT INTO Sincronizar set ?", newSincronizar, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });

};
Sincronizar.getSincronizarById = function (SincronizarId, result) {
        sql.query("Select id from Sincronizar where nro_Sincronizar = ? ", SincronizarId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Sincronizar.getAllSincronizar = function (result) {
        sql.query("Select * from Sincronizar", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Sincronizars : ', res);  

                 result(null, res);
                }
            });   
};
Sincronizar.updateById = function(id, Sincronizar, result){
  sql.query("UPDATE Sincronizar SET nro_Sincronizar = ? WHERE id = ?", [Sincronizar.Sincronizar, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Sincronizar.remove = function(id, result){
     sql.query("DELETE FROM Sincronizar WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Sincronizar;