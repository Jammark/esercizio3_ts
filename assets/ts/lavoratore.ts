export abstract class Lavoratore{
    codredd:number;
    redditoannuolordo:number;
    tasseinps:number;
    tasseirpef:number;

    constructor(codredd:number,
        redditoannuolordo:number,
        tasseinps:number,
        tasseirpef:number){
            this.codredd = codredd;
            this.redditoannuolordo = redditoannuolordo;
            this.tasseinps = tasseinps;
            this.tasseirpef = tasseirpef;

    }

    abstract getUtileTasse():number;

    abstract getTasseInps():number;

    abstract getTasseIrpef():number;

    abstract getRedditoAnnuoNetto():number;

}