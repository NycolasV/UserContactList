import { CepModel } from "./cep-model";

export class UserModel {

    constructor (name: string, email: string, phone: string, birthdate: Date, cep: CepModel) {
        var lastId = 0;

        var idStr = localStorage.getItem("lastId");
        if (idStr) {
            lastId = +idStr
        }
        
        this.id = lastId++;
        localStorage.setItem("lastId", this.id.toString())

        this.name = name;
        this.email = email;
        this.phome = phone;
        this.birthdate = birthdate;
        this.cep = cep;
    }

    id: number;
    name: string;
    email: string;
    phome: string;
    birthdate: Date;
    cep: CepModel;

}