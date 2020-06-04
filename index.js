const express = require('express');
const hbs = require ('hbs')
const mongoose = require('mongoose');

const PUERTO = process.env.PORT  || 3000;

let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine','hbs');
hbs.registerPartials(_dirname + '/views/partials')
app.use(express.static(_dirname + '/public'));

app.use('/', pintoresRouter);

mongoose.Promise= global.Promise;
const cadena ='mongodb+srv://Yose:12345@garciayoseline-g-axpuv.mongodb.net/curso?retryWrites=true&w=majority de conexionde MOngoDB'
mongoose.connect(cadena,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Conexion establecida =oD');

})
.catch(err=> console.log(err));

app.listen(PUERTO , ()=>{
    console.log('Escuchando el puerto...')
});