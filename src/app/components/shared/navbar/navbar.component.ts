import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
private categories:any[] = [];
private products:any[] = [];
private filters:any[] = [];
  constructor( private router:Router, private _productsService:ProductsService) { }

  ngOnInit() {
    this._productsService.getData().subscribe( (res:any ) => {
      this.categories = res.categories;
      this.products = res.products;
      this.filters = res.filters;
    });
  }

  search(texto:string){
    this.router.navigate(['/search', texto]);
  }

  filterCategory(index:number){
    this.router.navigate(['/category', index]);
  }

  filterProduct(index:number){
    console.log(index)
  }

}
