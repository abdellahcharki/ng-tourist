import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/core/models';
import { CityService } from 'src/app/core/services/city.service';
import {  environment as env} from "../../../environments/environment";
import {Place  } from "../../core/models/place.model";
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(private router:ActivatedRoute,private cs:CityService) { }

  url:string=env.url;
  count:number=0;

  arr:Place[] = [];

  city:City = {};

  
  ngOnInit(): void { 

    this.cs.findById(this.router.snapshot.params.id).subscribe(res=>{
      this.city=res;
  
    });

  }

}
