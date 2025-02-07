import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filters = {
    isSpedizioneChecked: false,
    isTitoloChecked: false,
    selectedTipoAnnuncio: 'In vendita'
  };

  searchFilters = {
    searchQuery: '',
    selectedCategory: 'Tutte le categorie',
    location: ''
  };

  onFiltersChanged(newFilters: any) {
    this.filters = { ...newFilters };
    console.log("Filtri ricevuti da FilterSidebarComponent:", this.filters);
  }

  onSearchChanged(searchData: any) {
    this.searchFilters = { ...searchData };
    console.log("Filtri ricevuti da SearchBarComponent:", this.searchFilters);
  }
}
