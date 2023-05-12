import "./config/conexion.js";
import  express  from "express";
import  rutas  from "./routers/rutas.js";
const port=(process.env.port || 3001)

//expres
const app = express();

//admitir los tipos de datos
app.use(express.json())

//config

app.set('port',port)

//rutas

app.use('/api',rutas)

app.listen(app.get('port'),(Error)=>{
    if (Error) {
        console.log('eror al iniciar el servidor'+Error);
    } else {
        console.log('servidor inicoado correctamente en el puerto..'+port);
    }
})