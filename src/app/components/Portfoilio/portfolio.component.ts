import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  // closeModal() {
  //   throw new Error('Method not implemented.');
  // }
  isHidden: boolean = true;
  modelImg: string = '';
  hideModel(eleT: EventTarget | null, imgRef: HTMLImageElement): void {
    if (eleT == imgRef) {
      return;
    } else {
      this.isHidden = true;
    }
  }

  imgSrc: string[] = [
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
  ]
}
