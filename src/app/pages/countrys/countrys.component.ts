import { Component, OnInit} from '@angular/core';
import { Country,ResponsCountry } from 'src/app/core/models';
import { CountryService } from 'src/app/core/services/country.service';



import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-countrys',
  templateUrl: './countrys.component.html',
  styleUrls: ['./countrys.component.scss']
})
export class CountrysComponent implements OnInit {

  continents=[
    "Africa",
    "Europe",
    "Antarctica",
    "Asia",
    "North America",
    "South America"
  ]

	countrys:Country[]=[];
	c:Country={nom_p:'',cont:''};
	countryIndex:number=-1;

  constructor(private cs:CountryService,private toast:ToastrService) { }
  ngOnInit(): void {

		window.addEventListener("click",()=>{
				this.close()
		})


    this.doGet();
  }



  isAdd:boolean=false;
	isEdit:boolean=false;
	isDelete:boolean=false;






  clickOnModl(e:Event){
    e.stopPropagation();
  }




	openAdd(e:Event){
		this.c.nom_p='';
		this.c.cont='';
		e.stopPropagation();
		this.isAdd=true;
	}

	open(id:number,e:Event){

		e.stopPropagation();
		this.c= this.countrys[this.findIndex(id)]


	}


	openEdit(id:number,e:Event){
		this.c.id=id;
		this.open(id,e);
		this.isEdit=true;
	}



	openDelete(id:number,e:Event){
		this.open(id,e);
		this.isDelete=true;
	}





	close(){
		this.isAdd=false;
		this.isEdit=false;
		this.isDelete=false;
	}




  doGet(){
		var status:boolean=false;
    this.cs.findAll().subscribe(res=>{
		res.forEach((c:ResponsCountry)=>{
			this.countrys.push({countCitys:c.countCitys, ...c.pays });
		})
	});

	}


	findIndex(id:number):number{
		var _index:number=-1;
		this.countrys.map((c,i)=>{
			if(c.id==id) _index=i;
		});

		return _index;
	}

  doDelete(id:number){



    this.cs.deleteCountryById(id).subscribe(
		res=>{let i = this.findIndex(id);
			this.countrys.splice(i,1);
			this.close();

			this.toast.success(`country <strong>${ this.c.nom_p }</strong> was deleted`)

		})
}


  doPost(){
    this.cs.addCountry(this.c).toPromise().then(res=>{
		console.log(res);
		res.countCitys=0;
		this.countrys.push(res);
		this.close();
		this.toast.success( `<strong>${res.nom_p} </strong> was aded sussec`);
		this.c.cont='';
		this.c.nom_p='';
	}).catch(err=>{
		this.close();
		this.toast.warning(`<strong>${this.c.nom_p} </strong> was alrady exist`);
	})
  }


  doPut(){



	this.cs.updateCountryById(this.countrys[this.findIndex(this.c.id||0)]).toPromise().then(res=>{

		this.close();
		this.toast.success(`<strong>${this.c.nom_p} </strong> was updated`);
	//	this.doGet();
	}).catch(err=>{
		this.close();
		this.toast.warning(`<strong>${this.c.nom_p} </strong> was alrady exist`);
	})



  }



}
