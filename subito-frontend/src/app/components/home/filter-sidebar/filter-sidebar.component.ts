import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css']
})
export class FilterSidebarComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  isSpedizioneChecked: boolean = false;
  isTitoloChecked: boolean = false;
  selectedTipoAnnuncio: string = 'In vendita';

  tipiAnnuncio: string[] = ['In vendita', 'In regalo', 'In affitto', 'In affitto per vacanze', 'Cercasi'];

  emitFilterChanges(): void {
    console.log("Filtri aggiornati:", {
      isSpedizioneChecked: this.isSpedizioneChecked,
      isTitoloChecked: this.isTitoloChecked,
      selectedTipoAnnuncio: this.selectedTipoAnnuncio
    });

    this.filtersChanged.emit({
      isSpedizioneChecked: this.isSpedizioneChecked,
      isTitoloChecked: this.isTitoloChecked,
      selectedTipoAnnuncio: this.selectedTipoAnnuncio
    });
  }

  updateTipoAnnuncio(tipo: string): void {
    this.selectedTipoAnnuncio = tipo;
    console.log("Tipo di annuncio selezionato:", this.selectedTipoAnnuncio);
    this.emitFilterChanges();
  }
}
