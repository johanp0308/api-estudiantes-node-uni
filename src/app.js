import express from 'express';
import cors from 'cors';

import estudiantesRoutes from './routes/estudiante.routes.js';

const app = express();  

app.use(cors({origin: "*"}));
app.use(express.json());

app.use('/estudiantes',estudiantesRoutes);

// app.use((req, res, next) =>{
//     console.log(res);
// });

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});


export default app;