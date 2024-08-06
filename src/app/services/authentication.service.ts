import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import { Userdto } from '../common/userdto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl: string ='http://localhost:8088/api/v1/security';

  constructor(private httpClient: HttpClient) { }


  register(user:User):Observable<User>{

    return this.httpClient.post<User>(this.apiUrl+"/register",user);
  }

  //login(userDto: Userdto).Observable<>
}
