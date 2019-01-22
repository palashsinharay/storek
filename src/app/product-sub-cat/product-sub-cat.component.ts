import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-product-sub-cat',
  templateUrl: './product-sub-cat.component.html',
  styleUrls: ['./product-sub-cat.component.css']
})
export class ProductSubCatComponent implements OnInit {

  products;
  subcat;
  constructor(private route: ActivatedRoute) {
  this.products = JSON.parse(localStorage.getItem('product'));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.subcat = params.get('subcat');
    });
  }

}
