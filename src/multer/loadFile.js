const multer = require ("multer")
const path = require( 'path');

//GUARDAR FILE
let fileStorageEngine = multer.diskStorage({
  destination: (req, file,cb)=>{
    cb(null, path.join(__dirname, "../public/image"))
  },
  filename:(req, file ,cb)=>{
    cb(null,file.originalname)
  }
})
let upload = multer({storage:fileStorageEngine})

module.exports = upload