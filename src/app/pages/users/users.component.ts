import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }


  users=[
    {
      id:1,
      name:"abdellah charki",
      avatar:"",
      isAdmin:false,
      email:"abdellah0charki@gmail.com",
      created_at:Date.now()
    },{
      id:2,
      name:"hicham bayad",
      avatar:"",
      isAdmin:true,
      email:"hicham.bayad@usmba.ac.ma",
      created_at:Date.now()
    },
    {
      id:3,
      name:"Anass yakoubi",
      avatar:"",
      isAdmin:false,
      email:"anass.yakoubi@yahoo.com",
      created_at:Date.now()
    },
    {
      id:3,
      name:"Abderahman droit",
      avatar:"",
      isAdmin:true,
      email:"abderahman@gmail.com",
      created_at:Date.now()
    },
    {
      id:4,
      name:"Kaoutar garti",
      avatar:"",
      isAdmin:true,
      email:"kaoutar.garti@gmail.com",
      created_at:Date.now()
    },
    {
      id:5,
      name:"Hajar achmlal",
      avatar:"",
      isAdmin:false,
      email:"Hajar.achmlal@gmail.com",
      created_at:Date.now()
    }
  ]


  ngOnInit(): void {
  }



  changeUserRol(){

  }

}
