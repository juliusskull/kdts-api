'user strict';
var sql = require('../db.js');

//Productos object constructor
var Productos = function(Productos){
    
    this.id_negocio = Productos.id_negocio;
    this.descripcion = Productos.descripcion;
    this.precio = Productos.precio;
    this.foto = Productos.foto;
    this.fchalta = Productos.fchalta;
    this.app = (Productos.app!=null)?Productos.app:1;
};
Productos.createProductos = function (newProductos, result) {    
        sql.query("INSERT INTO productos set ?", newProductos, function (err, res) {
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
        sql.query("Select id from productos where id = ? ", ProductosId, function (err, res) {             
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
        sql.query("Select * from productos", function (err, res) {

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
Productos.getAllProductosApp = function (app,result) {
    sql.query("Select * from productos where app=?",[app], function (err, res) {

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
  sql.query("UPDATE productos SET  precio = ?  WHERE id = ?", [Productos.precio, id], function (err, res) {
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
     sql.query("DELETE FROM productos WHERE id = ?", [id], function (err, res) {

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