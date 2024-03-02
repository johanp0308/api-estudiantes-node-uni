import {pool} from '../db.js';


export const obtnerTodosEstudiantes = async (req,res)=>{
    try{
        let statemet = "SELECT * FROM estudiantes;";
        let resultado = await pool.query(statemet,[]);
        let datos = resultado[0];

        if(datos.length > 0){
            console.log(datos);
            return res.status(200).json(datos);
        }else{
            return res.status(204).json();
        }
    }catch (e){
        console.log(`Ha ocurriod un error: ${e}`);
        return res.status(500).json({message:`Ocurrio un error de MySQL, mensaje: ${e.sqlMessage}`});
    }
}

export const obtnerEstudianteById = async (req,res)=>{
    try{
        let idEstudiante = req.params.id
        let statemet = "SELECT * FROM estudiantes WHERE estudiante_id = ?;";
        let resultado = await pool.query(statemet,[idEstudiante]);
        let datos = resultado[0];

        if(datos.length > 0){
            console.log(datos);
            return res.status(200).json(datos);
        }else{
            return res.status(204).json();
        }
    }catch (e){
        console.log(`Ha ocurriod un error: ${e}`);
        return res.status(500).json({message:`Ocurrio un error de MySQL, mensaje: ${e.sqlMessage}`});
    }
}

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

export const deleteEstudiante = async (req,res)=>{
    try{
        let idEstudiante = req.params.id;
        let statemet = "DELETE FROM estudiantes WHERE estudiante_id = ?;";
        let resultado = await pool.query(statemet,[idEstudiante]);
        if(resultado[0].affectedRows == 1){
            return res.status(200).json({message:"Estudiante eliminado."})
        }else{
            res.status(204).json();
        }
    }catch (e){
        console.log(`Ha ocurriod un error: ${e}`);
        return res.status(500).json({message:`Ocurrio un error de MySQL, mensaje: ${e.sqlMessage}`});
    }
};

export const actualizarEstudiante = async (req,res) =>{
    try{
        let idEstudiante = req.params.id;
        let {nombre_estudiante,apellido_estudiante,fecha_nacimiento} = req.body;
        let datos = [nombre_estudiante,apellido_estudiante,fecha_nacimiento,idEstudiante];
        let statemet = "UPDATE estudiantes SET nombre_estudiante = ?, apellido_estudiante = ?, fecha_nacimiento = ? WHERE estudiante_id = ?;";
        let resultado = await pool.query(statemet,datos);
        if(resultado[0].affectedRows == 1){
            return res.status(200).json({message:"Estudiante acutializado."})
        }else{
            res.status(204).json();
        }
    }catch (e){
        console.log(`Ha ocurriod un error: ${e}`);
        return res.status(500).json({message:`Ocurrio un error de MySQL, mensaje: ${e.sqlMessage}`});
    }
}