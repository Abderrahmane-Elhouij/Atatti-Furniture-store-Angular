import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Product } from "../models/products";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProductsService{

    constructor(private http:HttpClient){}

    private baseUrl = "http://localhost:8080/api/products";
    getProuctsWithAssets(){
        return this.http.get<Product>("http://localhost:8080/api/products/assets");
    }


    getProuctsWithImage(){
        return this.http.get("http://localhost:8080/api/products/image");

    }


    getProductByRef(ref: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/ref/${ref}`);
    }





}
