'user strict';
var sql = require('../db.js');

//Productos object constructor
var Productos = function(Productos){
    
    this.id_negocio = Productos.id_negocio;
    this.descripcion = Productos.descripcion;
    this.precio = Productos.precio;
    this.foto = Productos.foto;
    this.fchalta = Productos.fchalta;
};
Productos.createProductos = function (newProductos, result) {    
        sql.query("INSERT INTO Productos set ?", newProductos, function (err, res) {
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
Productos.getProductosById = function (ProductosId, result) {
        sql.query("Select id from Productos where id = ? ", ProductosId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Productos.getAllProductos = function (result) {
        sql.query("Select * from Productos", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Productoss : ', res);  

                 result(null, res);
                }
            });   
};
Productos.updateById = function(id, Productos, result){
  sql.query("UPDATE Productos SET  precio = ?  WHERE id = ?", [Productos.precio, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

Productos.caducarById = function(id, Productos, result){
    sql.query("UPDATE Productos SET  fchcad = CURRENT_TIMESTAMP  WHERE id = ?", [id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };

Productos.remove = function(id, result){
     sql.query("DELETE FROM Productos WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Productos;