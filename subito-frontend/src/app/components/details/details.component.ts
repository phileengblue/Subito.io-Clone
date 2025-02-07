import { Component, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements AfterViewInit {
  currentIndex: number = 0;
  carouselElement!: HTMLElement;
  thumbnails!: NodeListOf<HTMLImageElement>;

  cardData: any = {
    id: '',
    title: '',
    price: '',
    image: '',
    location: '',
    description: '',
    images: [] 
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cardData.id = params.get('id');
    });

    this.route.queryParams.subscribe(params => {
      this.cardData.title = params['title'];
      this.cardData.price = params['price'];
      this.cardData.image = params['image'];
      this.cardData.location = params['location'];
      this.cardData.description = params['description'];
      this.cardData.images = params['images'] ? JSON.parse(params['images']) : [params['image']]; // Se più immagini, le recuperiamo
    });
  }

  ngAfterViewInit(): void {
    this.carouselElement = document.getElementById('carouselExample')!;
    this.thumbnails = document.querySelectorAll('.carousel-thumbnails img');
    
    this.setupCarouselListener();
    this.setupThumbnailClick();
  }

  setupCarouselListener(): void {
    this.carouselElement.addEventListener('slid.bs.carousel', (event: any) => {
      this.currentIndex = event.to;
      this.updateActiveThumbnail();
    });
  }

  setupThumbnailClick(): void {
    this.thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        const carousel = bootstrap.Carousel.getOrCreateInstance(this.carouselElement);
        carousel.to(index);
      });
    });
  }

  updateActiveThumbnail(): void {
    this.thumbnails.forEach((thumbnail, index) => {
      if (index === this.currentIndex) {
        thumbnail.classList.add('active');
      } else {
        thumbnail.classList.remove('active');
      }
    });
  }
}
