import { Injectable } from "@angular/core";
import { CepModel } from "./cep-model";

@Injectable()
export class UserModel {

    constructor (name: string, email: string, phone: string, cep: CepModel) {
        var lastId = 0;

        var idStr = localStorage.getItem("lastId");
        if (idStr) {
            lastId = +idStr
        }
        
        this.id = lastId++;
        localStorage.setItem("lastId", this.id.toString())

        this.name = name;
        this.email = email;
        this.phone = phone;
        this.cep = cep;
    }

    id: number;
    name: string;
    email: string;
    phone: string;
    cep: CepModel;

}