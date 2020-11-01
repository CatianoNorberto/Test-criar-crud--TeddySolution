import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { formularioModel } from './formulario.Model';
import { TestcrudService } from './testcrud.service';

@Component({
  selector: 'app-test-crud',
  templateUrl: './test-crud.component.html',
  styleUrls: ['./test-crud.component.css']
})
export class TestCrudComponent implements OnInit {

  formulario: formularioModel = new formularioModel();
  produtos: Array<any> = new Array();
  formBuilder: any;

  constructor(private testcrudService: TestcrudService) { }

  ngOnInit(): void {
    this.listarProdutos();
    this.configurarProduto();
  }

  configurarProduto() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      marca: [null, Validators.required],
      modelo: [null, Validators.required],
      preco: [null, Validators.required],
      foto: [null, Validators.required],
      descricao: [null, Validators.required]
    });
  }
  atualizarprodutos(_id: String) {
    console.log(_id)
    this.testcrudService.atualizarprodutos(_id, this.formulario).subscribe(formulario => {
      this.formulario = new formularioModel();
      this.listarProdutos();

    }, err => {
      console.log('Erro', err)
    })
  }
  removerprodutos(_id: String) {
    this.testcrudService.removerprodutos(_id).subscribe(formulario => {
      this.formulario = new formularioModel();
      this.listarProdutos();
    }, err => {
      console.log('Erro', err)
    })
  }
  cadastrar() {

    this.testcrudService.cadastrarprodutos(this.formulario).subscribe(formulario => {
      this.formulario = new formularioModel();
      this.listarProdutos();
    }, err => {
      console.log('Erro', err)
    })
  }

  listarProdutos() {
    this.testcrudService.listarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    }, err => {
      console.log('Erro', err)
    })
  }

}
