import {pool} from '../db.js';

export const createEstudiante = (req,res)=>{
    try{
        let {nombre_estudiante,apellido_estudiante,fecha_nacimiento} = res.body;
        
        let query = "INSERT INTO `estudiantes`(nombre_estudiante,apellido_estudiante,fecha_nacimiento) values(?,?,?);";
        let datos = [nombre_estudiante,apellido_estudiante,fecha_nacimiento];

        const resultado = await pool.query(sql,datos);
        console.log(resultado[0]);

        

    }
};