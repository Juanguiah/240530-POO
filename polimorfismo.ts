function imprimirNombre(persona: Person){
 console.log(persona.getNombre())   
}

const conductor2 = new Conductor("Juan", "Perez", "312289", "juan.perez@gmail.com", "lic123");
const pasajero2 = new Pasajero("Daniel", "Garces", "312289", "daniel.garces@gmail.com", "Efectivo");

imprimirNombre(conductor2); // Juan
imprimirNombre(pasajero2); // Daniel