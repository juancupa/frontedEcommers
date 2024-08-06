import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  private apiUrl : string ="http://localhost:8088/api/v1/home";

  constructor(private httpClient: HttpClient) { }


  getProducts():Observable<Product[]>{

    return this.httpClient.get<Product[]>(this.apiUrl)
  }
}
