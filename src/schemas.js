import { buildSchema } from 'graphql';

export const schema = buildSchema(`
type Estudiante {
    estudianteId: Int!
    nombre_estudiante: String!
    apellido_estudiante: String!
    fecha_nacimiento: String!
  }
  
  
  type Query {
    estudiantes: [Estudiante!]

  }
  
`);
