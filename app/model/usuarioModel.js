'user strict';
var sql = require('../db.js');
var Usuario = function(Usuario){ 
    this.usuario= Usuario.usuario;
    this.email= Usuario.email;
    this.password= (Usuario.password)?Usuario.password:"";
    this.rol_id= (Usuario.rol_id)?Usuario.rol_id:"5";
    /*this.fchalta= (Usuario.fchalta)?Usuario.fchalta:"";*/
    /*this.fchultimoacceso= Usuario.fchultimoacceso;*/
    this.geren= (Usuario.geren)?Usuario.geren:"H";
    this.modulo= (Usuario.modulo)? Usuario.modulo:"";
};
Usuario.createUsuario = function (newUsuario, result) {
    sql.query("INSERT INTO usuarios set ?", newUsuario, function (err, res) {
            
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

Usuario.isUsuario = function (newUsuario, result) {
    sql.query("select  * from usuarios where  email =?", newUsuario.email, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log("cant=>"+res.length);            
                if(res.length>0){
                    sql.query("UPDATE usuarios SET fchultimoacceso =CURRENT_TIMESTAMP()  WHERE email = ?", [newUsuario.email], function (err, res1) { });
                    sql.query("select * from comercios  WHERE id = ?", [res[0].id], function (err, res3) {
                        if(res3.length==0){
                            sql.query("insert into comercios (id,usuario,descripcion)  values (?,?,?)", [res[0].id,res[0].usuario,res[0].email,], function (err, res4) {});
                        }
                    });
                   
                    console.log("res=>"+res[0].id);
                    result(null, res[0].id);
                }else{
                    sql.query("INSERT INTO usuarios set ?", newUsuario, function (err, res2) {
                        console.log("res=>(*)"+res.insertId);
                        result(null, res.insertId);

                    });
                } 

               

               
            }
        });

};
Usuario.getUsuarioById = function (ObjId, result) {
    sql.query("Select * from usuarios where id = ? ", ObjId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });
};
Usuario.getUsuarioLogin = function (usu,pass,callback) {
   
    sql.query("Select * from usuarios where usuario = ? and password = ?", [usu, pass], function (err, res) {             
        
            if(err) {
                console.log("error: ", err);
                callback( err,res);
            }else{
                callback( null,res);
            }
            
        });
       
};
Usuario.getAllUsuario = function (result) {
    sql.query("Select * from usuarios", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('usuarios : ', res);  

             result(null, res);
            }
        });   
};
/**/
Usuario.updateById = function(id, Usuario, result){
    sql.query("UPDATE usuario SET id = ? WHERE id = ?", [Usuario.Usuario, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{
               result(null, res);
                  }
              });
  };
  Usuario.remove = function(id, result){
    sql.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {

               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{

                result(null, res);
               }
           });
};
module.exports= Usuario;