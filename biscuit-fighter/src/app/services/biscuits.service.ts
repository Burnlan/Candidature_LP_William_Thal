import { Injectable } from '@angular/core';
import { Biscuit } from 'src/app/Biscuit';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//we will use json
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class BiscuitsService {
  //We set up the API endpoint URL
  private apiUrl = "http://localhost:8666/";

  constructor(private http:HttpClient) { }
  //we call the API 
  getBiscuits(): Observable<Biscuit[]> {
    return this.http.get<Biscuit[]>(this.apiUrl+'getbiscuits')
  }

  deleteBiscuit(biscuit:Biscuit): Observable<Biscuit> {
    return this.http.delete<Biscuit>(this.apiUrl+'deletebiscuit'+biscuit._id)
  }

  createBiscuit(biscuit:Biscuit): Observable<Biscuit> {
    console.log(biscuit);
    return this.http.post<Biscuit>(this.apiUrl+'addbiscuit', biscuit, httpOptions)
  }

  updateBiscuit(biscuit:Biscuit): Observable<Biscuit> {
    
    return this.http.put<Biscuit>(this.apiUrl+'editbiscuit'+biscuit._id, biscuit, httpOptions)
  }

}
