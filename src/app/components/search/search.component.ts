import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private products:any[] = [];
  private text:string;
  constructor(
    private activatedRoute:ActivatedRoute,
    private _productsService:ProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.products = this._productsService.searchProducts( params['text']);
      this.text = params['text'];
    })
  }

}
