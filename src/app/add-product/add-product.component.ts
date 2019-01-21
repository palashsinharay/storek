import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product;
  categories;
  subCategories;
  selectedCategory;
  constructor() {
    this.categories = JSON.parse(localStorage.getItem('category'));
  }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }
  // sub(cat) {
  //   console.log(cat);
  //   this.selectedCategory = cat.child;
  // }

  submit(frmProduct) {
    this.product = JSON.parse(localStorage.getItem('product'));
    if (this.product === null) {
      this.product = Array(frmProduct.form.value);
    } else {
      this.product.push(frmProduct.form.value);
    }
    localStorage.setItem('product', JSON.stringify(this.product));
  }

}
