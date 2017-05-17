import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/products-list.component';
import { ProductDetailComponent } from './products/product-details.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductDetailGuard } from './products/product-guard.service';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule ,
    HttpModule  ,
    RouterModule.forRoot([
        { path:'products', component: ProductListComponent },
        { path:'products/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent },
        { path:'welcome', component: WelcomeComponent },
        { path:'', redirectTo: 'welcome', pathMatch: 'full' },
        { path:'**', redirectTo: 'welcome', pathMatch: 'full' }
      ])
    ],
  declarations: [ 
    AppComponent, 
    WelcomeComponent,
    ProductListComponent, 
    ProductFilterPipe ,
    StarComponent,
    ProductDetailComponent
  ],
  providers:[ProductDetailGuard],
  bootstrap: [ 
    AppComponent 
    ]
})
export class AppModule { }
