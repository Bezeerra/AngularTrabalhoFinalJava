import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Marca } from "../models/marca.model";


@Injectable({
    providedIn: 'root'
})
export class MarcaService {
    private API = 'http://localhost:8090/api/v1/marcas';
    constructor(private httpClient: HttpClient) { }
    save(marca: Marca): Observable<Marca> {
        return this.httpClient.post<Marca>(this.API, marca);
    }
    listarMarcas(): Observable<any> {
        return this.httpClient.get(this.API)
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete(`${this.API}/${id}`);
    }

    update(id?: number, marca?: Marca): Observable<any> {
        return this.httpClient.put(`${this.API}/${id}`, marca);
    }
    
    buscarPorId(id: number): Observable<any>{
        return this.httpClient.get(`${this.API}/${id}`);
    }
}   