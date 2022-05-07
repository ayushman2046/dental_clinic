const connectToMongo=require('./db');

const express = require('express')
const app = express()
const port = 5000
const cors=require('cors');

connectToMongo();

app.use(express.json());// it's called mildleware
app.use(cors())
// app.use('/',(req,res)=>{
//     res.send({
//         msg:"How are your"
//     })
// })
app.use('/blogimages',express.static('upload'))
app.use('/user',require('./routes/Appointment'))
app.use('/blog',require('./routes/blog'))
app.use('/api/image',require('./routes/Imag'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })