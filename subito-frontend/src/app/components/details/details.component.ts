import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  currentIndex: number = 0;
  carouselElement!: HTMLElement;
  thumbnails!: NodeListOf<HTMLImageElement>;

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


