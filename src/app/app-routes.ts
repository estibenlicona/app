import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';

const APP_ROUTES: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search/:text', component: SearchComponent },
  { path: 'category/:index', component: CategoryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'products' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
