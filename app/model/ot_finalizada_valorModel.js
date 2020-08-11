'user strict';
var sql = require('../db.js');

//Ot_finalizada_valor object constructor
var Ot_finalizada_valor = function(Ot_finalizada_valor){
    this.OT = Ot_finalizada_valor.OT;
    this.valor = Ot_finalizada_valor.valor;
    this.tipo = Ot_finalizada_valor.tipo;
    this.paso_id = Ot_finalizada_valor.paso_id;

};
Ot_finalizada_valor.createOt_finalizada_valor = function (newOt_finalizada_valor, result) {
        sql.query("INSERT INTO ot_finalizada_valor set ?", newOt_finalizada_valor, function (err, res) {
                
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
Ot_finalizada_valor.getOt_finalizada_valorById = function (Ot_finalizada_valorId, result) {
        sql.query("Select id from ot_finalizada_valor where nro_Ot_finalizada_valor = ? ", Ot_finalizada_valorId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Ot_finalizada_valor.getOt_finalizada_valorByUsuario = function (Ot_finalizada_valorId, result) {
    sql.query("SELECT id,nro_Ot_finalizada_valor,id_loc,localidad,zona,id_bar,barrio,id_cal,calle,altura,id_mOt_finalizada_valorivo,mOt_finalizada_valorivo,cod_empleado_asig,nombre_empleado_asig,cod_cuadrilla_asig,contratista_asig,fchalta,template_titulo,'-24.7918987' as lat, '-65.429728'as lng, observacion FROM Ot_finalizada_valor_view where nombre_empleado_asig = ?  order by id desc", Ot_finalizada_valorId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
Ot_finalizada_valor.getAllOt_finalizada_valor = function (result) {
        sql.query("Select * from ot_finalizada_valor", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Ot_finalizada_valors : ', res);  

                 result(null, res);
                }
            });   
};
Ot_finalizada_valor.updateById = function(id, Ot_finalizada_valor, result){
  sql.query("UPDATE ot_finalizada_valor SET nro_Ot_finalizada_valor = ? WHERE id = ?", [Ot_finalizada_valor.Ot_finalizada_valor, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Ot_finalizada_valor.remove = function(id, result){
     sql.query("DELETE FROM ot_finalizada_valor WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Ot_finalizada_valor;