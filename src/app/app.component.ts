import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContratoComponent } from './shared/contrato/contrato.component'
import { DatosComponent } from './tabla/datos/datos.component';
import { RecursosService } from './servicios/recursos.service';
import {HttpClientModule } from '@angular/common/http';
import { Foto } from './interfaz/foto'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContratoComponent, DatosComponent, HttpClientModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientAngular';
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>
    })
  }
  
}

