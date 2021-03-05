import { Indicador } from "./indicador";

export class Result {
    indicator: Indicador;
    date: number;
    value: number;
    countryiso3code: string;

    Results(indicator:Indicador, date:number, value:number, countryiso3code:string){
    this.indicator = indicator;
    this.date = date;
    this.value = value;
    this.countryiso3code = countryiso3code;
    }
}