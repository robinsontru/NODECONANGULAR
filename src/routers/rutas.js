import express, { Router } from "express";
import conexion from "../config/conexion.js";

//asignamos la ruta
const router = express.Router();

router.get('/', (req, res) => {
    let sql = 'select * from tb_equipo '
    conexion.query(sql, (eror, rows, fields) => {
        if (eror) throw eror;
        else {
            res.json(rows)
        }
    })

});

router.get('/', (req, res) => {
    const { id } = res.params
    let sql = 'select * from tb_equipo  where id_equipo  =? '
    conexion.query(sql, { id }, (eror, rows, fields) => {
        if (eror) throw eror;
        else {
            res.json(rows)
        }
    })

});
///crear
router.post('/', (req, res) => {
    const { nombre, logo } = req.body
    let sql = `insert into tb_equipo(nombre, logo) values('${nombre}','${logo}')`
    conexion.query(sql, (eror, rows, fields) => {
        if (eror) throw eror
        else {
            res.json({ status: 'el equipo se agrego correctamente' })
        }
    })

});


///eliminar
router.delete('/:id', (req, res) => {
    const { id } = req.params
    let sql = `delete from tb_equipo where  id_equipo = '${id}'`
    conexion.query(sql, (eror, rows, fields) => {
        if (eror) throw eror
        else {
            res.json({ status: 'el equipo se elimino correctamente' })
        }
    })

});

//editar
router.put('/:id', (req, res) => {
    const { id } = req.params
    const { nombre, logo } = req.params
    let sql = `update tb_equipo set 
    nombre ='${nombre}',
    logo='${logo}'
    where id_equipo = '${id}'`
    conexion.query(sql, (eror, rows, fields) => {
        if (eror) throw eror
        else {
            res.json({ status: 'el equipo se actualizo correctamente' })
        }
    })

});


export default router;