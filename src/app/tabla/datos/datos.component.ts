import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {

  datos:any[] = [
    {'texto':'item1'},
    {'texto':'item2'},
    {'texto':'item3'},
    {'texto':'item4'}
]
}
