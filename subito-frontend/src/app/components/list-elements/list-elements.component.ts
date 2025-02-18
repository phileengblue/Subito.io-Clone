import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

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

  @Input() searchFilters: any = {
    searchQuery: '',
    selectedCategory: 'Tutte le categorie',
    location: ''
  };

  @Output() cardClicked = new EventEmitter<any>();

  cardElement = [
    {
      "id": 1, 
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Palermo - 29 gen alle 20:30",
      "price": "685 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Venezia - 18 gen alle 12:20",
      "price": "556 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Elettronica"
    },
    {
      "id": 2, 
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Divano 3 posti",
      "LocationHour": "Genova - 16 gen alle 11:59",
      "price": "1487 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Giochi"
    },
    {
      "id": 3, 
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Roma - 14 gen alle 21:21",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Lavoro"
    },
    {
      "id": 4, 
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Divano 3 posti",
      "LocationHour": "Bologna - 11 gen alle 8:15",
      "price": "485 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Giochi"
    },
    {
      "id": 5, 
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Palermo - 17 gen alle 22:50",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Elettronica"
    },
    {
      "id": 6, 
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Smartwatch Apple",
      "LocationHour": "Napoli - 22 gen alle 13:11",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Iphone 15",
      "LocationHour": "Torino - 6 gen alle 10:41",
      "price": "116 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Venezia - 10 gen alle 13:34",
      "price": "1238 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Firenze - 14 gen alle 9:29",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Torino - 13 gen alle 12:34",
      "price": "1452 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Console PS5",
      "LocationHour": "Palermo - 27 gen alle 12:11",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Xbox Series X",
      "LocationHour": "Napoli - 27 gen alle 11:27",
      "price": "993 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Firenze - 23 gen alle 10:13",
      "price": "1413 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Torino - 1 gen alle 18:32",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Firenze - 9 gen alle 11:32",
      "price": "853 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Genova - 16 gen alle 12:18",
      "price": "377 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Napoli - 30 gen alle 11:27",
      "price": "1922 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Roma - 2 gen alle 8:13",
      "price": "300 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Palermo - 29 gen alle 17:38",
      "price": "703 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Monitor LG 4K",
      "LocationHour": "Palermo - 11 gen alle 13:16",
      "price": "620 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Bologna - 12 gen alle 17:27",
      "price": "433 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Monitor LG 4K",
      "LocationHour": "Venezia - 15 gen alle 19:39",
      "price": "1765 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Torino - 18 gen alle 14:39",
      "price": "1117 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Milano - 27 gen alle 10:11",
      "price": "782 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Genova - 16 gen alle 11:46",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Palermo - 23 gen alle 15:11",
      "price": "271 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Bologna - 16 gen alle 9:43",
      "price": "610 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Iphone 15",
      "LocationHour": "Torino - 10 gen alle 8:15",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Poltrona moderna",
      "LocationHour": "Bologna - 21 gen alle 14:35",
      "price": "1045 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Venezia - 18 gen alle 10:44",
      "price": "253 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Smartwatch Apple",
      "LocationHour": "Roma - 24 gen alle 16:32",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Bologna - 23 gen alle 21:58",
      "price": "1152 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Venezia - 20 gen alle 19:35",
      "price": "984 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Iphone 15",
      "LocationHour": "Genova - 28 gen alle 17:58",
      "price": "1891 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Genova - 8 gen alle 14:56",
      "price": "1320 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Venezia - 3 gen alle 20:31",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Milano - 18 gen alle 8:56",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Bologna - 22 gen alle 18:42",
      "price": "957 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Torino - 19 gen alle 21:22",
      "price": "745 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Milano - 26 gen alle 13:46",
      "price": "114 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Genova - 20 gen alle 17:49",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Xbox Series X",
      "LocationHour": "Firenze - 12 gen alle 11:11",
      "price": "124 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Divano 3 posti",
      "LocationHour": "Venezia - 2 gen alle 15:27",
      "price": "299 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Iphone 15",
      "LocationHour": "Verona - 21 gen alle 16:45",
      "price": "1587 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Napoli - 16 gen alle 18:18",
      "price": "1917 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Firenze - 19 gen alle 8:13",
      "price": "715 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Verona - 14 gen alle 17:50",
      "price": "1852 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Verona - 19 gen alle 10:58",
      "price": "120 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Genova - 21 gen alle 22:53",
      "price": "74 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Iphone 15",
      "LocationHour": "Venezia - 21 gen alle 8:49",
      "price": "1665 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Smartwatch Apple",
      "LocationHour": "Roma - 15 gen alle 9:52",
      "price": "1657 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Bologna - 2 gen alle 16:32",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Bologna - 10 gen alle 17:51",
      "price": "378 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Genova - 26 gen alle 20:39",
      "price": "399 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Venezia - 8 gen alle 13:20",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Napoli - 8 gen alle 15:11",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Iphone 15",
      "LocationHour": "Milano - 27 gen alle 22:51",
      "price": "1985 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Roma - 24 gen alle 8:13",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Divano 3 posti",
      "LocationHour": "Roma - 13 gen alle 12:46",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Xbox Series X",
      "LocationHour": "Napoli - 15 gen alle 15:53",
      "price": "90 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Napoli - 30 gen alle 9:12",
      "price": "917 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Venezia - 8 gen alle 11:16",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Xbox Series X",
      "LocationHour": "Napoli - 29 gen alle 17:59",
      "price": "313 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Poltrona moderna",
      "LocationHour": "Firenze - 18 gen alle 8:43",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Monitor LG 4K",
      "LocationHour": "Palermo - 4 gen alle 19:24",
      "price": "1887 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Torino - 17 gen alle 14:41",
      "price": "1146 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Palermo - 30 gen alle 16:37",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Venezia - 13 gen alle 22:58",
      "price": "420 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Napoli - 9 gen alle 11:26",
      "price": "1424 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Milano - 29 gen alle 14:29",
      "price": "1786 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Genova - 8 gen alle 15:49",
      "price": "1143 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Xbox Series X",
      "LocationHour": "Roma - 23 gen alle 12:22",
      "price": "1380 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Console PS5",
      "LocationHour": "Verona - 4 gen alle 8:21",
      "price": "642 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Roma - 21 gen alle 22:13",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Milano - 28 gen alle 16:27",
      "price": "1720 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Palermo - 16 gen alle 9:14",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Monitor LG 4K",
      "LocationHour": "Roma - 24 gen alle 21:28",
      "price": "84 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Venezia - 13 gen alle 22:11",
      "price": "1984 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Console PS5",
      "LocationHour": "Roma - 13 gen alle 18:48",
      "price": "1643 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Milano - 21 gen alle 19:22",
      "price": "1612 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Poltrona moderna",
      "LocationHour": "Roma - 17 gen alle 8:20",
      "price": "756 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Iphone 15",
      "LocationHour": "Torino - 25 gen alle 13:36",
      "price": "638 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Torino - 2 gen alle 22:30",
      "price": "539 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Palermo - 19 gen alle 9:54",
      "price": "1990 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Bologna - 7 gen alle 21:42",
      "price": "530 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Monitor LG 4K",
      "LocationHour": "Bologna - 15 gen alle 12:45",
      "price": "1138 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Milano - 9 gen alle 17:17",
      "price": "898 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Poltrona moderna",
      "LocationHour": "Bologna - 30 gen alle 15:56",
      "price": "419 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Console PS5",
      "LocationHour": "Milano - 18 gen alle 22:18",
      "price": "1168 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Divano 3 posti",
      "LocationHour": "Venezia - 16 gen alle 11:30",
      "price": "1760 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Genova - 23 gen alle 14:59",
      "price": "690 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Palermo - 30 gen alle 19:53",
      "price": "202 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Monitor LG 4K",
      "LocationHour": "Genova - 2 gen alle 12:17",
      "price": "1266 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Genova - 11 gen alle 13:32",
      "price": "601 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Xbox Series X",
      "LocationHour": "Verona - 16 gen alle 9:33",
      "price": "1945 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Venezia - 16 gen alle 11:52",
      "price": "1116 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Xbox Series X",
      "LocationHour": "Roma - 20 gen alle 15:49",
      "price": "642 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Roma - 11 gen alle 8:21",
      "price": "242 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Roma - 10 gen alle 13:44",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Palermo - 1 gen alle 15:39",
      "price": "340 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Firenze - 26 gen alle 11:14",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Firenze - 18 gen alle 8:38",
      "price": "939 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Xbox Series X",
      "LocationHour": "Venezia - 3 gen alle 19:48",
      "price": "618 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Firenze - 1 gen alle 21:45",
      "price": "1717 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Venezia - 13 gen alle 13:15",
      "price": "398 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Bologna - 25 gen alle 20:13",
      "price": "1432 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Poltrona moderna",
      "LocationHour": "Genova - 11 gen alle 11:28",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Smartwatch Apple",
      "LocationHour": "Firenze - 14 gen alle 12:26",
      "price": "613 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Torino - 13 gen alle 11:17",
      "price": "1902 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Monitor LG 4K",
      "LocationHour": "Genova - 14 gen alle 10:21",
      "price": "700 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Bologna - 24 gen alle 15:38",
      "price": "1618 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Samsung S22 Ultra",
      "LocationHour": "Palermo - 23 gen alle 18:21",
      "price": "832 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Poltrona moderna",
      "LocationHour": "Napoli - 17 gen alle 21:24",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Venezia - 3 gen alle 11:46",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Roma - 29 gen alle 10:16",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Napoli - 4 gen alle 22:49",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Monitor LG 4K",
      "LocationHour": "Milano - 11 gen alle 15:58",
      "price": "1356 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Bologna - 27 gen alle 22:24",
      "price": "946 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Napoli - 2 gen alle 18:16",
      "price": "1281 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Bicicletta da corsa",
      "LocationHour": "Napoli - 15 gen alle 14:31",
      "price": "1050 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Motori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Milano - 1 gen alle 19:15",
      "price": "",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Console PS5",
      "LocationHour": "Napoli - 4 gen alle 12:22",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Firenze - 22 gen alle 12:59",
      "price": "672 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Milano - 2 gen alle 17:25",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Milano - 14 gen alle 14:49",
      "price": "1386 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Milano - 21 gen alle 19:14",
      "price": "319 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Dispositivo Medico",
      "LocationHour": "Milano - 25 gen alle 18:33",
      "price": "1810 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Genova - 12 gen alle 17:59",
      "price": "427 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Roma - 7 gen alle 18:31",
      "price": "209 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Immobili"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Palermo - 17 gen alle 21:54",
      "price": "1703 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Bologna - 22 gen alle 18:50",
      "price": "699 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Firenze - 1 gen alle 13:39",
      "price": "611 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Milano - 4 gen alle 11:51",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Elettronica"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Monitor LG 4K",
      "LocationHour": "Napoli - 27 gen alle 22:28",
      "price": "1960 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Torino - 11 gen alle 8:54",
      "price": "1923 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Milano - 13 gen alle 18:33",
      "price": "1794 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Divano 3 posti",
      "LocationHour": "Palermo - 25 gen alle 8:41",
      "price": "156 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Divano 3 posti",
      "LocationHour": "Palermo - 24 gen alle 9:13",
      "price": "543 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/1f/1f2a08ae-c407-4ed3-990c-3cb185ebc817?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Palermo - 26 gen alle 12:28",
      "price": "1484 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Arredamento"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "Laptop HP Pavilion",
      "LocationHour": "Torino - 10 gen alle 13:39",
      "price": "931 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Bologna - 21 gen alle 16:57",
      "price": "70 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Lavoro"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "MacBook Pro",
      "LocationHour": "Firenze - 28 gen alle 19:52",
      "price": "1304 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Console PS5",
      "LocationHour": "Palermo - 13 gen alle 11:35",
      "price": "1487 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Cercasi",
      "category": "Salute"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/76/763cfcfe-aee6-48cf-8532-bd9050e277ef?rule=card-desktop-new-small-2x-auto",
      "Title": "Opel Corsa 1.2",
      "LocationHour": "Firenze - 29 gen alle 12:42",
      "price": "750 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Sport"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Iphone 15",
      "LocationHour": "Napoli - 17 gen alle 13:27",
      "price": "1030 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "Scambio",
      "category": "Giochi"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ea/ea02054c-67b8-4df8-aaa2-0654410c4b08?rule=card-desktop-new-small-2x-auto",
      "Title": "Sedia ergonomica",
      "LocationHour": "Palermo - 4 gen alle 14:14",
      "price": "",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In regalo",
      "category": "Market"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/e8/e8107d6e-4908-434c-9abd-98dab1fca8ea?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Roma - 21 gen alle 15:21",
      "price": "948 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In affitto",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Napoli - 13 gen alle 19:50",
      "price": "1262 \u20ac",
      "speditionLogo": "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Accessori"
    },
    {
      "Image": "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/28/285bb541-3be2-41f8-8eca-ae03e33a5b35?rule=card-desktop-new-small-2x-auto",
      "Title": "TV Samsung 65 pollici",
      "LocationHour": "Bologna - 10 gen alle 18:49",
      "price": "1625 \u20ac",
      "speditionLogo": "",
      "heartLogo": "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg",
      "tipoAnnuncio": "In vendita",
      "category": "Market"
    }, 
    {
      Image: "https://www.subito.it/auto/opel-corsa-1-2-75cv-edition-neopatentati-bari-505877215.htm",
      Title: "Opel Corsa 1.2 75cv Edition(neopatentati)",
      LocationHour: "Bari(BA)",
      price: "12.900 €",
      speditionLogo: "https://st2.depositphotos.com/2068621/5998/v/450/depositphotos_59980863-stock-illustration-fast-delivery-truck-icon-on.jpg",
      description: "Usato  06/2021  30521km Benzina Manuale Euro 6",
      rivenditor:"SIMEONE AUTOMOTIVE",
      phoneLogo:"https://st2.depositphotos.com/3665639/6829/v/450/depositphotos_68295675-stock-illustration-pictograph-of-phone-icon.jpg",
      bottonSeeNumber: "MOSTRA NUMERO",
      heartLogo: "https://static.vecteezy.com/ti/vettori-gratis/p1/28860715-cuore-icona-concetto-di-amore-lineare-cuore-icona-vettoriale.jpg"
    },
  ];
  filteredElements = [...this.cardElement];

  totalResults: number = this.filteredElements.length; 

  ngOnInit(): void {
    this.applyFilters();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filters'] || changes['searchFilters']) {
      console.log("Filtri ricevuti in ListElementsComponent:", this.filters, this.searchFilters);
      this.applyFilters();
    }
  }

  onCardClick(item: any): void {
    console.log("Elemento cliccato:", item);
    this.cardClicked.emit(item); 
  }

  applyFilters() {
    console.log("Filtri applicati:", this.filters, this.searchFilters);
  
    this.filteredElements = this.cardElement.filter(card => {
      let tipoAnnuncio = card.tipoAnnuncio ? card.tipoAnnuncio.trim().toLowerCase() : "altro";
      
      let cardCategory = card.category ? card.category.trim().toLowerCase() : "altro";
      let selectedCategory = this.searchFilters.selectedCategory.trim().toLowerCase();
  
      let matchesSpedizione = this.filters.isSpedizioneChecked ? !!card.speditionLogo : true;
      let matchesTitolo = this.filters.isTitoloChecked ? card.Title.toLowerCase().includes("iphone") : true;
      let matchesTipoAnnuncio = tipoAnnuncio === this.filters.selectedTipoAnnuncio.trim().toLowerCase();
      
      let matchesSearchQuery = this.searchFilters.searchQuery
        ? card.Title.toLowerCase().includes(this.searchFilters.searchQuery.toLowerCase())
        : true;
  
      let matchesCategory = (selectedCategory !== "tutte le categorie") 
        ? cardCategory === selectedCategory
        : true;
  
      let matchesLocation = this.searchFilters.location
        ? card.LocationHour.toLowerCase().includes(this.searchFilters.location.toLowerCase())
        : true;
  
      return matchesSpedizione && matchesTitolo && matchesTipoAnnuncio && matchesSearchQuery && matchesCategory && matchesLocation;
    });
    this.totalResults = this.filteredElements.length; // Aggiorna il numero dei risultati

  
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