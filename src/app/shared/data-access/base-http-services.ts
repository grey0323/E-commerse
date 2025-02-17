import { environment } from './../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:"root"
    }
)

export class BaseHttpServices{

_http = inject(HttpClient)
_apiurl = environment.Apiurl;


}