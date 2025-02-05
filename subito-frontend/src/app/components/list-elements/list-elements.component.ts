import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent implements OnInit { 

  titleElement = [
    {
      subtitle: "13.065.387 risultati",
      title: "Annunci"
    },
  ]

  cardElement = [
    {
      Image: "",
    },
  ]


  ngOnInit(): void {
    
  }
}
