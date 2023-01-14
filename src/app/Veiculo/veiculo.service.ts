import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Veiculo } from "../models/veiculo.model";


@Injectable({
    providedIn: 'root'
})

export class VeiculoService{
    private API = "http://localhost:8090/api/v1/veiculos";
    private router_findAll = "http://localhost:8090/api/v1/veiculos";

    constructor(private httpClient: HttpClient) { }
    save(veiculo: Veiculo): Observable<Veiculo> {
        return this.httpClient.post<Veiculo>(this.API, veiculo);
    }
    listarVeiculos(): Observable<any> {
        return this.httpClient.get(this.API)
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete(`${this.API}/${id}`);
    }

    update(id?: number, veiculo?: Veiculo): Observable<any> {
        return this.httpClient.put(`${this.API}/${id}`, veiculo);
    }
    
    buscarPorId(id: number): Observable<any>{
        return this.httpClient.get(`${this.API}/${id}`);
    }
}