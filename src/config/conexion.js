import mysql from "mysql";
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    database:'db_basico1'
});
conexion.connect((Error)=>{
    if(Error){
        console.log('conexion no establesida '+Error);
    }
    else{
        console.log('la base de datos se conecto :)');
    }
})
export default conexion;