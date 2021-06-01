import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CityesComponent } from './pages/cityes/cityes.component';
import { PlacesComponent } from './pages/places/places.component';
import { CountrysComponent } from './pages/countrys/countrys.component';
import { PlaceRowComponent } from './components/place-row/place-row.component';
import { AddCountryCompComponent } from './components/add-country-comp/add-country-comp.component';
import { EditCountryCompComponent } from './components/edit-country-comp/edit-country-comp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlaceComponent } from './pages/place/place.component';
import { CityComponent } from './pages/city/city.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddCityComponent } from './pages/add-city/add-city.component';
import { AddPlaceComponent } from './pages/add-place/add-place.component';
import { UsersComponent } from './pages/users/users.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { DeleteCityCompComponent } from './components/delete-city-comp/delete-city-comp.component';
import { DeleteUserCompComponent } from './components/delete-user-comp/delete-user-comp.component';
import { DeleteCountryCompComponent } from './components/delete-country-comp/delete-country-comp.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { EditCityComponent } from './pages/edit-city/edit-city.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './core/services/auth.service';
import { HomeComponent } from './pages/home/home.component';
import { RegsterComponent } from './pages/regster/regster.component';
import { FavComponent } from './pages/fav/fav.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './components/footer/footer.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CityesComponent,
    PlacesComponent,
    CountrysComponent,
    PlaceRowComponent,
    AddCountryCompComponent,
    EditCountryCompComponent,
    DashboardComponent,
    PlaceComponent,
    CityComponent,
    NotFoundComponent,
    AddCityComponent,
    AddPlaceComponent,
    UsersComponent,
    MyProfileComponent,
    DeleteCityCompComponent,
    DeleteUserCompComponent,
    DeleteCountryCompComponent,
    EditCityComponent,
    LoginComponent,
    HomeComponent,
    RegsterComponent,
    FavComponent,
    SearchComponent,
    FooterComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
		BrowserAnimationsModule,
		SlickCarouselModule,
		ToastrModule.forRoot({

				timeOut: 2000,
				positionClass: 'toast-bottom-right',
				enableHtml:true,
		}),
    CoreModule
   ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
