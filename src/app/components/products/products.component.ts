import { Injectable, Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
@Injectable({
  providedIn: 'root'
})
export class ProductsComponent implements OnInit{
  //pendiente crear interfaces para validar estos tipos de obejetos
  private products:any[] = [];
  constructor(private _productsService:ProductsService) {}

  ngOnInit() {
    this.get();
  }

  get(){
    this._productsService.getData().subscribe( (res:any ) => {
      this.products = res.products;
    });
  }
  setProducts(products:any[]){
    this.products = products;
  }

}
