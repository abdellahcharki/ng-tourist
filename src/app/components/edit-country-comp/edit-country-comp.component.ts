import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models';

@Component({
  selector: 'app-edit-country-comp',
  templateUrl: './edit-country-comp.component.html',
  styleUrls: ['./edit-country-comp.component.scss']
})
export class EditCountryCompComponent implements OnInit {

  constructor() { }


  @Input('country') country:Country ={
    id:0,
    nom_p:"",
    cont:""
  };

  
  ngOnInit(): void {
    window.addEventListener("click",()=>{
      this.isOpen=false;
    })
  }

  isOpen:boolean=false;

  toggleNewCountry(e:Event){
    e.stopPropagation();
    this.isOpen=!this.isOpen;
  }


  close(){
    this.isOpen=false;
    console.log(this.country);
    
  }


  clickOnModl(e:Event){
    e.stopPropagation();
  }


}
