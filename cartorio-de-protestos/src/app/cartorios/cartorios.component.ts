import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { CartorioApiService } from './../shared/cartorio-api.service';



@Component({
  selector: 'app-cartorios',
  templateUrl: './cartorios.component.html',
  styleUrls: ['./cartorios.component.css']
})
export class CartoriosComponent implements OnInit {

  
  cartoriosParticipantes: CartorioApiService[]
  constructor(private cartoriosAPI: CartorioApiService) { }

  ngOnInit() {
    this.cartoriosAPI.listar().subscribe(
      cartoriosParticipantes => this.cartoriosParticipantes = cartoriosParticipantes,

    )
  }

   listar() {
    this.cartoriosAPI.listar().subscribe(dados => this.cartoriosParticipantes = dados)
  }



}
