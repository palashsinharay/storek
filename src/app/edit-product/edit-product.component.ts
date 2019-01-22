import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  pid;
  item;
  products;
  categories;
  subCategories;
  selectedCategory;
  constructor(private route: ActivatedRoute) {
    this.products = JSON.parse(localStorage.getItem('product'));
    this.categories = JSON.parse(localStorage.getItem('category'));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pid = params.get('pid');
      this.item = this.products.find(t => t.id == this.pid);
      this.selectedCategory = this.item.Category;
      // console.log(this.pid);
      // console.log(this.item);
    });
  }

  edit(frmProduct) {
    console.log(frmProduct.form.value);
    // return;
    this.products = JSON.parse(localStorage.getItem('product'));
    this.item = {
      'id': frmProduct.form.value.id,
      'productName': frmProduct.form.value.productName,
      'description':  frmProduct.form.value.description,
      'imageUrl':  frmProduct.form.value.imageUrl,
      'price':  frmProduct.form.value.price,
      'stock':  frmProduct.form.value.stock,
      'subCategory': frmProduct.form.value.subCategory
  };
  console.log(this.item);
    if (this.products === null) {
      this.products = Array(this.item);
    } else {
      this.products.splice(this.pid - 1, 1 , this.item);
    }
    localStorage.setItem('product', JSON.stringify(this.products));
  }

}
