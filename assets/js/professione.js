import { Lavoratore } from './lavoratore.js';
export class Professione extends Lavoratore {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef, classe) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
        this.classe = classe;
    }
    getUtileTasse() {
        let value;
        value = this.redditoannuolordo * this.codredd / 100;
        return value;
    }
    ;
    getTasseInps() {
        let value;
        value = this.getUtileTasse() * this.tasseinps / 100;
        return value;
    }
    ;
    getTasseIrpef() {
        let value;
        value = this.getUtileTasse() * this.tasseirpef / 100;
        return value;
    }
    ;
    getRedditoAnnuoNetto() {
        let value;
        value = this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
        return value;
    }
    ;
    get getClasse() {
        return this.classe;
    }
    stampa() {
        return `Professione: ${this.getClasse} \n
        Utile tasse: ${this.getUtileTasse()}\n
        Tasse inps: ${this.getTasseInps()}\n
        Tasse irpef: ${this.getTasseIrpef()}\n
        Reddito annuo netto: ${this.getRedditoAnnuoNetto()}`;
    }
}
