import Tiempo from "./Tiempo.js";
import Trabajado from "./Trabajado.js";

class Main {
    constructor(){
        let resultadoDif = new Trabajado(document.querySelector('#resultado'));
        document.querySelector('#btnCalcular').addEventListener('click', ()=> {
            let horaE = Number(document.querySelector("#horaE").value);
            let minutoE = Number(document.querySelector("#minutoE").value);
            let segundoE = Number(document.querySelector("#segundoE").value);
            let horaS = Number(document.querySelector("#horaS").value);
            let minutoS = Number(document.querySelector("#minutoS").value);
            let segundoS = Number(document.querySelector("#segundoS").value);

            let trabajo = new Tiempo(horaE,minutoE,segundoE,horaS,minutoS,segundoS);
            resultadoDif.imprimirDif(trabajo);
        });
    }
}

let m = new Main();