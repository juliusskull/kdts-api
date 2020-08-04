'user strict';
var sql = require('../db.js');

//Pasos object constructor
var Pasos = function(Pasos){
    this.id_paso = Pasos.id_paso;
    this.desc_campo = Pasos.desc_campo;
    this.tipo = Pasos.tipo;
    this.foto = Pasos.foto;
    this.obligatorio = Pasos.obligatorio;
    this.ot = Pasos.ot;
};
Pasos.createPasos = function (newPasos, result) {    
        sql.query("INSERT INTO pasos set ?", newPasos, function (err, res) {
                
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
Pasos.getPasosById = function (PasosId, result) {
        sql.query("Select id from Pasos where nro_Pasos = ? ", PasosId, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });
};
Pasos.getPasosByUsuario = function (PasosId, result) {
    sql.query("SELECT id,nro_Pasos,id_loc,localidad,zona,id_bar,barrio,id_cal,calle,altura,id_mPasosivo,mPasosivo,cod_empleado_asig,nombre_empleado_asig,cod_cuadrilla_asig,contratista_asig,fchalta,template_titulo,'-24.7918987' as lat, '-65.429728'as lng, observacion FROM Pasos_view where nombre_empleado_asig = ?  order by id desc", PasosId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
Pasos.getAllPasos = function (result) {
        sql.query("Select * from Pasos", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Pasoss : ', res);  

                 result(null, res);
                }
            });   
};
Pasos.updateById = function(id, Pasos, result){
  sql.query("UPDATE Pasos SET nro_Pasos = ? WHERE id = ?", [Pasos.Pasos, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Pasos.remove = function(id, result){
     sql.query("DELETE FROM Pasos WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Pasos;