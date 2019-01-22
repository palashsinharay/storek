import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  categories;
  constructor() {
    this.categories = JSON.parse(localStorage.getItem('category'));
  }
  ngOnInit() {
  }

}
