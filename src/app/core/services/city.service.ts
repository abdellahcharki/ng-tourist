import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { City } from '../models';
import { environment as env } from "./../../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class CityService {


  url:string = env.url;

  constructor(private http:HttpClient) { }


    getAllCities(){
        return  this.http.get<City[]>(this.url+"api/cityes")
  }


  findById(id:number){
    return this.http.get<City>(this.url+"api/citys/"+id);
  }

  updateCity(){

  }



  addCity(city:City){

  }

}
