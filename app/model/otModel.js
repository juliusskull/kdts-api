'user strict';
var sql = require('../db.js');

//OT object constructor
var OT = function(OT){
    this.OT = OT.OT;
    this.status = OT.status;
    this.created_at = new Date();
};
OT.createOT = function (newOT, result) {    
        sql.query("INSERT INTO ot set ?", newOT, function (err, res) {
                
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
OT.getOTById = function (OTId, result) {
        sql.query("Select id from ot where nro_ot = ? ", OTId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
OT.getOTByUsuario = function (OTId, result) {
    sql.query("SELECT id,nro_ot,id_loc,localidad,zona,id_bar,barrio,id_cal,calle,altura,id_motivo,motivo,cod_empleado_asig,nombre_empleado_asig,cod_cuadrilla_asig,contratista_asig,fchalta,template_titulo,'-24.7918987' as lat, '-65.429728'as lng, observacion FROM ot_view where nombre_empleado_asig = ?  order by id desc", OTId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
OT.getAllOT = function (result) {
        sql.query("Select * from ot", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('OTs : ', res);  

                 result(null, res);
                }
            });   
};
OT.updateById = function(id, OT, result){
  sql.query("UPDATE ot SET nro_ot = ? WHERE id = ?", [OT.OT, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
OT.remove = function(id, result){
     sql.query("DELETE FROM ot WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= OT;