import { Routes } from "@angular/router";

export default[

    {path:"", loadComponent:() => import ("../products-list/products-list.component").then(x=> x.ProductsListComponent) },
    {path:"products/:id", loadComponent:() => import("../products-detail/products-detail.component").then(x=> x.ProductsDetailComponent)},
]as Routes;