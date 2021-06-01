import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  constructor() { }

  places=[
    {
      id:1,
      name:"moly akoub",
      city:{
        id:10,
        name:"fes"
      },
      country:"Morocco",
      crate_at:Date.now(),
      updated_at:Date.now()
    },
    {
      id:1,
      name:"moly akoub",
      city:{
        id:10,
        name:"fes",
      country:"Morocco",
      },
      crate_at:Date.now(),
      updated_at:Date.now()
    },    {
      id:1,
      name:"moly akoub",
      city:{
        id:10,
        name:"fes",
        
      },
      country:"Italy",
      crate_at:Date.now(),
      updated_at:Date.now()
    },    {
      id:1,
      name:"moly akoub",
      city:{
        id:10,
        name:"Roma",
      },
      country:"Morocco",
      crate_at:Date.now(),
      updated_at:Date.now()
    },    {
      id:1,
      name:"moly akoub",
      city:{
        id:10,
        name:"fes"
      },
      country:"Morocco",
      crate_at:Date.now(),
      updated_at:Date.now()
    },    {
      id:1,
      name:"moly akoub",
      city:{
        id:10,
        name:"fes"
      },
      country:"Morocco",
      crate_at:Date.now(),
      updated_at:Date.now()
    },    {
      id:1,
      name:"moly akoub",
      city:{
        id:10,
        name:"fes"
      },
      
      country:"Morocco",
      crate_at:Date.now(),
      updated_at:Date.now()
    },    {
      id:1,
      name:"moly akoub",
      city:{
        id:10,
        name:"fes"
      },
      
      country:"Morocco",
      crate_at:Date.now(),
      updated_at:Date.now()
    }
  ]

  ngOnInit(): void {
  }

}
