
export default class Trabajado{
    constructor(div){
        this._div = div;
        this._difHoras = 0;
        this._difMinutos = 0;
        this._difSegundos = 0;
    }

   

    imprimirDif(trabajo) {
        this._difHoras = (trabajo.horaS - trabajo.horaE);
        this._difMinutos = (trabajo.minutoS - trabajo.minutoE);
        this._difSegundos = (trabajo.segundoS - trabajo.segundoE);
        
    console.log(this._div = `El empleado trabajó ${this._difHoras} horas, 
    ${this._difMinutos} minutos, ${this._difSegundos} segundos.`);
    }
    
}