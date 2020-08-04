'user strict';
var sql = require('../db.js');

//Creador1 object constructor
var Creador1 = function(Creador1){
    this.Creador1 = Creador1.Creador1;
    this.status = Creador1.status;
    this.created_at = new Date();
};
Creador1.createCreador1 = function (newCreador1, result) {    
        sql.query("INSERT INTO creador1 set ?", newCreador1, function (err, res) {
                
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
Creador1.getCreador1ById = function (Creador1Id, result) {
        sql.query("Select id from creador1 where id = ? ", Creador1Id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Creador1.getAllCreador1 = function (result) {
        sql.query("Select * from Creador1", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Creador1s : ', res);  

                 result(null, res);
                }
            });   
};
Creador1.updateById = function(id, Creador1, result){
  sql.query("UPDATE Creador1 SET nro_Creador1 = ? WHERE id = ?", [Creador1.Creador1, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Creador1.remove = function(id, result){
     sql.query("DELETE FROM Creador1 WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Creador1;