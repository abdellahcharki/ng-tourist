import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country , ResponsCountry} from '../models';
import { environment as env } from "./../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) {


  }

  url:string = env.url;


  findAll(){
    return this.http.get<ResponsCountry[]>(`${this.url}api/countrys`);
  }


  addCountry(country:Country){
    return this.http.post<Country>(`${this.url}api/countrys`,country);
  }

  getCountryById(id:number){
    return this.http.get(`${this.url}api/countrys/${id}`);
  }


  deleteCountryById(id:any){
    return this.http.delete(`${this.url}api/countrys/${id}`);

  }

  updateCountryById(country:Country){

    return this.http.put(`${this.url}api/countrys`,country);


  }
}
