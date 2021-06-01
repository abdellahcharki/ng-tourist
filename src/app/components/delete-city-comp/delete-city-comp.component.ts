import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-city-comp',
  templateUrl: './delete-city-comp.component.html',
  styleUrls: ['./delete-city-comp.component.scss']
})
export class DeleteCityCompComponent implements OnInit {

  constructor() { }



  @Input() city={
    id:0,
    name:''
  }


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


}
