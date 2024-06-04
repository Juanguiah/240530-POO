//Herencia

class Person {
    public nombres: string;
    public apellidos: string;
    public celular: string;
    public correo: string;
    constructor(nombres:string, apellidos:string,celular:string,correo:string){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.celular = celular;
        this.correo = correo;
    }

    public getNombre(){
        return this.nombres;
    }
    
}

class Conductor extends Person {

    private _licencia:string;

    constructor(nombres: string, apellidos: string, celular: string, correo: string, licencia: string){
        super(nombres, apellidos, celular, correo);
        this._licencia = licencia;
    }

    public getLicencia(){
        return this._licencia;
    }
}

const conductor = new Conductor("Juan", "Perez", "312289", "juan.perez@gmail.com", "lic123");


class Pasajero extends Person {

    private _metodoPago:string;

    constructor(nombres: string, apellidos: string, celular: string, correo: string, metodoPago: string){
        super(nombres, apellidos, celular, correo);
        this._metodoPago = metodoPago;
    }

    public getMetodoPago(){
        return this._metodoPago;
    }

    public PedirServicio(){
        
    }
    public CancelarServicio(){
        
    }
}

const pasajero = new Pasajero("Daniel", "Garces", "312289", "daniel.garces@gmail.com", "Efectivo");
pasajero.PedirServicio();
