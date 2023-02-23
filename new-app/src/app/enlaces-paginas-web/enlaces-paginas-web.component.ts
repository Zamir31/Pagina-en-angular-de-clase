import { Component } from '@angular/core';
import { IEnlace } from '../IEnlace';

@Component({
  selector: 'app-enlaces-paginas-web',
  templateUrl: './enlaces-paginas-web.component.html',
  styleUrls: ['./enlaces-paginas-web.component.css']
})
export class EnlacesPaginasWebComponent implements IEnlace {
  nombreLink: string = 'Google';
  url: string = 'http://google.com/';
  
}
