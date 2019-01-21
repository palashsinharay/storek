import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeking';
  catagory;
  constructor() {
    this.catagory = {
    'electronics': ['Mobiles', 'Tablets', 'Washing Machine'],
    'Baby Care': ['Diapers', 'Baby Cloths'],
    'Beauty Care': ['Lip care', 'Creams and lotions']
  };
    localStorage.setItem('catagory', JSON.stringify(this.catagory));
  }
}
