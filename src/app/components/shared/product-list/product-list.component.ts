import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
 @Input() products: any = {};
  constructor() { }

  ngOnInit() {
  }

}
