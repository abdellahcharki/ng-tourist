import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Country, ResponsCountry } from 'src/app/core/models';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit , AfterViewInit{



  constructor(private cs:CountryService) { }


	countrys:Country[]= [];

  @ViewChild('img') img: ElementRef = new ElementRef(null);
  @ViewChild('input') input: ElementRef = new ElementRef(null);



  ngOnInit(): void {

this.doGet()
  }


  ngAfterViewInit(){
    this.input.nativeElement.addEventListener("change",(e:any)=>{
		this.img.nativeElement.src = URL.createObjectURL(e.target.files[0]);
    })
  }




	doGet(){

		this.cs.findAll().subscribe(res=>{



			this.cs.findAll().subscribe(res=>{
				res.forEach((c:ResponsCountry)=>{
					this.countrys.push({countCitys:c.countCitys, ...c.pays });
				})

			});


		})


	}

}
