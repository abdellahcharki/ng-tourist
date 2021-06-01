import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/core/models';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-delete-country-comp',
  templateUrl: './delete-country-comp.component.html',
  styleUrls: ['./delete-country-comp.component.scss']
})
export class DeleteCountryCompComponent implements OnInit {

  constructor(private cs:CountryService,private router:Router) { }

  
  @Input('country') country:Country ={
    
    nom_p:"",
    cont:''
  };


  isOpen:boolean=false;




  ngOnInit(): void {
    window.addEventListener("click",()=>{
      this.isOpen=false;
    })
  }



  open(e:Event){
    e.stopPropagation();
    this.isOpen=true;
  }



  close(){
    this.isOpen=false;    
  }


  clickOnModl(e:Event){
    e.stopPropagation();
  }



  doDelete(){
    //this.cs.deleteCountryById(id).subscribe(res=>{})

    
    this.cs.deleteCountryById(this.country.id).subscribe(res=>{
      this.close();
    })
  }

}
