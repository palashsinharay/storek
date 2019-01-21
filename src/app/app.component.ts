import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeking';
  category;
  constructor() {
    this.category = [
    {'name' : 'electronics', 'child' : ['Mobiles', 'Tablets', 'Washing Machine']},
    {'name' : 'Baby Care', 'child': ['Diapers', 'Baby Cloths']},
    {'name' : 'Beauty Care', 'child': ['Lip care', 'Creams and lotions']}
  ];
    localStorage.setItem('category', JSON.stringify(this.category));
  }
}
