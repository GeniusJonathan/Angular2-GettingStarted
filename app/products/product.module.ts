import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './products-list.component';
import { ProductDetailComponent } from './product-details.component';
import { ProductDetailGuard } from './product-guard.service';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path:'products', component: ProductListComponent },
            { path:'products/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent }
        ])
    ],
    declarations:[
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    providers:[
        ProductService,
        ProductDetailGuard
    ]
})

export class ProductModule{

}