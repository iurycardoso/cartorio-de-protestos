import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';

import { CartorioApiService } from './../shared/cartorio-api.service';



@Component({
  selector: 'app-cartorios',
  templateUrl: './cartorios.component.html',
  styleUrls: ['./cartorios.component.css']
})
export class CartoriosComponent implements OnInit {

  
  cartoriosParticipantes: Array<any>

  constructor(private cartoriosAPI: CartorioApiService) { }

  ngOnInit() {
    this.listar();
  }

   listar() {
    this.cartoriosAPI.listar().subscribe(dados => this.cartoriosParticipantes = dados)
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.cartoriosParticipantes);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
