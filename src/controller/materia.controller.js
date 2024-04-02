import {poo} from '../db.js';


export const obtenerTodosMaterias = async (req,res) =>{
    try {
        let query = "SELECT * FROM materia;";
        let resBD = await poo.query(query,[]);
        let datos = resBD[0];

        if(datos.length > 0){
            console.log(datos);
            return res.status(200).json(datos);
        }else{
            return res.status(204).json();
        }

    } catch (e) {
        onsole.log(`Ha ocurriod un error: ${e}`);
        return res.status(500).json({message:`Ocurrio un error de MySQL, mensaje: ${e.sqlMessage}`});
    }
}

export const obtenerMateriasById = async (req,res) =>{
    try {
        let idMateria = req.params.id
        let statemet = "SELECT FROMSELECT * FROM materia WHERE materiaId=?;"
        let resultado = await poo.query(statemet,[idMateria])
        let datos = resultado[0]

        if(datos.length > 0){
            console.log(datos);
            return res.status(200).json(datos);
        }else{
            return res.status(204).json({message: "No content"});
        }

    } catch (e) {
        onsole.log(`Ha ocurriod un error: ${e}`);
        return res.status(500).json({message:`Ocurrio un error de MySQL, mensaje: ${e.sqlMessage}`});
    }
}

export const agregarMateria = async (req,res) =>{
    try{
        let {materiaNombre,creditos} = req.body;
        
        let query = "INSERT INTO materia (materiaNombre, creditos) VALUES (?, ?);";
        let datos = [materiaNombre,creditos];

        const resultado = await pool.query(query,datos);
        
        if(resultado[0].affectedRows == 1){
            return res.status(200).json({message:"Estudiante guadado."})
        }else{
            return res.status(500).json({message:"No se pudo Guardar"})
        }

    }catch (e){
        console.log(`Ha ocurriod un error: ${e}`);
        return res.status(500).json({message:`Ocurrio un error de MySQL, mensaje: ${e.sqlMessage}`});
    }
}

export const eliminarMateriaById = async (req,res) =>{
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
}

export const actualizarMateriaById = async (req,res) =>{
    try {
        
    } catch (e) {
        onsole.log(`Ha ocurriod un error: ${e}`);
        return res.status(500).json({message:`Ocurrio un error de MySQL, mensaje: ${e.sqlMessage}`});
    }
}
