import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/core/models';
import { CityService } from 'src/app/core/services/city.service';

@Component({
  selector: 'app-cityes',
  templateUrl: './cityes.component.html',
  styleUrls: ['./cityes.component.scss']
})
export class CityesComponent implements OnInit {

  constructor(private cs:CityService) { }


  cityes: City[]= [];



  ngOnInit(): void {
    window.addEventListener("click",()=>{
      this.isOpen=false;
    })


this.doGet();

  }

  isOpen:boolean=false;

  toggleNewCountry(e:Event){
    e.stopPropagation();
    this.isOpen=!this.isOpen;
  }


  close(){
    this.isOpen=false;
  }


  clickOnModl(e:Event){
    e.stopPropagation();
  }





	doGet(){
		this.cs.getAllCities().subscribe(res=>{
			this.cityes=res;
		})
	}


}
