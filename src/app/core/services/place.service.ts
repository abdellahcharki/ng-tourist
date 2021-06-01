import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from "./../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient) { }



  url:string = env.url;

  getPlaceById(){

  }


  getPlacesByCityId(){

  }
  getAllPlaces(){

  }


  updatePlace(){

  }

  deletePlace(){

  }
}
