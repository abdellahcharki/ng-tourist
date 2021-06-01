import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-row',
  templateUrl: './place-row.component.html',
  styleUrls: ['./place-row.component.scss']
})
export class PlaceRowComponent implements OnInit {

  constructor() { }
  @Input("places") places=[];

  ngOnInit(): void {
  }

}
