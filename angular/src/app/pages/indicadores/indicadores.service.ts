import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IndicadorService  {

  private BASE_PATH = "http://localhost:8080/indicador";


  constructor(private http: HttpClient) {
   
  }

  public listIndicadorPobreza(codigoPais: string): Observable<any> {
    console.log(codigoPais);
    let parametro = new HttpParams();
    parametro = parametro.append('codigoPais', codigoPais);

    return this.http.get(
        this.BASE_PATH, {
        observe: "response",
        params: parametro
      }
     
    ).pipe(
      map((response: any) => {
        console.log(response);
        if (response && response.resultado) {
          console.log(response);
          return response.resultado;
        }
      }),
      catchError(error =>  error)
    );
  }
}
