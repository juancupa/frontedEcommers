import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = 'http://localhost:8088/api/v1/users';

  constructor(private httpCliente: HttpClient) { }

  getUserById(id: number):Observable<User>{

    //return this.httpCliente.get<User>(this.apiUrl+'/'+id);
    return this.httpCliente.get<User>(`${this.apiUrl}/${id}`);

  }
}
