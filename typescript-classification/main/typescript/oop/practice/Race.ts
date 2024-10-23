export class Race {
    isHumanoid:boolean | null | undefined;
    planet:string | null | undefined;
    age:number | null | undefined;
    traits:string[] | null | undefined;

    constructor(isHumanoid:boolean, planet:string, age:number, traits:string[] ) {
        this.isHumanoid = isHumanoid;
        this.planet = planet;
        this.age = age;
        this.traits = traits;
    }
   

}