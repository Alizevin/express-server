import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import postRoute from './routes/posts.js'
import reportRoute from './routes/report.js'



//import uploadRoute from '/routes/upload.js'


mongoose.connect('mongodb+srv://asperasevera:fOz99pSlF2oQvGac@cluster0.chuynxj.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB Ok'))
.catch((err) =>console.log('DB err', err));


const app = express()


app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))




// Routes
app.use('/post', postRoute)
app.use('/posts/', postRoute)
app.use('/report', reportRoute)
//app.use('/upload', uploadRoute)


app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" })
  }
   
  const myFile = req.files.file;
 
  // метод mv() помещает файл в папку public
  myFile.mv(`${__dirname}/public/${myFile.name}`,
    function (err) {
      if (err) {
        console.log(err)
        return res.status(500).send({ msg: "Error occurred" });
      }
      // возвращаем ответ с именем файла и его расположением
      return res.send({name: myFile.name, path: `/${myFile.name}`});
  });
})





app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
      return console.log(err);
    }
  
    console.log('Server OK');
  });
  