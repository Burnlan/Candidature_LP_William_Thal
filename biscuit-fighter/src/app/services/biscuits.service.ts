import { Injectable } from '@angular/core';
import { Biscuit } from 'src/app/Biscuit';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BiscuitsService {
  private apiUrl = "http://localhost:8666/";

  constructor(private http:HttpClient) { }

  getBiscuits(): Observable<Biscuit[]> {
    console.log(this.http.get<Biscuit[]>(this.apiUrl+'getbiscuits'))
    return this.http.get<Biscuit[]>(this.apiUrl+'getbiscuits')
  }

}
