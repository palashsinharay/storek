import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product;
  constructor() {
  }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(frmProduct) {
    if (localStorage.length < 1) {
      this.product = Array(frmProduct.form.value);
    } else {
      this.product = JSON.parse(localStorage.getItem('product'));
      this.product.push(frmProduct.form.value);
    }
    localStorage.setItem('product', JSON.stringify(this.product));
  }

}
