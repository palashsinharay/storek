import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSubCatComponent } from './product-sub-cat/product-sub-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    HomeComponent,
    ListProductComponent,
    ProductDetailsComponent,
    ProductSubCatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent
    },
    {
      path: 'listproduct',
      component: ListProductComponent
    },
    {
      path: 'addproduct',
      component: AddProductComponent
    },
    {
      path: 'editproduct/:pid',
      component: EditProductComponent
    },
    {
      path: 'productsubcat/:subcat',
      component: ProductSubCatComponent
    },
    {
      path: 'productdetails/:pid',
      component: ProductDetailsComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
