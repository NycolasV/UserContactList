import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepModel } from '../models/cep.model';
import { UserModel } from '../models/user.model';
import { Urls } from '../utils/urls';

@Injectable()
export class UserProvider {

  constructor(private http: HttpClient)
  {
  }

  getCep(cep: string): Observable<CepModel> {
    
    return this.http.get<CepModel>(Urls.cep + cep + "/json/");
  }
  
  saveUser(user: UserModel) {

    localStorage.setItem(user.id.toString(), JSON.stringify(user));
  }

  getUsers(): UserModel[] {
    
    var lastId = 0;
    var lastIdStr = localStorage.getItem("lastId");
    if (lastIdStr) {
        lastId = +lastIdStr;
    }

    var users: Array<UserModel> = new Array<UserModel>();
    for (let i = 1; i <= lastId; i++) {
        users.push(JSON.parse(localStorage.getItem(i.toString())));
    }

    return users;
  }

  getUser(id: number):Observable<UserModel> {
    
    return JSON.parse(localStorage.getItem(id.toString()));
  }

  deleteUser(id: number) {

    localStorage.removeItem(id.toString());
  }
}