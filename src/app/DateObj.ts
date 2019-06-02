export class DateObj {
    day?: number;
    month?: string;
    year?: number;

    autolomousFormat(){
        return ''+this.day+this.month+this.year
    }
}