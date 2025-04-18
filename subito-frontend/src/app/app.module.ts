import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FilterSidebarComponent } from './components/home/filter-sidebar/filter-sidebar.component';
import { SearchBarComponent } from './components/home/search-bar/search-bar.component';
import { ListElementsComponent } from './components/list-elements/list-elements.component';
import { DetailsComponent } from './components/details/details.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { FooterComponent } from './components/home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterSidebarComponent,
    SearchBarComponent,
    ListElementsComponent,
    DetailsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
