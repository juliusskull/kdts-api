'user strict';
var sql = require('../db.js');

var Material = function(Material){
    /*this.id_material= Material.id_material;*/
    this.codigo= Material.codigo;
    this.desc_material= Material.desc_material;
    this.observacion= Material.observacion;
    this.umb= Material.umb;
};
Material.createMaterial = function (newMaterial, result) {
       sql.query("INSERT INTO materiales set ?", newMaterial, function (err, res) {
               
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
Material.getMaterialById = function (MaterialId, result) {
    sql.query("Select id from material where id_material = ? ", MaterialId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
Material.getAllMaterial = function (result) {
    sql.query("Select * from material", function (err, res) {

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
/**/
Material.updateById = function(id, Material, result){
    sql.query("UPDATE material SET id_material = ? WHERE id = ?", [Material.Material, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };
  Material.remove = function(id, result){
       sql.query("DELETE FROM material WHERE id = ?", [id], function (err, res) {
  
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                 
                   result(null, res);
                  }
              }); 
  };
  module.exports= Task;