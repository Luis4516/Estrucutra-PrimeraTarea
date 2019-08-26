export default class Tiempo{
    constructor(horaE, minutoE, segundoE, horaS, minutoS, segundoS) {
        this._horaE = horaE;
        this._minutoE = minutoE;
        this._segundoE = segundoE;
        this._horaS = horaS;
        this._minutoS = minutoS;
        this._segundoS = segundoS;
        // this._totalEntrada = 0;
        // this._totalSalida = 0;  // SON PARTE DE UNA PRUEBA
    }


    get horaE() {
        return this._horaE;
    }
    get minutoE() {
        return this._minutoE;
    }
    get segundoE() {
        return this._segundoE;
    }
    get horaS() {
        return this._horaS;
    }
    get minutoS() {
        return this._minutoS;    
    }
    get segundoS() {
        return this._segundoS;
    }

    // PROBANDO OTRO METODO //
    // get horaE() {
    //     convhe = (horaE * 60 * 60)
    //     return convhe;
    // }
    // get minutoE() {
    //     convme = (horaE * 60)
    //     return convme;
    // }
    // get segundoE() {
    //     return this._segundoE;
    // }
    // get horaS() {
    //     convhs = (horaS * 60 * 60)
    //     return convhs;
    // }
    // get minutoS() {
    //     convms = (minutoS * 60)
    //     return convms;    
    // }
    // get segundoS() {
    //     return this._segundoS;
    // }
    // get totalEntrada() {
    //     this._totalEntrada = Number(convhe + convme + this._segundoE)
    //     return this.totalEntrada;
    // }
    // get totalSalida() {
    //     this._totalSalida = Number(convhs + convms + this._segundoS)
    //     return this.totalSalida;
    // }
}