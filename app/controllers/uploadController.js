const fileUpload = require('express-fileupload')
exports.subir_archivo = function(req, res) {
    let EDFile = req.files.file;
    EDFile.mv(`./files/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
      })
    }
  