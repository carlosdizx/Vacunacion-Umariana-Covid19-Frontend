import {Eps, Estado, Persona, Tipo} from './persona';
export const PERSONAS: Persona[] = [
  {
    documento: 1087,
    nombres: 'Juan jose',
    apellidos: 'Olaya Herrera',
    fechaNacimiento: new Date(),
    sangre: 'O+',
    correo: 'jujoherrera@umariana.edu.co',
    celular: 30088881111,
    tipo: new Tipo(),
    eps: new Eps(),
    estado: new Estado()
  },
  {
    documento: 1087,
    nombres: 'Diego Alejandro',
    apellidos: 'Gomez Ceballos',
    fechaNacimiento: new Date(),
    sangre: 'B+',
    correo: 'cebadiego@umariana.edu.co',
    celular: 30088881112,
    tipo: new Tipo(),
    eps: new Eps(),
    estado: new Estado()
  },
  {
    documento: 1087,
    nombres: 'Adrian Daniel',
    apellidos: 'Molina Torres',
    fechaNacimiento: new Date(),
    sangre: 'AB+',
    correo: 'adieltorres@umariana.edu.co',
    celular: 30088881113,
    tipo: new Tipo(),
    eps: new Eps(),
    estado: new Estado()
  },
];
