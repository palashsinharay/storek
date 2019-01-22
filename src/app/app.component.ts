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
    // tslint:disable-next-line:max-line-length
    {'name' : 'Electronics',
    'child' : [
      {'id': 1 , 'name': 'Mobiles'},
      {'id': 2 , 'name': 'Tablets'},
      {'id': 3 , 'name': 'Washing Machine'} ]},
    {'name' : 'Baby Care',
    'child': [
      {'id': 4 , 'name': 'Diapers'},
      {'id': 5 , 'name': 'Baby Cloths'}]},
    {'name' : 'Beauty Care',
    'child': [
      {'id': 6 , 'name': 'Lip care'},
      {'id': 7 , 'name': 'Creams and lotion'}]}
  ];
    localStorage.setItem('category', JSON.stringify(this.category));
  }
}
