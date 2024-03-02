import {pool} from '../db.js';


export const createEstudiante = async (req,res)=> {
    try{
        let {nombre_estudiante,apellido_estudiante,fecha_nacimiento} = req.body;
        
        let query = "INSERT INTO `estudiantes`(nombre_estudiante,apellido_estudiante,fecha_nacimiento) values(?,?,?);";
        let datos = [nombre_estudiante,apellido_estudiante,fecha_nacimiento];

        const resultado = await pool.query(query,datos);
        console.log(resultado[0]);

        if(resultado[0].affectedRows == 1){
            return res.status(200).json({message:"Estudiante guadado."})
        }
    }catch (e){
        console.log(`Ha ocurriod un error: ${e}`);
        return res.status(500).json({message:`Ocurrio un error de MySQL, mensaje: ${e.sqlMessage}`});
    }
};