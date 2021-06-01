import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  menu:boolean=false;
  menuProfile:boolean=false;

  toggelProfileMenu(e:Event){

    e.stopPropagation()
    this.menuProfile=!this.menuProfile;
    this.menu=false;

  }



  toggelMenu(e:Event){
    
    e.stopPropagation()
    this.menu=!this.menu
    this.menuProfile=false;
  }


  ngOnInit(): void {
    window.addEventListener("click",()=>{
      this.menu=false;
      this.menuProfile=false;
    })
  }

}
