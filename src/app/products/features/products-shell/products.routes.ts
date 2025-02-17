import { Routes } from "@angular/router";

export default[

    {path:"", loadComponent:() => import ("../products-list/products-list.component").then(x=> x.ProductsListComponent) }

]as Routes;