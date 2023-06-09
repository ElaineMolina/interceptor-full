import { Component, OnInit } from '@angular/core';

import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;

  constructor(private clientesService: ClientesService,
    private service: ServicoPrestadoService) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe( resposta => 
      this.clientes = resposta);
  }

  onSubmit(){
    this.service.salvar(this.servico).subscribe( resposta => {
      console.log(resposta);
    })
  }
}
