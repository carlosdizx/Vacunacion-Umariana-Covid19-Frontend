import {Eps, Estado, Facultad, Persona, Tipo} from './persona';
export const PERSONAS: Persona[] = [
  {
    documento: 1087,
    nombres: 'Juan jose',
    apellidos: 'Olaya Herrera',
    fechaNacimiento: new Date(),
    sangre: 'O+',
    correo: 'jujoherrera@umariana.edu.co',
    celular: 3008888111,
    tipo: new Tipo(),
    eps: new Eps(),
    estado: new Estado(),
    facultad: new Facultad()
  },
  {
    documento: 1088,
    nombres: 'Diego Alejandro',
    apellidos: 'Gomez Ceballos',
    fechaNacimiento: new Date(),
    sangre: 'B+',
    correo: 'cebadiego@umariana.edu.co',
    celular: 3008888112,
    tipo: new Tipo(),
    eps: new Eps(),
    estado: new Estado(),
    facultad: new Facultad()
  },
  {
    documento: 1089,
    nombres: 'Adrian Daniel',
    apellidos: 'Molina Torres',
    fechaNacimiento: new Date(),
    sangre: 'AB+',
    correo: 'adieltorres@umariana.edu.co',
    celular: 3008888113,
    tipo: new Tipo(),
    eps: new Eps(),
    estado: new Estado(),
    facultad: new Facultad()
  },
];
