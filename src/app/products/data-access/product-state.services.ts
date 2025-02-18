import { productServices } from './products.services';
import { inject, Injectable } from "@angular/core";
import { product } from "../../interfaces/product";
import {signalSlice} from 'ngxtension/signal-slice'
import { map, Subject } from 'rxjs';



interface State{
    products : product[],
    status: 'loading' | 'success'|'error',
    page:number 
}

@Injectable()



export class ProductStateServices{

    private _productServices = inject(productServices);
    private initialState: State ={
        products:[],
        status:'loading' as const,
        page:1
    }


    state = signalSlice({
        initialState: this.initialState,
        sources:[
            this._productServices.getProducts(1).pipe(map((products) => ({products, status:'success' as const}))),

        ]
    });


}

