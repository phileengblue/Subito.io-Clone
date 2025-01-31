import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchChanged = new EventEmitter<any>();
  
  searchQuery: string = '';
  selectedCategory: string = 'Tutte le categorie';
  location: string = '';

  emitSearchChanges() {
    this.searchChanged.emit({
      searchQuery: this.searchQuery,
      selectedCategory: this.selectedCategory,
      location: this.location
    });
  }
}
