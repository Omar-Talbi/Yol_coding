import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Res } from "../Res";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
private apiUrl="https://"+environment.apiSecret+".mockapi.io/api/v1/animals";

  constructor(private http:HttpClient) { }

  getAnimals() : Observable<Res>{
    return this.http.get<Res>(this.apiUrl);
  }
}
