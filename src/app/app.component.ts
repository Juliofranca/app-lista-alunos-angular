import { Component } from '@angular/core';
// Import alunos from arquivo.ts
import { alunos } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alunos-lista-app';
  // Setando a variabel alunos com o dataset pra ser usada no HTML
  alunos = alunos;
  
}