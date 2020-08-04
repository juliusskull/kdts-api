'use strict';
var jwt = require('jsonwebtoken');
var Usuario = require('../model/usuarioModel.js');
exports.login = function(req, res) {   
  
        var username = req.body.user
        var password = req.body.password

        Usuario.getUsuarioLogin(username,password,function (err, result){
            console.log("rr:"+result.length);
            if (username && password) {
            if(result.length>0){
                var tokenData = {
                    username: username
                    // ANY DATA
                  }
                
                  var token = jwt.sign(tokenData, 'Secret Password', {
                     expiresIn: 60 * 60 * 24 // expires in 24 hours
                  })
                
                  res.send({
                    token
                  })    
            }else{
                res.status(401).send({
                    error: 'usuario o contraseña inválidos'
                  })
                  return
            }
        }else{
            res.status(401).send({
                error: 'usuario o contraseña no cargados'
              })
              return
        }
        });
    
      
}

exports.secure = function(req, res) { 
    var token = req.headers['authorization']
    if(!token){
        res.status(401).send({
          error: "Es necesario el token de autenticación"
        })
        return
    }

    token = token.replace('Bearer ', '')

    jwt.verify(token, 'Secret Password', function(err, user) {
      if (err) {
        res.status(401).send({
          error: 'Token inválido'
        })
      } else {
        res.send({
          message: 'Awwwww yeah!!!!'
        })
      }
    })
}