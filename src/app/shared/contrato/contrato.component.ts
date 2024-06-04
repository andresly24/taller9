import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contrato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contrato.component.html',
  styleUrl: './contrato.component.css'
})
export class ContratoComponent {
  titulo:string="Contactos"

  medios:any[] = [
    {"texto": 'Twitter'},
    {"texto": 'FB'},
    {"texto": 'Correo'},
  ]

}

