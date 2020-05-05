export class Match{
    public india:string;
    public country:string;
    public matchType:string;
    public date:string;
    public place:string;
    public day:string;
    public indiaFlag:string;
    public countryFlag:string;

    constructor(country:string,matchType:string,date:string,place:string,day:string,
        countryFlag:string){
            this.india="India";
            this.country=country;
            this.matchType=matchType;
            this.date=date
            this.place=place;
            this.day=day;
            this.indiaFlag="https://cdn.countryflags.com/thumbs/india/flag-400.png";
            this.countryFlag=countryFlag;

    }
}