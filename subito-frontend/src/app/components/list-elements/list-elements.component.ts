import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent implements OnInit, OnChanges { 

  @Input() filters: any = {
    isSpedizioneChecked: false,
    isTitoloChecked: false,
    selectedTipoAnnuncio: 'In vendita'
  };

  titleElement = [
    {
      subtitle: "13.065.387 risultati",
      title: "Annunci"
    },
  ]

  cardElement = [

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      Title: "Iphone 15",
      LocationHour: "Casola Valserio(RA) - 31 gen alle 12:04",
      price: "750 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In vendita"
    },
    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      Title: "Iphone 15",
      LocationHour: "Casola Valserio(RA) - 31 gen alle 12:04",
      price: "750 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In vendita"
    },{
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      Title: "Iphone 15",
      LocationHour: "Casola Valserio(RA) - 31 gen alle 12:04",
      price: "750 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In vendita"
    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      Title: "potrona",
      LocationHour: "Napoli(NA) - Oggi alle 10:55",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In regalo"
    },
    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      Title: "potrona",
      LocationHour: "Napoli(NA) - Oggi alle 10:55",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In regalo"
    }, {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      Title: "potrona",
      LocationHour: "Napoli(NA) - Oggi alle 10:55",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In regalo"
    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      Title: "Dispositivo Medico solimed",
      LocationHour: "Frascati(RM) - Oggi alle 10:55",
      price: "2.000 €",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "Cercasi"

    },
    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      Title: "Dispositivo Medico solimed",
      LocationHour: "Frascati(RM) - Oggi alle 10:55",
      price: "2.000 €",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "Cercasi"

    },  {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      Title: "Dispositivo Medico solimed",
      LocationHour: "Frascati(RM) - Oggi alle 10:55",
      price: "2.000 €",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "Cercasi"

    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      Title: "Samsung S22 Ultra",
      LocationHour: "Santo Stefano al Mare(IM) - Oggi alle 10:55",
      price: "500 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In affitto"

    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      Title: "Samsung S22 Ultra",
      LocationHour: "Santo Stefano al Mare(IM) - Oggi alle 10:55",
      price: "500 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In affitto"

    }, {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      Title: "Samsung S22 Ultra",
      LocationHour: "Santo Stefano al Mare(IM) - Oggi alle 10:55",
      price: "500 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In affitto"

    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      Title: "TV Samsung 65 pollici",
      LocationHour: "Brindisi(BR) - Oggi alle 10:55",
      price: "200 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In affitto per vacanze"
    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      Title: "TV Samsung 65 pollici",
      LocationHour: "Brindisi(BR) - Oggi alle 10:55",
      price: "200 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In affitto per vacanze"
    },
    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      Title: "TV Samsung 65 pollici",
      LocationHour: "Brindisi(BR) - Oggi alle 10:55",
      price: "200 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In affitto per vacanze"
    },

    {
      Image: "https://www.subito.it/auto/opel-corsa-1-2-75cv-edition-neopatentati-bari-505877215.htm",
      Title: "Opel Corsa 1.2 75cv Edition(neopatentati)",
      LocationHour: "Bari(BA)",
      price: "12.900 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      description: "Usato  06/2021  30521km Benzina Manuale Euro6",
      rivenditor:"SIMEONE AUTOMOTIVE",
      phoneLogo:"https://st2.depositphotos.com/3665639/6829/v/450/depositphotos_68295675-stock-illustration-pictograph-of-phone-icon.jpg",
      bottonSeeNumber: "MOSTRA NUMERO",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      tipoAnnuncio: "In vendita"

    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      Title: "Iphone 15",
      LocationHour: "Casola Valserio(RA) - 31 gen alle 12:04",
      price: "750 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg"
    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      Title: "potrona",
      LocationHour: "Napoli(NA) - Oggi alle 10:55",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg"
    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      Title: "Dispositivo Medico solimed",
      LocationHour: "Frascati(RM) - Oggi alle 10:55",
      price: "2.000 €",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg"
    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      Title: "Samsung S22 Ultra",
      LocationHour: "Santo Stefano al Mare(IM) - Oggi alle 10:55",
      price: "500 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg"
    },

    {
      Image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      Title: "TV Samsung 65 pollici",
      LocationHour: "Brindisi(BR) - Oggi alle 10:55",
      price: "200 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg"
    },

    {
      Image: "https://www.subito.it/auto/opel-corsa-1-2-75cv-edition-neopatentati-bari-505877215.htm",
      Title: "Opel Corsa 1.2 75cv Edition(neopatentati)",
      LocationHour: "Bari(BA)",
      price: "12.900 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      description: "Usato  06/2021  30521km Benzina Manuale Euro6",
      rivenditor:"SIMEONE AUTOMOTIVE",
      phoneLogo:"https://st2.depositphotos.com/3665639/6829/v/450/depositphotos_68295675-stock-illustration-pictograph-of-phone-icon.jpg",
      bottonSeeNumber: "MOSTRA NUMERO",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg"
    },

  ];
  filteredElements = [...this.cardElement];

  ngOnInit(): void {
    this.applyFilters();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filters']) {
      console.log("Filtri ricevuti in ListElementsComponent:", this.filters);
      this.applyFilters();
    }
  }

  applyFilters() {
    console.log("Filtri applicati:", this.filters);

    this.cardElement.forEach(card => {
      if (!card.tipoAnnuncio) {
        console.warn("⚠️ Annuncio senza tipoAnnuncio:", card);
      }
    });

    this.filteredElements = this.cardElement.filter(card => {
      let tipoAnnuncio = card.tipoAnnuncio ? card.tipoAnnuncio.trim().toLowerCase() : "altro"; 
  
      let matchesSpedizione = this.filters.isSpedizioneChecked ? !!card.speditionLogo : true;
      let matchesTitolo = this.filters.isTitoloChecked ? card.Title.toLowerCase().includes("iphone") : true;
      let matchesTipoAnnuncio = tipoAnnuncio === this.filters.selectedTipoAnnuncio.trim().toLowerCase();
  
      return matchesSpedizione && matchesTitolo && matchesTipoAnnuncio;
    });
  
    console.log("Elementi filtrati:", this.filteredElements);
  }
  
  
}


//Base dell'array di oggetti della lista degli elementi


//{
  //Image: "",
  //Title: "",
  //LocationHour: "",
  //price: "",
  //speditionLogo: "",
  //description: "",
  //rivenditor:"",
  //phoneLogo:"",
  //bottonSeeNumber: "",
  //heartLogo: ""
//},

// Sotto l'ngIf vanno: price, speditionlogo, description, rivenditor, phonelogo, bottonSeeNumber