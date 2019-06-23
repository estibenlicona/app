import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService implements OnInit {

  private products:any[] = [];

  constructor(private http:HttpClient){

    this.getData().subscribe( (res:any ) => {
      this.products = res.products;
    });
  }

  ngOnInit() {
  }
  getData(){
    return this.http.get('../../assets/data.json');
  }

  searchProducts( texto:string ){
    let productsArray:any[] = [];
    texto = texto.toLowerCase();

    for (let product of this.products) {
      let name = product.name.toLowerCase();

      if (name.indexOf(texto) >= 0) {
          productsArray.push(product);
      }
    }
    return productsArray;
  }

  getProductsCategory(index:number){
      return this.products.filter( (item) => {
        for (let u = 0; u < item.categories.length; u++) {
              if (item.categories[u] == index) {
                  return true;
             }
         }
      })
  }
}
