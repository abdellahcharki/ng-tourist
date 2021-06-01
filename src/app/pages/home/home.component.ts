import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { City, Place } from 'src/app/core/models';
import { CityService } from 'src/app/core/services/city.service';

import { environment as env } from "../../../environments/environment";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  cityes: City[] = [];

  url:string=env.url;


  constructor(private cs:CityService) { }

  ngOnInit(): void {

    this.cs.getAllCities().subscribe(res=>{
      this.cityes=res;
      console.log(res);

    })
  }



}
