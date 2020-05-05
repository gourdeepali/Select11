export class Player{

    public name:string;
    public speciality:string;
    public matches:number;
    public run:number;
    public strikeRate:number;
    public LargePic:string;
    public role:string;
    public smallPic:string;
    public wicket:number;
    public strength:string;
    public weekness:string;
    

    constructor(name:string,speciality:string,matches:number,run:number,strikeRate:number,
                largePic:string,role:string,smallPic:string,wicket:number,strength:string,
                weekness:string){
        this.name=name;
        this.speciality=speciality;
        this.matches=matches;
        this.run=run;
        this.strikeRate=strikeRate;
        this.LargePic=largePic;
       this.role=role;
       this.smallPic=smallPic;
       this.wicket=wicket;
       this.strength=strength;
       this.weekness=weekness;
    }

}