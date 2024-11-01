import { Routes } from '@angular/router';

import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';

export const routes: Routes =
  [{ path: '', component: ProductsPageComponent },
  { path: 'cart', component: CartpageComponent }]
