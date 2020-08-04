var sql = require('../db.js');

var Materiales_ot = function(Materiales_ot){
    /*this.id_material= Material.id_material;*/
    this.codigo= Materiales_ot.codigo;
    this.ot= Materiales_ot.ot;
    this.cantidad= Materiales_ot.cantidad;
    this.usuario= Materiales_ot.usuario;
    this.id_grupo= Materiales_ot.id_grupo;
};
Materiales_ot.createMateriales_ot = function (newMateriales_ot, result) {
    sql.query("INSERT INTO materiales_ot set ?", newMateriales_ot, function (err, res) {
            
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
Materiales_ot.getMateriales_otById = function (Materiales_otId, result) {
    sql.query("Select id from materiales_ot where id_material_ot = ? ", Materiales_otId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
Materiales_ot.getAllMateriales_ot = function (result) {
    sql.query("Select * from materiales_ot", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('material : ', res);

             result(null, res);
            }
        });
};
Materiales_ot.updateById = function(id, Materiales_ot, result){
    sql.query("UPDATE materiales_ot SET id_material = ? WHERE id = ?", [Materiales_ot.Materiales_ot, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{
               result(null, res);
                  }
              });
  };
  Materiales_ot.remove = function(id, result){
    sql.query("DELETE FROM materiales_ot WHERE id = ?", [id], function (err, res) {
               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
                result(null, res);
               }
           });
};
module.exports= Materiales_ot;