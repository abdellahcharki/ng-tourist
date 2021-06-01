import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-add-country-comp',
  templateUrl: './add-country-comp.component.html',
  styleUrls: ['./add-country-comp.component.scss']
})
export class AddCountryCompComponent implements OnInit {

  constructor(private cs:CountryService) { }



  continents=[
    "Africa",
    "Europe",
    "Antarctica",
    "Asia",
    "North America",
    "South America"
  ]

  country:Country={
    nom_p:'',
    cont:""
  }



  c:Country={nom_p:'1',cont:"2"};

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
  }


  clickOnModl(e:Event){
    e.stopPropagation();
  }

 

addCountry(){
  
  this.cs.addCountry(this.country).subscribe(res=>{
    console.log(this.close());
     
  })
  
}

}
