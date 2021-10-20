// const util = require("util");
// const multer = require("multer");
// const GridFsStorage = require("multer-gridfs-storage");

// var storage = new GridFsStorage({
//     url: "mongodb+srv://root:12345@zamindarcluster.smfdd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     options: { useNewUrlParser: true, useUnifiedTopology: true },
//     file: (req, file) => {
//         const match = ["image/png", "image/jpeg"];

//         if (match.indexOf(file.mimetype) === -1) {
//             const filename = `${Date.now()}-Zamindar-${file.originalname}`;
//             return filename;
//         }

//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-Zamindar-${file.originalname}`
//         };
//     }
// });

// var uploadFile = multer({ storage: storage }).single("file");
// var uploadFilesMiddleware = util.promisify(uploadFile);
// module.exports = uploadFilesMiddleware;

// var multer = require('multer');

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });

// var upload = multer({ storage: storage });

//Schema
var imgSchema = mongoose.Schema({
    img: { data: Buffer, contentType: String }
});

var image = mongoose.model("image", imgSchema);

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage })