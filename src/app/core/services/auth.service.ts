import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from "./../../../environments/environment";

import {User  } from "../models/user.model";
@Injectable({providedIn:"root"})
export class AuthService {
  constructor(private http: HttpClient) { }


  url:string = env.url;


	login(){
		return this.http.get(this.url+"api/login").subscribe(res=>{
		})
	}


	regster(u:User){
		return this.http.post(this.url+"api/regster",u)
	}


}
