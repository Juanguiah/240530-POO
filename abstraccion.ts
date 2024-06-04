class Persona {
    public nombre: string;
    public email: string;

    constructor(nombre: string, email: string){
        this.nombre = nombre;
        this.email = email;
    }

    public getNombre(): string {
        return this.nombre
    }

    public getEmail(): string {
        return this.email
    }
}

const persona = new Persona("Daniel", "tatanbmx@gmail.com");

persona.getNombre() // Daniel