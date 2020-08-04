'user strict';
var sql = require('../db.js');

var Ot_Finalizada = function(Ot_Finalizada){
    /*this.id_Ot_Finalizada= Ot_Finalizada.id_Ot_Finalizada;*/
    this.OT= Ot_Finalizada.OT;
    this.fechainicio= Ot_Finalizada.fechainicio;
    this.fechafinalizo= Ot_Finalizada.fechafinalizo;
    this.idmotivofinaliza= Ot_Finalizada.idmotivofinaliza;
    this.lat= Ot_Finalizada.lat;
    this.lng= Ot_Finalizada.lng;
    this.altura= Ot_Finalizada.altura;
    this.estado= Ot_Finalizada.estado;
    this.t= Ot_Finalizada.t;
    this.fch= Ot_Finalizada.fch;
};
Ot_Finalizada.createOt_Finalizada = function (newOt_Finalizada, result) {
       sql.query("INSERT INTO ot_finalizada set ?", newOt_Finalizada, function (err, res) {
               
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
Ot_Finalizada.getOt_FinalizadaById = function (Ot_FinalizadaId, result) {
    sql.query("Select id from ot_finalizada where id_Ot_Finalizada = ? ", Ot_FinalizadaId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
Ot_Finalizada.getAllOt_Finalizada = function (result) {
    sql.query("Select * from ot_finalizada", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('ot_Finalizada : ', res);  

             result(null, res);
            }
        });   
};
/**/
Ot_Finalizada.updateById = function(id, Ot_Finalizada, result){
    sql.query("UPDATE ot_finalizada SET id_Ot_Finalizada = ? WHERE id = ?", [Ot_Finalizada.Ot_Finalizada, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };
  Ot_Finalizada.remove = function(id, result){
       sql.query("DELETE FROM ot_finalizada WHERE id = ?", [id], function (err, res) {
  
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                 
                   result(null, res);
                  }
              }); 
  };
  module.exports= Ot_Finalizada;