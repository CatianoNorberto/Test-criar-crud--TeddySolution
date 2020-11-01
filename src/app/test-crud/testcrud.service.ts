import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { formularioModel } from './formulario.Model';

@Injectable({
  providedIn: 'root'
})
export class TestcrudService {

  constructor(private http: HttpClient) { }

  cadastrarprodutos(formulario: formularioModel): Observable<any> {
    return this.http.post('http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products/create', formulario);
  }

  listarProdutos(): Observable<any> {
    return this.http.get('http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products/list');
  }

  atualizarprodutos(_id: String, formulario: formularioModel) {
    return this.http.put(`http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products/${_id}/update`, formulario);
  }

  removerprodutos(_id: any) {
    return this.http.delete(`http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products/${_id}/delete/`)
  }

}
