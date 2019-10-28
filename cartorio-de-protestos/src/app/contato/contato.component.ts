import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule  } from '@angular/forms';


import { Contato } from './../shared/contato';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formCliente: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Contato());
  }

  createForm(cliente: Contato) {
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
      tipo: [cliente.tipo],
      email: [cliente.email],
      dataNascimento: [cliente.dataNascimento],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo]
    })
  }

  onSubmit() {
    console.log(this.formCliente.value);
    this.formCliente.reset(new Contato());
  }

}
