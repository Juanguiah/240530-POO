//Encapsulamiento + Abstracción

class Vehiculo {
    public _marca: string;
    private _modelo: string;
    private _placa: string;

    constructor(marca: string, modelo: string, placa: string){
        this._marca = marca;
        this._modelo = modelo;
        this._placa = placa;
    }

    private getMarca():string{
        return this._marca;
    }

    public getModelo():string{
        return this._modelo;
    }

    public getPlaca():string{
        return this._placa;
    }   
}

const vehiculo = new Vehiculo("Mazda", "2003", "ABC123");

vehiculo.getModelo();

