import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepModel } from '../models/cep-model';
import { UserModel } from '../models/user-model';
import { Urls } from '../utils/urls';

@Injectable()
export class UserProvider {

  constructor(private http: HttpClient)
  {
  }

  getCep(cep: string): Observable<CepModel> {
   
    var header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", '*');
    header.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
    header.append('Content-Type', 'application/json' );
    
    return this.http.get<CepModel>(Urls.cep + cep + "/json/", {headers: header});
  }
  
  loginUser(username: string, password: string) {

    var users = this.getUsers();

    var i: number;
    for(i = 0; i < users.length; i++) {
      if (users[i].email == username && users[i].password == password) {
        return true;
      }
    }

    return false;
  }

  saveUser(user: UserModel) {

    localStorage.setItem("user-" + user.id.toString(), JSON.stringify(user));
  }

  saveContact(user: UserModel) {

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
        var user = localStorage.getItem("user-" + i.toString());

        if (user) {
          users.push(JSON.parse(user));
        }
    }

    return users;
  }

  getContacts(): UserModel[] {
    
    var lastId = 0;
    var lastIdStr = localStorage.getItem("lastId");
    if (lastIdStr) {
        lastId = +lastIdStr;
    }

    var users: Array<UserModel> = new Array<UserModel>();
    for (let i = 1; i <= lastId; i++) {
      for (let i = 1; i <= lastId; i++) {
        var user = localStorage.getItem(i.toString());

        if (user) {
          users.push(JSON.parse(user));
        }
    }
    }

    return users;
  }

  getUser(id: number):Observable<UserModel> {
    
    return JSON.parse(localStorage.getItem("user-" + id.toString()));
  }

  getContact(id: number):Observable<UserModel> {
    
    return JSON.parse(localStorage.getItem(id.toString()));
  }

  deleteUser(id: number) {

    localStorage.removeItem("user-" + id.toString());
  }

  deleteContacts(id: number) {

    localStorage.removeItem(id.toString());
  }
}