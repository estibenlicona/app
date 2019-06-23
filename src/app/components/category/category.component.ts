import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  private products:any;
  constructor(private activatedRoute:ActivatedRoute, private _productsService:ProductsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.products = this._productsService.getProductsCategory(params['index']);
    })
  }

}
