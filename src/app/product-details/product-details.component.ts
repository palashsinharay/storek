import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pid;
  products;
  item;
  constructor(private route: ActivatedRoute) {
    this.products = JSON.parse(localStorage.getItem('product'));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pid = params.get('pid');
      this.item = this.products.find(obj => obj.id == this.pid);
      // console.log(this.pid);
      // console.log(this.item);
    });
  }

}
