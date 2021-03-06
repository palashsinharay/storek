import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  item;
  products;
  categories;
  subCategories;
  selectedCategory;
  constructor(private router: Router) {
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
    this.products = JSON.parse(localStorage.getItem('product'));
    this.item = {
      'id': this.products == null ? 1 : (this.products.length + 1),
      'productName': frmProduct.form.value.productName,
      'description':  frmProduct.form.value.description,
      'imageUrl':  frmProduct.form.value.imageUrl.split('*'),
      'price':  frmProduct.form.value.price,
      'stock':  frmProduct.form.value.stock,
      'subCategory': frmProduct.form.value.subCategory,
      'Category': frmProduct.form.value.category
  };
    if (this.products === null) {
      this.products = Array(this.item);
    } else {
      this.products.push(this.item);
    }
    localStorage.setItem('product', JSON.stringify(this.products));
    this.router.navigate(['/listproduct']);
  }

}
