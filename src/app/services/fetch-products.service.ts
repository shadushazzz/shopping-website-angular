import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})



export class FetchProductsService {

  constructor(private http: HttpClient) {
  }


  getAllProducts (url: string)  : Observable<Product[]> {
    return this.http.get<any[]>(url);
  }
}
