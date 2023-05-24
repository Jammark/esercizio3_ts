import {Lavoratore} from './lavoratore.js';

export class Professione extends Lavoratore{

    private classe:string;
        
    

    constructor(codredd:number,
        redditoannuolordo:number,
        tasseinps:number,
        tasseirpef:number,
        classe:string){
            super(codredd, redditoannuolordo, tasseinps, tasseirpef);
            this.classe = classe;
    }

     getUtileTasse():number{
        let value:number;
        value = this.redditoannuolordo * this.codredd / 100;
        return value;
     };

     getTasseInps():number{
        let value:number;
        value = this.getUtileTasse() * this.tasseinps / 100;
        return value;
     };

     getTasseIrpef():number{
        let value:number;
        value = this.getUtileTasse() * this.tasseirpef / 100;
        return value;
     };

     getRedditoAnnuoNetto():number{
        let value:number;
        value = this.redditoannuolordo - this.getTasseInps() -this.getTasseIrpef();
        return value;
     };

     get getClasse():string{
        return this.classe;
    }

    stampa():string{
        return `Professione: ${this.getClasse} \n
        Utile tasse: ${this.getUtileTasse()}\n
        Tasse inps: ${this.getTasseInps()}\n
        Tasse irpef: ${this.getTasseIrpef()}\n
        Reddito annuo netto: ${this.getRedditoAnnuoNetto()}`;
    }

    getHtmlElement():string{
        return `<div class="el">
        <h2 class="content">Professione: ${this.getClasse}</h2>
        <h3 class="content">Utile tasse: ${this.getUtileTasse()}</h3>
        <h3 class="content">Tasse inps: ${this.getTasseInps()}</h3>
        <h3 class="content">Tasse irpef: ${this.getTasseIrpef()}</h3>
        <h2 class="content">Reddito annuo netto: ${this.getRedditoAnnuoNetto()}</h2>
        </div>`;
    }
}