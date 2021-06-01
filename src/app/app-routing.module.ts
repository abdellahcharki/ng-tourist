import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from './pages/add-city/add-city.component';
import { AddPlaceComponent } from './pages/add-place/add-place.component';
import { CityComponent } from './pages/city/city.component';
import { CityesComponent } from './pages/cityes/cityes.component';
import { CountrysComponent } from './pages/countrys/countrys.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavComponent } from './pages/fav/fav.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlaceComponent } from './pages/place/place.component';
import { PlacesComponent } from './pages/places/places.component';
import { RegsterComponent } from './pages/regster/regster.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"cityes",component:CityesComponent},
  {path:"cityes/add",component:AddCityComponent},
  {path:"cityes/:id",component:CityComponent},
  {path:"places",component:PlacesComponent},
  {path:"places/add",component:AddPlaceComponent},
  {path:"users",component:UsersComponent},
  {path:"places/:id",component:PlaceComponent},
  {path:"countrys",component:CountrysComponent},
  {path:"profile",component:MyProfileComponent},
  {path:"favorite",component:FavComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegsterComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
