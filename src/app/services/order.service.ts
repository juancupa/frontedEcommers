import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../common/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl : string ="http://localhost:8088/api/v1/orders";
  private update : string ='update/state/order';

  constructor(private httClient:HttpClient) { }

  createOrder(order:Order):Observable<Order>{

    return this.httClient.post<Order>(this.apiUrl, order);
  }

  updateOrder(formData: any):Observable<any>{
    return this.httClient.post(`${this.apiUrl}/${this.update}`,formData);
  }

  getOrderByUser(userId:number):Observable<Order[]>{

    return this.httClient.get<Order[]>(`${this.apiUrl}//byUser/${{userId}}`);
  }

  getOrderById(orderId:number):Observable<Order>{
    return this.httClient.get<Order>(`${this.apiUrl}/${orderId}`)
  }
}


