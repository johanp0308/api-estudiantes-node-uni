import {pool} from './db.js'



const getEstudiantes = async () => {
    try{
        let statemet = "SELECT * FROM estudiantes";
        let resultado = await pool.query(statemet,[]);
        let datos  = resultado[0];
        console.log(datos);
        return datos;
    }catch (error){
        if(e)
        console.error("Error en la consulta!")
        throw error;
    }
}

// console.log(await getEstudiantes())

// export const resolvers = {
//     estudiantes: async() => await getEstudiantes()

// }


export const resolvers = {
    estudiantes: async() => {
        return await getEstudiantes();
    }

}   

