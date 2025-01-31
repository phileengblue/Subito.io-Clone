import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css']
})
export class FilterSidebarComponent {
  @Output() filtersChanged = new EventEmitter<any>();
  
  isSpedizioneChecked = false;
  isTitoloChecked = false;
  selectedTipoAnnuncio = 'In vendita';
  tipiAnnuncio = ['In vendita', 'In regalo', 'In affitto', 'In affitto per vacanze', 'Cercasi'];

  emitFilterChanges() {
    this.filtersChanged.emit({
      isSpedizioneChecked: this.isSpedizioneChecked,
      isTitoloChecked: this.isTitoloChecked,
      selectedTipoAnnuncio: this.selectedTipoAnnuncio
    });
  }
}
