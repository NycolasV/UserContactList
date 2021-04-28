import { Injectable } from "@angular/core";

@Injectable()
export class CepModel {

    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    siafi: string;

}