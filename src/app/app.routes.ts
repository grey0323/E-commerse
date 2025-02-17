import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'products', loadChildren:()=> import("./products/features/products-shell/products.routes")},
    {path:'**',loadChildren:()=> import("./products/features/products-shell/products.routes") }
];
