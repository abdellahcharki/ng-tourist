import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    window.addEventListener("click",()=>{
      this.isOpen=false;
    })
  }



  isOpen:boolean =false;



  toggelModal(e:Event){
    e.stopPropagation();
    this.isOpen=!this.isOpen;
  }

  clickOnModal(e:Event){
    e.stopPropagation();
  }

  close(){
    this.isOpen=false;
  }

}
