import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BaseHttpServices } from "../../shared/data-access/base-http-services";
import { Observable } from "rxjs";
import { product } from "../../interfaces/product";

@Injectable({providedIn:'root'})

export class productServices extends BaseHttpServices{

getProducts():Observable<product[]>{
    return this._http.get<product[]>(`${this._apiurl}/products/`)
}

}