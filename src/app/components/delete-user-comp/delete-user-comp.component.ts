import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user-comp',
  templateUrl: './delete-user-comp.component.html',
  styleUrls: ['./delete-user-comp.component.scss']
})
export class DeleteUserCompComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    window.addEventListener("click",()=>{
      this.isOpen=false;
    })
  }

  @Input() id:number=0;
  @Input() name:string="";

  isOpen:boolean=false;


  open(e:Event){
    e.stopPropagation();
    this.isOpen=true;
  }
  onClickModal(e:Event){
    e.stopPropagation();
  }

  close(){
    this.isOpen=false;
  }




  delete(){
    this.close();
    console.log("We Was deleted "+this.name);
    
  }

}
